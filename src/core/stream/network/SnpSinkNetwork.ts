import {SnpComponent, SnpComponentOptions} from "../SnpComponent";
import {SnpClient} from "../../network/SnpClient";
import {SnpPort} from "../SnpPort";

export interface SnpSinkNetworkOptions extends SnpComponentOptions {
  streamId : number;
  client : SnpClient;
}

const SNP_SINK_NETWORK_BUFFER_SIZE = 500000;

export class SnpSinkNetwork extends SnpComponent {
  private _streamId : number;
  private _client : SnpClient;

  buffer : Uint8Array;
  bufferLength : number;

  constructor(options: SnpSinkNetworkOptions) {
    super(options);
    this.streamId = options.streamId;
    this.client = options.client;

    this.addInputPort(new SnpPort({}));
    this.getInputPort(0).onDataCb = this.onInputData.bind(this);
    this.buffer = new Uint8Array(SNP_SINK_NETWORK_BUFFER_SIZE);
    this.bufferLength = 0;
  }

  get client(): SnpClient {
    return this._client;
  }

  set client(value: SnpClient) {
    this._client = value;
  }

  get streamId(): number {
    return this._streamId;
  }

  set streamId(value: number) {
    this._streamId = value;
  }

  onInputData(data:Uint8Array, complete?:boolean) {
    this.buffer.set(data, this.bufferLength);
    this.bufferLength += data.length;
    if(complete) {
//        usleep(16666);
      this.client.sendStreamData(this.streamId, this.buffer.subarray(0, this.bufferLength));
    }
    this.bufferLength = 0;
  }
}