interface SnpDecoderConstructor {
  new (options:SnpDecoderOptions): SnpDecoder;
}

export interface SnpDecoderOptions {
}

export abstract class SnpDecoder {
  constructor(options:SnpDecoderOptions) {
  }

  abstract process(data:Uint8Array):Promise<Uint8Array>;
}