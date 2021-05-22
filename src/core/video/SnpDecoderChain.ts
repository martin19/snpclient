import {computeBufferSize} from "../util/BufferUtil";
import {SnpDecoder, SnpDecoderOptions} from "./SnpDecoder";
import {SnpSource, SnpSourceOptions} from "./SnpSource";
import {SnpSink, SnpSinkOptions} from "./SnpSink";

export interface SnpVideoDecoderChainOptions {
  source : SnpSource;
  decoder : SnpDecoder;
  sink : SnpSink;
}

export class SnpDecoderChain {
  private _source : SnpSource;
  private _decoder : SnpDecoder;
  private _sink : SnpSink;

  running : boolean;

  get source(): SnpSource {
    return this._source;
  }

  get decoder(): SnpDecoder {
    return this._decoder;
  }

  get sink(): SnpSink {
    return this._sink;
  }

  constructor(options:SnpVideoDecoderChainOptions) {
    this.running = false;

    this._source = options.source;
    this._decoder = options.decoder;
    this._sink = options.sink;
  }

  async start() {
    this.running = true;
    while(this.running) {
      if(this._source.isReady()) {
        const dataIn = this._source.getNextFrame();
        const dataOut = await this._decoder.process(dataIn);
        this._sink.process(dataOut);
      }
      await this._source.waitNextFrame();
    }
  }

  stop() {
    this.running = false;
  }

}