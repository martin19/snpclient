import {computeBufferSize} from "../../util/BufferUtil";

interface SnpSourceConstructor {
  new (options:SnpSourceOptions): SnpSource;
}

export interface SnpSourceOptions {
  bufferSizeMs? : number;
  minBitrate? : number;
  maxBitrate? : number;
}

export class SnpSource {
  inputBufferSizeMs : number;
  inputMaxBitrate : number;
  minBitrate : number;
  maxInputQueueSizeBytes : number;
  inputQueueSizeBytes : number;
  inputQueue : Uint8Array[];

  inputPromise : Promise<void>|null;
  inputPromiseResolve : (data:void)=>void;
  inputPromiseReject : ()=>void;

  constructor(options : SnpSourceOptions) {
    //configure
    this.inputMaxBitrate = options.maxBitrate ?? 10000000;
    this.inputBufferSizeMs = options.bufferSizeMs ?? 500000;
    this.maxInputQueueSizeBytes = computeBufferSize(this.inputMaxBitrate, this.inputBufferSizeMs);
    this.inputQueue = [];
  }

  process(data:Uint8Array) {
    this.inputQueue.push(data);
    if(this.inputPromise) {
      this.inputPromiseResolve();
    }
  }

  isReady() {
    return this.inputQueue.length > 0;
  }

  getNextFrame() {
    return this.inputQueue.shift();
  }

  async waitNextFrame():Promise<void> {
    if(this.inputQueue.length > 0) {
      return Promise.resolve();
    } else {
      this.inputPromise = new Promise((resolve, reject) => {
        this.inputPromiseResolve = resolve;
        this.inputPromiseReject = reject;
      });
      return this.inputPromise;
    }
  }
}