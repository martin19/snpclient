import {SnpClient} from "../network/SnpClient";
import {StreamDirection, StreamEncoding, StreamEndpoint, StreamMedium} from "../network/proto/snappyv1";
import {SnpPipe} from "./SnpPipe";
import {SnpSourceMouse} from "./input/SnpSourceMouse";
import {SnpSinkNetwork} from "./network/SnpSinkNetwork";
import {SnpPort} from "./SnpPort";
import SnpStreamElement from "../../ui/SnpStreamElement";
import {SnpSourceKeyboard} from "./input/SnpSourceKeyboard";
import {SnpSourceNetwork} from "./network/SnpSourceNetwork";
import {SnpSinkCursor} from "./input/SnpSinkCursor";
import {SnpSinkYuv} from "./video/SnpSinkYuv";
import {SnpDecoderH264} from "./video/SnpDecoderH264";
import {SnpProperty} from "./SnpProperty";

export class SnpPipeFactory {
  static createPipe(streamId : number, client : SnpClient, medium:StreamMedium, direction:StreamDirection,
                    endpoint:StreamEndpoint, encoding:StreamEncoding, properties:Map<string, SnpProperty>) {
    switch(medium) {
      case StreamMedium.STREAM_MEDIUM_VIDEO: return SnpPipeFactory.createVideoPipe(streamId, client, direction, endpoint, encoding, properties);
      case StreamMedium.STREAM_MEDIUM_AUDIO: return SnpPipeFactory.createAudioPipe(streamId, client, direction, endpoint, encoding, properties);
      case StreamMedium.STREAM_MEDIUM_PERIPHERIAL: return SnpPipeFactory.createPeripherialPipe(streamId, client, direction, endpoint, encoding, properties);
    }
  }

  static createVideoPipe(streamId : number, client : SnpClient, direction:StreamDirection, endpoint:StreamEndpoint, encoding:StreamEncoding,
                         properties:Map<string, SnpProperty>):SnpPipe|null {
    switch (direction) {
      case StreamDirection.STREAM_DIRECTION_INPUT: return SnpPipeFactory.createVideoInputPipe(streamId, client, endpoint, encoding, properties);
      case StreamDirection.STREAM_DIRECTION_OUTPUT: return SnpPipeFactory.createVideoOutputPipe(streamId, client, endpoint, encoding, properties);
    }
  }

  static createAudioPipe(streamId : number, client : SnpClient, direction:StreamDirection, endpoint:StreamEndpoint, encoding:StreamEncoding,
                         properties:Map<string, SnpProperty>):SnpPipe|null {
    switch (direction) {
      case StreamDirection.STREAM_DIRECTION_INPUT: return SnpPipeFactory.createAudioInputPipe(streamId, client, endpoint, encoding, properties);
      case StreamDirection.STREAM_DIRECTION_OUTPUT: return SnpPipeFactory.createAudioOutputPipe(streamId, client, endpoint, encoding, properties);
    }
  }

  static createPeripherialPipe(streamId : number, client : SnpClient, direction:StreamDirection, endpoint:StreamEndpoint, encoding:StreamEncoding,
                               properties:Map<string, SnpProperty>):SnpPipe|null {
    switch (direction) {
      case StreamDirection.STREAM_DIRECTION_INPUT: return SnpPipeFactory.createPeripherialInputPipe(streamId, client, endpoint, encoding, properties);
      case StreamDirection.STREAM_DIRECTION_OUTPUT: return SnpPipeFactory.createPeripherialOutputPipe(streamId, client, endpoint, encoding, properties);
    }
  }

  static createVideoInputPipe(streamId : number, client : SnpClient, endpoint:StreamEndpoint, encoding:StreamEncoding,
                              properties:Map<string, SnpProperty>):SnpPipe|null {

    const width = properties.get("width").value;
    const height = properties.get("height").value;

    if(typeof width !== "number") throw new Error(`width parameter for stream ${streamId} is not a number`);
    if(typeof height !== "number") throw new Error(`height parameter for stream ${streamId} is not a number`);

    if(encoding === StreamEncoding.STREAM_ENCODING_H264_HARDWARE || encoding === StreamEncoding.STREAM_ENCODING_H264_SOFTWARE) {

      //TODO: move this somewhere else.
      const snpStreamElement = document.getElementsByTagName("snp-stream").item(0) as SnpStreamElement;
      snpStreamElement.streamWidth = width;
      snpStreamElement.streamHeight = height;


      const source = new SnpSourceNetwork({
        streamId : streamId,
        client : client
      });
      const decoder = new SnpDecoderH264({
        width : width,
        height : height,
      });
      const sink = new SnpSinkYuv({
        width : width,
        height : height,
        snpStreamElement : snpStreamElement
      });
      SnpPort.connect(source.getOutputPort(0), decoder.getInputPort(0));
      SnpPort.connect(decoder.getOutputPort(0), sink.getInputPort(0));

      const pipe = new SnpPipe({});
      pipe.addComponent(source);
      pipe.addComponent(decoder);
      pipe.addComponent(sink);

      return pipe;
    }

    return null;
  }

  static createVideoOutputPipe(streamId : number, client : SnpClient, endpoint:StreamEndpoint, encoding:StreamEncoding,
                               properties:Map<string, SnpProperty>):SnpPipe|null {
    return null;
  }

  static createAudioInputPipe(streamId : number, client : SnpClient, endpoint:StreamEndpoint, encoding:StreamEncoding,
                              properties:Map<string, SnpProperty>):SnpPipe|null {
    return null;
  }

  static createAudioOutputPipe(streamId : number, client : SnpClient, endpoint:StreamEndpoint, encoding:StreamEncoding,
                               properties:Map<string, SnpProperty>):SnpPipe|null {
    return null;
  }

  static createPeripherialInputPipe(streamId : number, client : SnpClient, endpoint:StreamEndpoint, encoding:StreamEncoding,
                                    properties:Map<string, SnpProperty>):SnpPipe|null {
    return null;
  }

  static createPeripherialOutputPipe(streamId : number, client : SnpClient, endpoint:StreamEndpoint, encoding:StreamEncoding,
                                     properties:Map<string, SnpProperty>) {
    if(endpoint === StreamEndpoint.STREAM_ENDPOINT_POINTER) {

      const snpStreamElement = document.getElementsByTagName("snp-stream").item(0) as SnpStreamElement;
      const source = new SnpSourceMouse({
        snpStreamElement : snpStreamElement
      });
      const sink = new SnpSinkNetwork({
        streamId : streamId,
        client : client,
      });
      SnpPort.connect(source.getOutputPort(0), sink.getInputPort(0));
      let pipe = new SnpPipe({});
      pipe = new SnpPipe({});
      pipe.addComponent(source);
      pipe.addComponent(sink);
      return pipe;

    } else if(endpoint === StreamEndpoint.STREAM_ENDPOINT_KEYBOARD) {

      const snpStreamElement = document.getElementsByTagName("snp-stream").item(0) as SnpStreamElement;
      const source = new SnpSourceKeyboard({
        snpStreamElement : snpStreamElement
      });
      const sink = new SnpSinkNetwork({
        streamId : streamId,
        client : client,
      });
      SnpPort.connect(source.getOutputPort(0), sink.getInputPort(0));
      let pipe = new SnpPipe({});
      pipe.addComponent(source);
      pipe.addComponent(sink);
      return pipe;

    } else if(endpoint === StreamEndpoint.STREAM_ENDPOINT_CURSOR) {

      //TODO: move to input pipe
      const snpStreamElement = document.getElementsByTagName("snp-stream").item(0) as SnpStreamElement;
      const source = new SnpSourceNetwork({
        streamId : streamId,
        client : client
      });
      const sink = new SnpSinkCursor({
        snpStreamElement : snpStreamElement
      });
      SnpPort.connect(source.getOutputPort(0), sink.getInputPort(0));
      const pipe = new SnpPipe({});
      pipe.addComponent(source);
      pipe.addComponent(sink);
      return pipe;

    }

    return null;
  }

}