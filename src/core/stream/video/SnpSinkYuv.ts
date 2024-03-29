import {WebGLFrameSink} from "./yuvcanvas/WebGLFrameSink";
import SnpStreamElement from "../../../ui/SnpStreamElement";
import {YUVBuffer, YUVFrame} from "./yuvcanvas/YuvBuffer";
import {SnpComponent, SnpComponentOptions} from "../SnpComponent";
import {SnpPort} from "../SnpPort";

export interface SnpSinkYuvOptions extends SnpComponentOptions {
  width:number;
  height:number;
  snpStreamElement : SnpStreamElement;
}

export class SnpSinkYuv extends SnpComponent {

  frameWidth: number;
  frameHeight: number;
  frameWidthMbAligned : number;
  frameHeightMbAligned : number;

  snpStreamElement : SnpStreamElement;
  canvas: HTMLCanvasElement;
  frameSink: WebGLFrameSink;

  constructor(options: SnpSinkYuvOptions) {
    super(options);

    this.frameWidth = options.width;
    this.frameHeight = options.height;
    this.frameWidthMbAligned = (this.frameWidth + 15) & (~15);
    this.frameHeightMbAligned = (this.frameHeight + 15) & (~15);

    this.addInputPort(new SnpPort({}));
    this.getInputPort(0).onDataCb = this.onInputData.bind(this);

    this.snpStreamElement = options.snpStreamElement;
    this.canvas = options.snpStreamElement.canvas;
    this.frameSink = new WebGLFrameSink(this.canvas);
    this.frameWidth = options.width;
    this.frameHeight = options.height;
  }

  onInputData(data: Uint8Array, complete? : boolean) {

    const width = this.frameWidthMbAligned;
    const height = this.frameHeightMbAligned;
    const cropWidth = this.frameWidth;
    const cropHeight = this.frameHeight;

    const frame: YUVFrame = {
      format: YUVBuffer.format({
        width: width,
        height: height,
        chromaWidth: width / 2,
        chromaHeight: height / 2,
        cropLeft: 0, // default
        cropTop: 0, // default
        cropWidth: cropWidth, // derived from width
        cropHeight: cropHeight,
        displayWidth: cropWidth, // derived from width via cropWidth
        displayHeight: cropHeight // derived from cropHeight
      }),
      y: {
        bytes: data.subarray(0, width * height),
        stride: width,
      },
      u: {
        bytes: data.subarray(width * height, (width * height) + (width * height) / 4),
        stride: width / 2,
      },
      v: {
        bytes: data.subarray((width * height) + (width * height / 4), (width * height) + (width * height / 4) + (width * height / 4)),
        stride: width / 2,
      }
    }
    window.requestAnimationFrame(()=>{
      this.frameSink.drawFrame(frame);
    });
  }
}

/**

 // async postSomeNalus() {
//   //get some test data in nalu format and simulate network packets.
//   // for(let i = 0; i < 3309; i++) {
//   for(let i = 0; i < 3309; i++) {
//     const data = await fetchData("testdata/simpsons/simpsons.264." + (i.toString()).padStart(4, "0"));
//     this.pool.forEach(ctx => {
//       ctx.inputSabArray.set(data);
//       ctx.decodePromise = new Promise<Uint8Array>((resolve, reject) => {
//         ctx.decodePromiseResolve = resolve;
//         ctx.decodePromiseReject = reject;
//       });
//       ctx.snpDecoderWorkerH264.postMessage({
//         type: "decode",
//         params: {
//           input: ctx.inputSab,
//           inputLen: data.length,
//           output: ctx.outputSab
//         }
//       });
//     });
//
//     let frames = await Promise.all(this.pool.map(ctx => { return ctx.decodePromise; }));
//
//     this.pool.forEach((ctx, i) => {
//       const pic = frames[i];
//
//       //upload to texture.
//       const width = 1920;
//       const height = 800;

//   }
// }

 */