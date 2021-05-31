import {SnpSocket} from "../network/SnpSocket";
import {
  Command,
  EncoderType,
  Message,
  MessageType,
  ServerInfo,
  SourceSubType,
  SourceType,
  StreamsChange,
  StreamData, ParameterType
} from "../network/proto/snappyv1";
import SnpStreamElement from "../../ui/SnpStreamElement";
import {SnpDecoderH264} from "../stream/video/SnpDecoderH264";
import {SnpSinkYuv} from "../stream/video/SnpSinkYuv";
import {OnDataCallback, SnpPort} from "../stream/SnpPort";
import {SnpSourceNetwork} from "../stream/network/SnpSourceNetwork";
import {SnpPipe} from "../stream/SnpPipe";
import {SnpSourceMouse} from "../stream/input/SnpSourceMouse";
import {SnpSinkNetwork} from "../stream/network/SnpSinkNetwork";
import {SnpSourceKeyboard} from "../stream/input/SnpSourceKeyboard";
import {SnpSinkCursor} from "../stream/input/SnpSinkCursor";

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

  serverInfo : ServerInfo;
  serverInfoReady : Promise<void>;

  socket : SnpSocket;
  fixedVideoPipe : SnpPipe;
  fixedMousePipe : SnpPipe;
  fixedKeyboardPipe : SnpPipe;
  fixedCursorPipe : SnpPipe;

  streamListeners : Map<number, OnDataCallback>;

  constructor(options : SnpClientOptions) {
    this.socket = new SnpSocket({
      url : options.url,
      onServerInfo : this.onServerInfo.bind(this),
      onStreamsChange : this.onStreamsChange.bind(this),
      onStreamData : this.onStreamData.bind(this)
    });

    this.streamListeners = new Map();

    //create a fixed video pipe
    {
      const snpStreamElement = document.getElementsByTagName("snp-stream").item(0) as SnpStreamElement;
      //TODO: move this somewhere else.
      snpStreamElement.streamWidth = 1920;
      snpStreamElement.streamHeight = 1088;
      const source = new SnpSourceNetwork({
        streamId : 0,
        client : this
      });
      const decoder = new SnpDecoderH264({
        width : 1920,
        height : 1088,
      });
      const sink = new SnpSinkYuv({
        width : 1920,
        height : 1088,
        snpStreamElement : snpStreamElement
      });
      SnpPort.connect(source.getOutputPort(0), decoder.getInputPort(0));
      SnpPort.connect(decoder.getOutputPort(0), sink.getInputPort(0));

      this.fixedVideoPipe = new SnpPipe({});
      this.fixedVideoPipe.addComponent(source);
      this.fixedVideoPipe.addComponent(decoder);
      this.fixedVideoPipe.addComponent(sink);
    }
    //create a fixed input mouse pipe
    {
      const snpStreamElement = document.getElementsByTagName("snp-stream").item(0) as SnpStreamElement;
      const source = new SnpSourceMouse({
        snpStreamElement : snpStreamElement
      });
      const sink = new SnpSinkNetwork({
        streamId : 1,
        client : this,
      });
      SnpPort.connect(source.getOutputPort(0), sink.getInputPort(0));
      this.fixedMousePipe = new SnpPipe({});
      this.fixedMousePipe.addComponent(source);
      this.fixedMousePipe.addComponent(sink);
    }
    //create a fixed input keyboard pipe
    {
      const snpStreamElement = document.getElementsByTagName("snp-stream").item(0) as SnpStreamElement;
      const source = new SnpSourceKeyboard({
        snpStreamElement : snpStreamElement
      });
      const sink = new SnpSinkNetwork({
        streamId : 2,
        client : this,
      });
      SnpPort.connect(source.getOutputPort(0), sink.getInputPort(0));
      this.fixedKeyboardPipe = new SnpPipe({});
      this.fixedKeyboardPipe.addComponent(source);
      this.fixedKeyboardPipe.addComponent(sink);
    }
    //create a fixed cursor pipe
    {
      const snpStreamElement = document.getElementsByTagName("snp-stream").item(0) as SnpStreamElement;
      const source = new SnpSourceNetwork({
        client : this,
        streamId : 3
      });
      const sink = new SnpSinkCursor({
        snpStreamElement : snpStreamElement
      });
      SnpPort.connect(source.getOutputPort(0), sink.getInputPort(0));
      this.fixedCursorPipe = new SnpPipe({});
      this.fixedCursorPipe.addComponent(source);
      this.fixedCursorPipe.addComponent(sink);
    }

    //start all pipes
    this.fixedMousePipe.start();
    this.fixedKeyboardPipe.start();
    this.fixedVideoPipe.start();
    this.fixedCursorPipe.start();
  }

  connect() {
    this.socket.connect();
  }

  disconnect() {
    this.socket.disconnect();
  }

  private onServerInfo(/*msg:ServerInfo*/) {
    /*this.serverInfo = msg;*/

    //TODO: Negotiation: determine which stream should be requested.
    //* server has a list of supported codecs and available sources to choose from
    //* client has a list of supported codecs
    //* user (or default) can choose from available sources

    //send a streams change request
    let streamsChange:StreamsChange = {
      streams : [
        {
          id : 0,
          command : Command.COMMAND_INIT,
          source : {
            type : SourceType.SOURCE_TYPE_VIDEO,
            subType : SourceSubType.SOURCE_SUB_TYPE_X11,
            parameters : [
              { type : ParameterType.PARAMETER_TYPE_UINT32, key : "width", value : { $case:"valueUint32", valueUint32 : { value : 1920 } }},
              { type : ParameterType.PARAMETER_TYPE_UINT32, key : "height", value: { $case:"valueUint32", valueUint32 : { value : 1080 } }},
            ]
          },
          encoder : {
            type : EncoderType.ENCODER_TYPE_H264_HARDWARE,
            parameters : [
              { type : ParameterType.PARAMETER_TYPE_UINT32, key : "qp", value: { $case:"valueUint32", valueUint32 : { value : 10 } }},
              { type : ParameterType.PARAMETER_TYPE_DOUBLE, key : "unknownDouble", value: { $case:"valueDouble", valueDouble : { value : 1.0 } }},
              { type : ParameterType.PARAMETER_TYPE_BOOL, key : "unknownBool", value: { $case:"valueBool", valueBool : { value : true }}},
              { type : ParameterType.PARAMETER_TYPE_STRING, key : "unknownString", value: { $case:"valueString", valueString : { value : "foo" }}},
            ]
          }
        },
        {
          id : 1,
          command : Command.COMMAND_INIT,
          source : {
            type : SourceType.SOURCE_TYPE_AUDIO,
            subType: SourceSubType.SOURCE_SUB_TYPE_X11,
            parameters: []
          },
          encoder : {
            type : EncoderType.ENCODER_TYPE_MP3_HARDWARE,
            parameters: []
          }
        }
      ]
    };
    this.socket.sendStreamsChange(streamsChange);
  }

  private onStreamsChange(msg:StreamsChange) {
    //TODO: initialize an appropriate stream
    //if a stream with this id exists, rebuild it
    //if no stream with this id exists, create it
    // streamChange.id
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
      let msg:Message = {
        type : MessageType.MESSAGE_TYPE_STREAM_DATA,
        streamData : {
          streamId : streamId,
          payload : buffer
        }
      } as Message;

      this.socket.send(msg);
  }
}