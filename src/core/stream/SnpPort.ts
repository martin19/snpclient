export enum PortType {

}

export type OnDataCallback = (data:Uint8Array, complete?:boolean)=>void;

export interface SnpPortOptions {

}

export class SnpPort {
  type:PortType;
  targetPort:SnpPort|undefined;
  private _onDataCb:OnDataCallback|undefined;

  constructor(options:SnpPortOptions) {
  }

  static connect(sourcePort:SnpPort, targetPort:SnpPort) {
    sourcePort.targetPort = targetPort;
  }

  onData(data:Uint8Array, complete?:boolean) {
    this.targetPort._onDataCb?.(data, complete);
  }

  set onDataCb(value: OnDataCallback | undefined) {
    this._onDataCb = value;
  }
}