import {Message, MessageType, ServerInfo, StreamData, StreamChange, StreamStatistics} from "./proto/snappyv1";


export interface SnpClientOptions {
  url : string
  onServerInfo : (msg:ServerInfo) => void;
  onStreamsChange : (msg:StreamChange) => void;
  onStreamData : (msg:StreamData) => void;
}

export class SnpSocket {
  url : string;
  socket : WebSocket;
  onServerInfo : (msg:ServerInfo) => void;
  onStreamChange : (msg:StreamChange) => void;
  onStreamData : (msg:StreamData) => void;

  constructor(options:SnpClientOptions) {
    this.url = options.url;
    this.onServerInfo = options.onServerInfo;
    this.onStreamChange = options.onStreamsChange;
    this.onStreamData = options.onStreamData;
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
      const message = Message.decode(new Uint8Array(e.data));
      switch(message.type) {
        case MessageType.MESSAGE_TYPE_SERVER_INFO: {
          this.onServerInfo(message.serverInfo);
        } break;
        case MessageType.MESSAGE_TYPE_STREAMS_CHANGE: {
          this.onStreamChange(message.streamChange);
        } break;
        case MessageType.MESSAGE_TYPE_STREAM_DATA: {
          this.onStreamData(message.streamData);
        } break;
      }
    }
  }

  private onStreamStatistics(streamStatistics: StreamStatistics) {
    //dump statistics for now
    console.log(JSON.stringify(streamStatistics, null, " "));
  }

  sendStreamsChange(streamsChange:StreamChange) {
    console.log(StreamChange.encode(streamsChange).ldelim().finish());
  }
}