import SnpDecoderWorkerH264 from 'worker-loader!./h264decoder/worker/SnpDecoderWorkerH264';
import {WebGLFrameSink} from "./yuvcanvas/WebGLFrameSink";
import {SnpComponent, SnpComponentOptions} from "../SnpComponent";
import {SnpPort} from "../SnpPort";


export interface SnpDecoderH264Options extends SnpComponentOptions {
  width : number;
  height : number;
}

let t0 = 0;
let t1 = 0;
let statlog:HTMLTextAreaElement = null;


export class SnpDecoderH264 extends SnpComponent {

  inputSab : SharedArrayBuffer;
  inputSabArray : Uint8Array;
  outputSab : SharedArrayBuffer;
  outputSabArray : Uint8Array;
  snpDecoderWorkerH264:SnpDecoderWorkerH264;
  decodePromise? : Promise<Uint8Array>;
  decodePromiseResolve? : (data:Uint8Array)=>void;
  decodePromiseReject? : (data:Uint8Array)=>void;
  webglFrameSink? : WebGLFrameSink;
  decoding : boolean;

  frameWidth : number;
  frameHeight : number;
  frameWidthMbAligned : number;
  frameHeightMbAligned : number;

  inputBuffer : Uint8Array[];

  constructor(options:SnpDecoderH264Options) {
    super(options);

    this.frameWidth = options.width;
    this.frameHeight = options.height;

    this.frameWidthMbAligned = (this.frameWidth + 15) & (~15);
    this.frameHeightMbAligned = (this.frameHeight + 15) & (~15);

    this.addInputPort(new SnpPort({}));
    this.addOutputPort(new SnpPort({}));
    this.getInputPort(0).onDataCb = this.onInputData.bind(this);

    this.snpDecoderWorkerH264 = new SnpDecoderWorkerH264(),
    this.inputSab = new SharedArrayBuffer(1000000);
    this.inputSabArray = new Uint8Array(this.inputSab);
    this.outputSab = new SharedArrayBuffer(this.frameWidthMbAligned*this.frameHeightMbAligned*3/2);
    this.outputSabArray = new Uint8Array(this.outputSab);
    //webglFrameSink : new WebGLFrameSink(canvas)

    this.snpDecoderWorkerH264.addEventListener("message", (event) => {
      const { type, params } = event.data;
      if(type === "onDecode") {
        // console.log(`decode success`);
        t1 = performance.now();
        if(statlog === null) {
          statlog = document.querySelector(".stats .stat-log") as HTMLTextAreaElement;
        }
        if(statlog) statlog.value = "dec = " + (t1-t0).toFixed(2) + "\n" +
        "buffered frames = "+this.inputBuffer.length;

        // t0 = performance.now();
        this.getOutputPort(0).onData(new Uint8Array(params.output), true);
        // t1 = performance.now();
        // if(displayTime === null) {
        //   displayTime = document.querySelector(".stats .display-time") as HTMLSpanElement;
        // }
        // if(displayTime) displayTime.innerText = "dis = " + (t1-t0).toFixed(2);
      } else if(type === "onDecodeError") {
        console.log(`decode error`);
      }

      this.decoding = false;
      if(this.inputBuffer.length > 0) {
        this.onInputData(null);
      }
    });

    this.inputBuffer = [];
  }

  onInputData(data:Uint8Array|null, complete?:boolean) {
    if(data) this.inputBuffer.unshift(data);

    if(!this.decoding) {
      this.decoding = true;
      const data = this.inputBuffer.pop();
      this.inputSabArray.set(data);
      t0 = performance.now();
      this.snpDecoderWorkerH264.postMessage({
        type: "decode",
        params: {
          input: this.inputSab,
          inputLen: data.length,
          output: this.outputSab
        }
      });
    }
  }
}
