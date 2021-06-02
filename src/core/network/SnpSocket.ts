import {Message, MessageType, ServerInfo, StreamData, StreamsChange, StreamStatistics} from "./proto/snappyv1";
import {SnpSource} from "../stream/video/SnpSource";
import {SnpDecoderH264} from "../stream/video/SnpDecoderH264";
import {SnpSinkYuv} from "../stream/video/SnpSinkYuv";
import SnpStreamElement from "../../ui/SnpStreamElement";


export interface SnpClientOptions {
  url : string
  onServerInfo : (msg:ServerInfo) => void;
  onStreamsChange : (msg:StreamsChange) => void;
  onStreamData : (msg:StreamData) => void;
}

export class SnpSocket {
  url : string;
  socket : WebSocket;
  onServerInfo : (msg:ServerInfo) => void;
  onStreamChange : (msg:StreamsChange) => void;
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
      switch(message.message.$case) {
        case "serverInfo":
          this.onServerInfo(message.message.serverInfo);
          break;
        case "streamChange":
          this.onStreamChange(message.message.streamChange);
          break;
        case "streamData":
          this.onStreamData(message.message.streamData)
          break;
        default: {
          console.log("received invalid message");
        }
      }
    }
  }

  private onStreamStatistics(streamStatistics: StreamStatistics) {
    //dump statistics for now
    console.log(JSON.stringify(streamStatistics, null, " "));
  }

  sendStreamsChange(streamsChange:StreamsChange) {
    let msg:Message = {
      type : MessageType.MESSAGE_TYPE_STREAMS_CHANGE,
      message : {
        $case : "streamChange", streamChange : streamsChange
      }
    } as Message;
    this.socket.send(Message.encode(msg).finish());
  }

  sendStreamData(streamData:StreamData) {
    let msg:Message = {
      type : MessageType.MESSAGE_TYPE_STREAM_DATA,
      message : {
        $case : "streamData", streamData : streamData
      }
    };
    this.socket.send(Message.encode(msg).finish());
  }
}