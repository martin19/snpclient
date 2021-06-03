import SnpDecoderWorkerH264 from 'worker-loader!./h264decoder/worker/SnpDecoderWorkerH264';
import {WebGLFrameSink} from "./yuvcanvas/WebGLFrameSink";
import {SnpComponent, SnpComponentOptions} from "../SnpComponent";
import {SnpPort} from "../SnpPort";


export interface SnpDecoderH264Options extends SnpComponentOptions {
  width : number;
  height : number;
}

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

  inputBuffer : Uint8Array[];

  constructor(options:SnpDecoderH264Options) {
    super(options);

    this.addInputPort(new SnpPort({}));
    this.addOutputPort(new SnpPort({}));
    this.getInputPort(0).onDataCb = this.onInputData.bind(this);

    this.snpDecoderWorkerH264 = new SnpDecoderWorkerH264(),
    this.inputSab = new SharedArrayBuffer(1000000);
    this.inputSabArray = new Uint8Array(this.inputSab);
    this.outputSab = new SharedArrayBuffer(1920*1088*3/2);
    this.outputSabArray = new Uint8Array(this.outputSab);
    //webglFrameSink : new WebGLFrameSink(canvas)

    this.snpDecoderWorkerH264.addEventListener("message", (event) => {
      const { type, params } = event.data;
      if(type === "onDecode") {
        // console.log(`decode success`);
        this.getOutputPort(0).onData(new Uint8Array(params.output), true);
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
