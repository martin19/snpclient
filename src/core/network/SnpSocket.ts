import {Message, MessageType, StreamChange, StreamData, StreamInfo} from "./proto/snappyv1";
import {SnpSource} from "../stream/video/SnpSource";
import {SnpDecoderH264} from "../stream/video/SnpDecoderH264";
import {SnpSinkYuv} from "../stream/video/SnpSinkYuv";
import SnpStreamElement from "../../ui/SnpStreamElement";


export interface SnpClientOptions {
  url : string
  onStreamInfo : (msg:StreamInfo) => void;
  onStreamChange : (msg:StreamChange) => void;
  onStreamData : (msg:StreamData) => void;
}

export class SnpSocket {
  url : string;
  socket : WebSocket;
  onStreamInfo : (msg:StreamInfo) => void;
  onStreamChange : (msg:StreamChange) => void;
  onStreamData : (msg:StreamData) => void;

  constructor(options:SnpClientOptions) {
    this.url = options.url;
    this.onStreamInfo = options.onStreamInfo;
    this.onStreamChange = options.onStreamChange;
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
        case "streamInfo":
          this.onStreamInfo(message.message.streamInfo);
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

  // private onStreamStatistics(streamStatistics: StreamStatistics) {
  //   //dump statistics for now
  //   console.log(JSON.stringify(streamStatistics, null, " "));
  // }

  sendStreamChange(streamChange:StreamChange) {
    let msg:Message = {
      type : MessageType.MESSAGE_TYPE_STREAM_CHANGE,
      message : {
        $case : "streamChange", streamChange : streamChange
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