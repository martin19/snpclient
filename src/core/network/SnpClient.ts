import {readUint32} from "../util/BufferUtil";
import {ServerInfo, StreamChange, StreamStatistics} from "./proto/snappyv1";

enum MessageType {
  //server -> client
  ServerInfo,
  StreamStatistics,
  StreamChange,
  StreamData,

  //client -> server
  StreamStart,
  StreamStop,
  Pointer,
  Keyboard,
  SetResolution,
  SetVideoStreamAttributes,
  SetAudioStreamAttributes
}

export interface SnpClientOptions {
  url : string
}

export class SnpClient {
  url : string;
  socket : WebSocket;

  constructor(options:SnpClientOptions) {
    this.url = options.url;
  }

  connect() {
    this.socket = new WebSocket(this.url);
    this.socket.binaryType = "arraybuffer";
    this.socket.addEventListener("message", this.messageHandler.bind(this))
  }

  disconnect() {
    this.socket.close();
  }

  messageHandler(e:MessageEvent) {
    if(e.data instanceof ArrayBuffer) {
      const message = new Uint8Array(e.data);
      const length = readUint32(message, 0);
      const type = readUint32(message, 4) as MessageType;
      const payload = message.subarray(8);
      switch(type) {
        case MessageType.ServerInfo: {
          this.onServerInfo(ServerInfo.decode(payload));
        } break;
        case MessageType.StreamChange: {
          this.onStreamChange(StreamChange.decode(payload));
        } break;
        case MessageType.StreamStatistics: {
          this.onStreamStatistics(StreamStatistics.decode(payload));
        } break;
        case MessageType.StreamData: {
          this.onStreamData(payload);
        } break;
      }
      ServerInfo.decode(message.subarray(8))
    }
  }

  private onServerInfo(serverInfo: ServerInfo) {
    //TODO: dump server info for now
    console.log(JSON.stringify(serverInfo, null, " "));
  }

  private onStreamChange(streamChange: StreamChange) {
    //TODO: initialize an appropriate stream
    //if a stream with this id exists, rebuild it
    //if no stream with this id exists, create it
    // streamChange.id
  }

  private onStreamData(payload: Uint8Array) {
    const streamId = readUint32(payload, 0);
    //pass data to decoder
  }

  private onStreamStatistics(streamStatistics: StreamStatistics) {
    //dump statistics for now
    console.log(JSON.stringify(streamStatistics, null, " "));
  }
}