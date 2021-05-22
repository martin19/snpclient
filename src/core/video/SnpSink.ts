interface SnpSinkConstructor {
  new (options:SnpSinkOptions): SnpSink;
}

export interface SnpSinkOptions {
}

export abstract class SnpSink {
  constructor(options : SnpSinkOptions) {
  }

  abstract process(data:Uint8Array):void;
}