import SnpDecoderWorkerH264 from 'worker-loader!./worker/SnpDecoderWorkerH264';
import {WebGLFrameSink} from "./yuvcanvas/WebGLFrameSink";
import {SnpDecoder, SnpDecoderOptions} from "./SnpDecoder";


export interface SnpDecoderH264Options extends SnpDecoderOptions {
  width : number;
  height : number;
}

export class SnpDecoderH264 extends SnpDecoder {

  inputSab : SharedArrayBuffer;
  inputSabArray : Uint8Array;
  outputSab : SharedArrayBuffer;
  outputSabArray : Uint8Array;
  snpDecoderWorkerH264:SnpDecoderWorkerH264;
  decodePromise? : Promise<Uint8Array>;
  decodePromiseResolve? : (data:Uint8Array)=>void;
  decodePromiseReject? : (data:Uint8Array)=>void;
  webglFrameSink? : WebGLFrameSink;

  constructor(options:SnpDecoderH264Options) {
    super(options);
    this.snpDecoderWorkerH264 = new SnpDecoderWorkerH264(),
    this.inputSab = new SharedArrayBuffer(1000000);
    this.inputSabArray = new Uint8Array(this.inputSab);
    this.outputSab = new SharedArrayBuffer(1920*1088*3/2);
    this.outputSabArray = new Uint8Array(this.outputSab);
    //webglFrameSink : new WebGLFrameSink(canvas)

    this.snpDecoderWorkerH264.addEventListener("message", (event) => {
      const { type, params } = event.data;
      if(type === "onDecode") {
        console.log(`decode success`);
      } else if(type === "onDecodeError") {
        console.log(`decode error`);
      }
      this.decodePromiseResolve(new Uint8Array(params.output));
    });
  }

  async process(data:Uint8Array) {
    this.inputSabArray.set(data);
    this.snpDecoderWorkerH264.postMessage({
      type: "decode",
      params: {
        input: this.inputSab,
        inputLen: data.length,
        output: this.outputSab
      }
    });

    this.decodePromise = new Promise<Uint8Array>((resolve, reject) => {
      this.decodePromiseResolve = resolve;
      this.decodePromiseReject = reject;
    });

    return this.decodePromise;
  }
}
