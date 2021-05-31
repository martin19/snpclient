import {SnpComponent, SnpComponentOptions} from "../SnpComponent";
import {SnpClient} from "../../network/SnpClient";
import {SnpPort} from "../SnpPort";

export interface SnpSourceNetworkOptions extends SnpComponentOptions {
  streamId : number;
  client : SnpClient;
}

export class SnpSourceNetwork extends SnpComponent {
  private _streamId : number;
  private _client : SnpClient;
  constructor(options: SnpSourceNetworkOptions) {
    super(options);
    this.streamId = options.streamId;
    this.client = options.client;

    this.addOutputPort(new SnpPort({}));
    this.client.setStreamListener(this.streamId, this.onInputData.bind(this))
  }

  get streamId(): number {
    return this._streamId;
  }

  set streamId(value: number) {
    this._streamId = value;
  }

  get client(): SnpClient {
    return this._client;
  }

  set client(value: SnpClient) {
    this._client = value;
  }

  onInputData(data : Uint8Array, complete? : boolean) {
    this.getOutputPort(0).onData(data, complete);
  }
}