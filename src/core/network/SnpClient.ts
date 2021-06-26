import {SnpSocket} from "../network/SnpSocket";
import {
  Command,
  StreamChange,
  StreamData,
  StreamDirection,
  StreamEncoding,
  StreamEndpoint,
  StreamInfo,
  StreamMedium
} from "../network/proto/snappyv1";
import {OnDataCallback} from "../stream/SnpPort";
import {SnpPipe} from "../stream/SnpPipe";
import {SnpPipeFactory} from "../stream/SnpPipeFactory";
import {PropertyUtil} from "../util/PropertyUtil";

export interface SnpClientOptions {
  url : string;
  // requestedStreams : [
  //   {
  //     type : "video",
  //     source : ["x11","wayland"],
  //     encoder : ["h264_hardware", "h264_software"]
  //   },
  //   {
  //     type : "audio",
  //     source : ["primary"],
  //     encoder: ["mp3_hardware", "mp3_software"]
  //   }
  // ]
}

export class SnpClient {

  streamInfo : StreamInfo;
  streamInfoReady : Promise<void>;

  socket : SnpSocket;
  pipes : Map<number, SnpPipe>;

  streamListeners : Map<number, OnDataCallback>;

  constructor(options : SnpClientOptions) {
    this.socket = new SnpSocket({
      url : options.url,
      onStreamInfo : this.onStreamInfo.bind(this),
      onStreamChange : this.onStreamChange.bind(this),
      onStreamData : this.onStreamData.bind(this)
    });

    this.streamListeners = new Map();
    this.pipes = new Map();
  }

  connect() {
    this.socket.connect();
  }

  disconnect() {
    this.socket.disconnect();
  }

  private onStreamInfo(/*msg:ServerInfo*/) {
    //TODO: Negotiation

    //Video stream
    {
      let streamChange: StreamChange = {
        id: 0,
        command: Command.COMMAND_INIT,
        streamMedium: StreamMedium.STREAM_MEDIUM_VIDEO,
        streamEndpoint: StreamEndpoint.STREAM_ENDPOINT_X11,
        streamDirection: StreamDirection.STREAM_DIRECTION_OUTPUT,
        streamEncoding: StreamEncoding.STREAM_ENCODING_H264_SOFTWARE,
        property : []
      }
      this.socket.sendStreamChange(streamChange);
    }

    //Mouse stream
    {
      let streamChange: StreamChange = {
        id: 1,
        command: Command.COMMAND_INIT,
        streamMedium: StreamMedium.STREAM_MEDIUM_PERIPHERIAL,
        streamEndpoint: StreamEndpoint.STREAM_ENDPOINT_POINTER,
        streamDirection: StreamDirection.STREAM_DIRECTION_INPUT,
        streamEncoding: StreamEncoding.UNRECOGNIZED,
        property : []
      }
      this.socket.sendStreamChange(streamChange);
    }

    //Mouse stream
    {
      let streamChange: StreamChange = {
        id: 2,
        command: Command.COMMAND_INIT,
        streamMedium: StreamMedium.STREAM_MEDIUM_PERIPHERIAL,
        streamEndpoint: StreamEndpoint.STREAM_ENDPOINT_KEYBOARD,
        streamDirection: StreamDirection.STREAM_DIRECTION_INPUT,
        streamEncoding: StreamEncoding.UNRECOGNIZED,
        property : []
      }
      this.socket.sendStreamChange(streamChange);
    }

    //Cursor stream
    {
      let streamChange: StreamChange = {
        id: 3,
        command: Command.COMMAND_INIT,
        streamMedium: StreamMedium.STREAM_MEDIUM_PERIPHERIAL,
        streamEndpoint: StreamEndpoint.STREAM_ENDPOINT_CURSOR,
        streamDirection: StreamDirection.STREAM_DIRECTION_OUTPUT,
        streamEncoding: StreamEncoding.UNRECOGNIZED,
        property : []
      }
      this.socket.sendStreamChange(streamChange);
    }

  }

  private onStreamChange(msg:StreamChange) {
    console.log("onStreamChange");
    console.log(msg);

    switch(msg.command) {
      case Command.COMMAND_INIT: this.onStreamChangeInit(msg); break;
      case Command.COMMAND_INIT_OK: this.onStreamChangeInitOk(msg); break;
      case Command.COMMAND_START: this.onStreamChangeStart(msg); break;
      case Command.COMMAND_STOP: this.onStreamChangeStop(msg); break;
      case Command.COMMAND_DESTROY: this.onStreamChangeDestroy(msg); break;
    }
  }

  onStreamChangeInit(msg:StreamChange) {
    throw "not implemented";
  }

  onStreamChangeInitOk(msg:StreamChange) {
    let streamId = msg.id;

    const selfDirection = msg.streamDirection === StreamDirection.STREAM_DIRECTION_INPUT ?
      StreamDirection.STREAM_DIRECTION_OUTPUT : StreamDirection.STREAM_DIRECTION_INPUT;

    const pipe = SnpPipeFactory.createPipe(streamId, this, msg.streamMedium, selfDirection, msg.streamEndpoint,
      msg.streamEncoding, PropertyUtil.protocolPropertyArrayToSnpPropertyMap(msg.property));
    if(pipe) {
      this.pipes.set(streamId, pipe);
      pipe.state.peer = "initialized";
      pipe.state.self = "initialized";

      //notify peer stream is initialized.
      let streamChangeInitOk: StreamChange = {
        id: streamId,
        command: Command.COMMAND_INIT_OK,
        streamMedium: msg.streamMedium,
        streamEndpoint: msg.streamEndpoint,
        streamDirection: selfDirection,
        streamEncoding: msg.streamEncoding,
        property : []
      }
      this.socket.sendStreamChange(streamChangeInitOk);

      //immediately start stream
      //TODO: start self side of stream.
      let streamChangeStart: StreamChange = {
        id: streamId,
        command: Command.COMMAND_START,
        streamMedium: msg.streamMedium,
        streamEndpoint: msg.streamEndpoint,
        streamDirection: selfDirection,
        streamEncoding: msg.streamEncoding,
        property : []
      }
      this.socket.sendStreamChange(streamChangeStart);
    }
  }

  onStreamChangeStart(msg:StreamChange) {
    throw "not implemented";
  }

  onStreamChangeStop(msg:StreamChange) {
    throw "not implemented";
  }

  onStreamChangeDestroy(msg:StreamChange) {
    throw "not implemented";
  }


  public setStreamListener(streamId : number, cb : OnDataCallback) {
    this.streamListeners.set(streamId, cb);
  }

  public onStreamData(streamData:StreamData) {
    const streamId = streamData.streamId;
    const listener = this.streamListeners.get(streamId);
    listener?.(streamData.payload, true);
  }

  public sendStreamData(streamId : number, buffer : Uint8Array) {
      let streamData:StreamData = {
        streamId : streamId,
        payload : buffer
      };

      this.socket.sendStreamData(streamData);
  }
}