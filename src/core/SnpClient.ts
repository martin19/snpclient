import {SnpDecoderChain} from "./video/SnpDecoderChain";
import {SnpSocket} from "./network/SnpSocket";
import {
  Command,
  EncoderType,
  Parameter_ParameterType,
  ServerInfo,
  SourceSubType,
  SourceType,
  StreamData,
  StreamChange
} from "./network/proto/snappyv1";

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
  decoderChains : Map<string, SnpDecoderChain>;

  constructor(options : SnpClientOptions) {
    this.socket = new SnpSocket({
      url : options.url,
      onServerInfo : this.onServerInfo.bind(this),
      onStreamsChange : this.onStreamsChange.bind(this),
      onStreamData : this.onStreamData.bind(this)
    });
    this.decoderChains = new Map();
  }

  connect() {
    this.onServerInfo()
    // this.socket.connect();
  }

  disconnect() {

  }

  private onServerInfo(/*msg:ServerInfo*/) {
    /*this.serverInfo = msg;*/

    //TODO: Negotiation: determine which stream should be requested.
    //* server has a list of supported codecs and available sources to choose from
    //* client has a list of supported codecs
    //* user (or default) can choose from available sources

    //send a streams change request
    let streamsChange:StreamChange = {
      streams : [
        {
          id : 0,
          command : Command.COMMAND_INIT,
          source : {
            type : SourceType.SOURCE_TYPE_VIDEO,
            subType : SourceSubType.SOURCE_SUB_TYPE_X11,
            parameters : [
              { type : Parameter_ParameterType.UINT32, key : "width", valueUint32 : { value : 1920 } },
              { type : Parameter_ParameterType.UINT32, key : "height", valueUint32 : { value : 1080 } },
            ]
          },
          encoder : {
            type : EncoderType.ENCODER_TYPE_H264_HARDWARE,
            parameters : [
              { type : Parameter_ParameterType.UINT32, key : "qp", valueUint32 : { value : 10 } },
              { type : Parameter_ParameterType.DOUBLE, key : "unknownDouble", valueDouble : { value : 1.0 } },
              { type : Parameter_ParameterType.BOOL, key : "unknownBool", valueBool : { value : true }},
              { type : Parameter_ParameterType.STRING, key : "unknownString", valueString : { value : "foo" }},
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


    const streamData:StreamData = {
      streamId : 1,
      payload : new Uint8Array(1000)
    }
    console.log(StreamData.encode(streamData).finish());
  }

  private onStreamsChange(msg:StreamChange) {
    //TODO: initialize an appropriate stream
    //if a stream with this id exists, rebuild it
    //if no stream with this id exists, create it
    // streamChange.id
  }

  private onStreamData(msg:StreamData) {
    //TODO: feed stream data in the appropriate Chain
  }
}