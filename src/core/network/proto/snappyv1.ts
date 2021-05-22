/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "snappyv1";

export enum StreamType {
  STREAM_TYPE_VIDEO = 0,
  STREAM_TYPE_AUDIO = 1,
  UNRECOGNIZED = -1,
}

export function streamTypeFromJSON(object: any): StreamType {
  switch (object) {
    case 0:
    case "STREAM_TYPE_VIDEO":
      return StreamType.STREAM_TYPE_VIDEO;
    case 1:
    case "STREAM_TYPE_AUDIO":
      return StreamType.STREAM_TYPE_AUDIO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StreamType.UNRECOGNIZED;
  }
}

export function streamTypeToJSON(object: StreamType): string {
  switch (object) {
    case StreamType.STREAM_TYPE_VIDEO:
      return "STREAM_TYPE_VIDEO";
    case StreamType.STREAM_TYPE_AUDIO:
      return "STREAM_TYPE_AUDIO";
    default:
      return "UNKNOWN";
  }
}

export enum Platform {
  PLATFORM_WINDOWS = 0,
  PLATFORM_LINUX = 1,
  PLATFORM_MACOS = 2,
  PLATFORM_RASPBERRY = 3,
  PLATFORM_ANDROID = 4,
  UNRECOGNIZED = -1,
}

export function platformFromJSON(object: any): Platform {
  switch (object) {
    case 0:
    case "PLATFORM_WINDOWS":
      return Platform.PLATFORM_WINDOWS;
    case 1:
    case "PLATFORM_LINUX":
      return Platform.PLATFORM_LINUX;
    case 2:
    case "PLATFORM_MACOS":
      return Platform.PLATFORM_MACOS;
    case 3:
    case "PLATFORM_RASPBERRY":
      return Platform.PLATFORM_RASPBERRY;
    case 4:
    case "PLATFORM_ANDROID":
      return Platform.PLATFORM_ANDROID;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Platform.UNRECOGNIZED;
  }
}

export function platformToJSON(object: Platform): string {
  switch (object) {
    case Platform.PLATFORM_WINDOWS:
      return "PLATFORM_WINDOWS";
    case Platform.PLATFORM_LINUX:
      return "PLATFORM_LINUX";
    case Platform.PLATFORM_MACOS:
      return "PLATFORM_MACOS";
    case Platform.PLATFORM_RASPBERRY:
      return "PLATFORM_RASPBERRY";
    case Platform.PLATFORM_ANDROID:
      return "PLATFORM_ANDROID";
    default:
      return "UNKNOWN";
  }
}

export enum SourceType {
  VIDEO_DESKTOP = 0,
  VIDEO_CAMERA = 1,
  AUDIO = 2,
  UNRECOGNIZED = -1,
}

export function sourceTypeFromJSON(object: any): SourceType {
  switch (object) {
    case 0:
    case "VIDEO_DESKTOP":
      return SourceType.VIDEO_DESKTOP;
    case 1:
    case "VIDEO_CAMERA":
      return SourceType.VIDEO_CAMERA;
    case 2:
    case "AUDIO":
      return SourceType.AUDIO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SourceType.UNRECOGNIZED;
  }
}

export function sourceTypeToJSON(object: SourceType): string {
  switch (object) {
    case SourceType.VIDEO_DESKTOP:
      return "VIDEO_DESKTOP";
    case SourceType.VIDEO_CAMERA:
      return "VIDEO_CAMERA";
    case SourceType.AUDIO:
      return "AUDIO";
    default:
      return "UNKNOWN";
  }
}

export enum EncoderType {
  VIDEO_ENCODER_H264_SOFTWARE = 0,
  VIDEO_ENCODER_H264_HARDWARE = 1,
  AUDIO_ENCODER_MP3_SOFTWARE = 2,
  AUDIO_ENCODER_MP3_HARDWARE = 3,
  UNRECOGNIZED = -1,
}

export function encoderTypeFromJSON(object: any): EncoderType {
  switch (object) {
    case 0:
    case "VIDEO_ENCODER_H264_SOFTWARE":
      return EncoderType.VIDEO_ENCODER_H264_SOFTWARE;
    case 1:
    case "VIDEO_ENCODER_H264_HARDWARE":
      return EncoderType.VIDEO_ENCODER_H264_HARDWARE;
    case 2:
    case "AUDIO_ENCODER_MP3_SOFTWARE":
      return EncoderType.AUDIO_ENCODER_MP3_SOFTWARE;
    case 3:
    case "AUDIO_ENCODER_MP3_HARDWARE":
      return EncoderType.AUDIO_ENCODER_MP3_HARDWARE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EncoderType.UNRECOGNIZED;
  }
}

export function encoderTypeToJSON(object: EncoderType): string {
  switch (object) {
    case EncoderType.VIDEO_ENCODER_H264_SOFTWARE:
      return "VIDEO_ENCODER_H264_SOFTWARE";
    case EncoderType.VIDEO_ENCODER_H264_HARDWARE:
      return "VIDEO_ENCODER_H264_HARDWARE";
    case EncoderType.AUDIO_ENCODER_MP3_SOFTWARE:
      return "AUDIO_ENCODER_MP3_SOFTWARE";
    case EncoderType.AUDIO_ENCODER_MP3_HARDWARE:
      return "AUDIO_ENCODER_MP3_HARDWARE";
    default:
      return "UNKNOWN";
  }
}

/** server -> client */
export interface Resolution {
  width: number;
  height: number;
}

/** private */
export interface SourceInfo {
  type: SourceType;
}

/** private */
export interface EncoderInfo {
  type: EncoderType;
  resolution: Resolution[];
}

export interface ServerInfo {
  platform: Platform;
  availableResolutions: Resolution[];
  sources: SourceInfo[];
  encoders: EncoderInfo[];
}

export interface StreamChange {
  id: number;
  source: SourceInfo | undefined;
  encoder: EncoderInfo | undefined;
}

export interface StreamStatistics {
  lastFrame: number;
  averageFrameQp: number;
  encodeTsStartMs: number;
  encodeTsEndMs: number;
  txTsStartMs: number;
  txTsEndMs: number;
}

/** client -> server */
export interface StreamStart {
  id: number;
  source: SourceInfo | undefined;
  encoder: EncoderInfo | undefined;
}

export interface StreamStop {
  id: number;
}

export interface Pointer {
  absx: number;
  absy: number;
  mask?: number | undefined;
  down?: boolean | undefined;
}

export interface Keyboard {
  keysym: number;
  keycode: number;
  down: boolean;
}

export interface SetResolution {
  width: number;
  height: number;
}

export interface SetVideoStreamAttributes {
  qp: number;
}

export interface SetAudioStreamAttributes {
  bitrate: number;
}

const baseResolution: object = { width: 0, height: 0 };

export const Resolution = {
  encode(message: Resolution, writer: Writer = Writer.create()): Writer {
    if (message.width !== 0) {
      writer.uint32(8).uint32(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(16).uint32(message.height);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Resolution {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResolution } as Resolution;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.width = reader.uint32();
          break;
        case 2:
          message.height = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Resolution {
    const message = { ...baseResolution } as Resolution;
    if (object.width !== undefined && object.width !== null) {
      message.width = Number(object.width);
    } else {
      message.width = 0;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    return message;
  },

  toJSON(message: Resolution): unknown {
    const obj: any = {};
    message.width !== undefined && (obj.width = message.width);
    message.height !== undefined && (obj.height = message.height);
    return obj;
  },

  fromPartial(object: DeepPartial<Resolution>): Resolution {
    const message = { ...baseResolution } as Resolution;
    if (object.width !== undefined && object.width !== null) {
      message.width = object.width;
    } else {
      message.width = 0;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    return message;
  },
};

const baseSourceInfo: object = { type: 0 };

export const SourceInfo = {
  encode(message: SourceInfo, writer: Writer = Writer.create()): Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SourceInfo {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSourceInfo } as SourceInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SourceInfo {
    const message = { ...baseSourceInfo } as SourceInfo;
    if (object.type !== undefined && object.type !== null) {
      message.type = sourceTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    return message;
  },

  toJSON(message: SourceInfo): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = sourceTypeToJSON(message.type));
    return obj;
  },

  fromPartial(object: DeepPartial<SourceInfo>): SourceInfo {
    const message = { ...baseSourceInfo } as SourceInfo;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    return message;
  },
};

const baseEncoderInfo: object = { type: 0 };

export const EncoderInfo = {
  encode(message: EncoderInfo, writer: Writer = Writer.create()): Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    for (const v of message.resolution) {
      Resolution.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EncoderInfo {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEncoderInfo } as EncoderInfo;
    message.resolution = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.resolution.push(Resolution.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EncoderInfo {
    const message = { ...baseEncoderInfo } as EncoderInfo;
    message.resolution = [];
    if (object.type !== undefined && object.type !== null) {
      message.type = encoderTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (object.resolution !== undefined && object.resolution !== null) {
      for (const e of object.resolution) {
        message.resolution.push(Resolution.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: EncoderInfo): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = encoderTypeToJSON(message.type));
    if (message.resolution) {
      obj.resolution = message.resolution.map((e) =>
        e ? Resolution.toJSON(e) : undefined
      );
    } else {
      obj.resolution = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<EncoderInfo>): EncoderInfo {
    const message = { ...baseEncoderInfo } as EncoderInfo;
    message.resolution = [];
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.resolution !== undefined && object.resolution !== null) {
      for (const e of object.resolution) {
        message.resolution.push(Resolution.fromPartial(e));
      }
    }
    return message;
  },
};

const baseServerInfo: object = { platform: 0 };

export const ServerInfo = {
  encode(message: ServerInfo, writer: Writer = Writer.create()): Writer {
    if (message.platform !== 0) {
      writer.uint32(8).int32(message.platform);
    }
    for (const v of message.availableResolutions) {
      Resolution.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.sources) {
      SourceInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.encoders) {
      EncoderInfo.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ServerInfo {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseServerInfo } as ServerInfo;
    message.availableResolutions = [];
    message.sources = [];
    message.encoders = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.platform = reader.int32() as any;
          break;
        case 2:
          message.availableResolutions.push(
            Resolution.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.sources.push(SourceInfo.decode(reader, reader.uint32()));
          break;
        case 4:
          message.encoders.push(EncoderInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ServerInfo {
    const message = { ...baseServerInfo } as ServerInfo;
    message.availableResolutions = [];
    message.sources = [];
    message.encoders = [];
    if (object.platform !== undefined && object.platform !== null) {
      message.platform = platformFromJSON(object.platform);
    } else {
      message.platform = 0;
    }
    if (
      object.availableResolutions !== undefined &&
      object.availableResolutions !== null
    ) {
      for (const e of object.availableResolutions) {
        message.availableResolutions.push(Resolution.fromJSON(e));
      }
    }
    if (object.sources !== undefined && object.sources !== null) {
      for (const e of object.sources) {
        message.sources.push(SourceInfo.fromJSON(e));
      }
    }
    if (object.encoders !== undefined && object.encoders !== null) {
      for (const e of object.encoders) {
        message.encoders.push(EncoderInfo.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: ServerInfo): unknown {
    const obj: any = {};
    message.platform !== undefined &&
      (obj.platform = platformToJSON(message.platform));
    if (message.availableResolutions) {
      obj.availableResolutions = message.availableResolutions.map((e) =>
        e ? Resolution.toJSON(e) : undefined
      );
    } else {
      obj.availableResolutions = [];
    }
    if (message.sources) {
      obj.sources = message.sources.map((e) =>
        e ? SourceInfo.toJSON(e) : undefined
      );
    } else {
      obj.sources = [];
    }
    if (message.encoders) {
      obj.encoders = message.encoders.map((e) =>
        e ? EncoderInfo.toJSON(e) : undefined
      );
    } else {
      obj.encoders = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ServerInfo>): ServerInfo {
    const message = { ...baseServerInfo } as ServerInfo;
    message.availableResolutions = [];
    message.sources = [];
    message.encoders = [];
    if (object.platform !== undefined && object.platform !== null) {
      message.platform = object.platform;
    } else {
      message.platform = 0;
    }
    if (
      object.availableResolutions !== undefined &&
      object.availableResolutions !== null
    ) {
      for (const e of object.availableResolutions) {
        message.availableResolutions.push(Resolution.fromPartial(e));
      }
    }
    if (object.sources !== undefined && object.sources !== null) {
      for (const e of object.sources) {
        message.sources.push(SourceInfo.fromPartial(e));
      }
    }
    if (object.encoders !== undefined && object.encoders !== null) {
      for (const e of object.encoders) {
        message.encoders.push(EncoderInfo.fromPartial(e));
      }
    }
    return message;
  },
};

const baseStreamChange: object = { id: 0 };

export const StreamChange = {
  encode(message: StreamChange, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.source !== undefined) {
      SourceInfo.encode(message.source, writer.uint32(18).fork()).ldelim();
    }
    if (message.encoder !== undefined) {
      EncoderInfo.encode(message.encoder, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): StreamChange {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStreamChange } as StreamChange;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.source = SourceInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.encoder = EncoderInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StreamChange {
    const message = { ...baseStreamChange } as StreamChange;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = SourceInfo.fromJSON(object.source);
    } else {
      message.source = undefined;
    }
    if (object.encoder !== undefined && object.encoder !== null) {
      message.encoder = EncoderInfo.fromJSON(object.encoder);
    } else {
      message.encoder = undefined;
    }
    return message;
  },

  toJSON(message: StreamChange): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.source !== undefined &&
      (obj.source = message.source
        ? SourceInfo.toJSON(message.source)
        : undefined);
    message.encoder !== undefined &&
      (obj.encoder = message.encoder
        ? EncoderInfo.toJSON(message.encoder)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<StreamChange>): StreamChange {
    const message = { ...baseStreamChange } as StreamChange;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = SourceInfo.fromPartial(object.source);
    } else {
      message.source = undefined;
    }
    if (object.encoder !== undefined && object.encoder !== null) {
      message.encoder = EncoderInfo.fromPartial(object.encoder);
    } else {
      message.encoder = undefined;
    }
    return message;
  },
};

const baseStreamStatistics: object = {
  lastFrame: 0,
  averageFrameQp: 0,
  encodeTsStartMs: 0,
  encodeTsEndMs: 0,
  txTsStartMs: 0,
  txTsEndMs: 0,
};

export const StreamStatistics = {
  encode(message: StreamStatistics, writer: Writer = Writer.create()): Writer {
    if (message.lastFrame !== 0) {
      writer.uint32(8).uint32(message.lastFrame);
    }
    if (message.averageFrameQp !== 0) {
      writer.uint32(16).uint32(message.averageFrameQp);
    }
    if (message.encodeTsStartMs !== 0) {
      writer.uint32(24).uint32(message.encodeTsStartMs);
    }
    if (message.encodeTsEndMs !== 0) {
      writer.uint32(32).uint32(message.encodeTsEndMs);
    }
    if (message.txTsStartMs !== 0) {
      writer.uint32(40).uint32(message.txTsStartMs);
    }
    if (message.txTsEndMs !== 0) {
      writer.uint32(48).uint32(message.txTsEndMs);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): StreamStatistics {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStreamStatistics } as StreamStatistics;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lastFrame = reader.uint32();
          break;
        case 2:
          message.averageFrameQp = reader.uint32();
          break;
        case 3:
          message.encodeTsStartMs = reader.uint32();
          break;
        case 4:
          message.encodeTsEndMs = reader.uint32();
          break;
        case 5:
          message.txTsStartMs = reader.uint32();
          break;
        case 6:
          message.txTsEndMs = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StreamStatistics {
    const message = { ...baseStreamStatistics } as StreamStatistics;
    if (object.lastFrame !== undefined && object.lastFrame !== null) {
      message.lastFrame = Number(object.lastFrame);
    } else {
      message.lastFrame = 0;
    }
    if (object.averageFrameQp !== undefined && object.averageFrameQp !== null) {
      message.averageFrameQp = Number(object.averageFrameQp);
    } else {
      message.averageFrameQp = 0;
    }
    if (
      object.encodeTsStartMs !== undefined &&
      object.encodeTsStartMs !== null
    ) {
      message.encodeTsStartMs = Number(object.encodeTsStartMs);
    } else {
      message.encodeTsStartMs = 0;
    }
    if (object.encodeTsEndMs !== undefined && object.encodeTsEndMs !== null) {
      message.encodeTsEndMs = Number(object.encodeTsEndMs);
    } else {
      message.encodeTsEndMs = 0;
    }
    if (object.txTsStartMs !== undefined && object.txTsStartMs !== null) {
      message.txTsStartMs = Number(object.txTsStartMs);
    } else {
      message.txTsStartMs = 0;
    }
    if (object.txTsEndMs !== undefined && object.txTsEndMs !== null) {
      message.txTsEndMs = Number(object.txTsEndMs);
    } else {
      message.txTsEndMs = 0;
    }
    return message;
  },

  toJSON(message: StreamStatistics): unknown {
    const obj: any = {};
    message.lastFrame !== undefined && (obj.lastFrame = message.lastFrame);
    message.averageFrameQp !== undefined &&
      (obj.averageFrameQp = message.averageFrameQp);
    message.encodeTsStartMs !== undefined &&
      (obj.encodeTsStartMs = message.encodeTsStartMs);
    message.encodeTsEndMs !== undefined &&
      (obj.encodeTsEndMs = message.encodeTsEndMs);
    message.txTsStartMs !== undefined &&
      (obj.txTsStartMs = message.txTsStartMs);
    message.txTsEndMs !== undefined && (obj.txTsEndMs = message.txTsEndMs);
    return obj;
  },

  fromPartial(object: DeepPartial<StreamStatistics>): StreamStatistics {
    const message = { ...baseStreamStatistics } as StreamStatistics;
    if (object.lastFrame !== undefined && object.lastFrame !== null) {
      message.lastFrame = object.lastFrame;
    } else {
      message.lastFrame = 0;
    }
    if (object.averageFrameQp !== undefined && object.averageFrameQp !== null) {
      message.averageFrameQp = object.averageFrameQp;
    } else {
      message.averageFrameQp = 0;
    }
    if (
      object.encodeTsStartMs !== undefined &&
      object.encodeTsStartMs !== null
    ) {
      message.encodeTsStartMs = object.encodeTsStartMs;
    } else {
      message.encodeTsStartMs = 0;
    }
    if (object.encodeTsEndMs !== undefined && object.encodeTsEndMs !== null) {
      message.encodeTsEndMs = object.encodeTsEndMs;
    } else {
      message.encodeTsEndMs = 0;
    }
    if (object.txTsStartMs !== undefined && object.txTsStartMs !== null) {
      message.txTsStartMs = object.txTsStartMs;
    } else {
      message.txTsStartMs = 0;
    }
    if (object.txTsEndMs !== undefined && object.txTsEndMs !== null) {
      message.txTsEndMs = object.txTsEndMs;
    } else {
      message.txTsEndMs = 0;
    }
    return message;
  },
};

const baseStreamStart: object = { id: 0 };

export const StreamStart = {
  encode(message: StreamStart, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.source !== undefined) {
      SourceInfo.encode(message.source, writer.uint32(18).fork()).ldelim();
    }
    if (message.encoder !== undefined) {
      EncoderInfo.encode(message.encoder, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): StreamStart {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStreamStart } as StreamStart;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.source = SourceInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.encoder = EncoderInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StreamStart {
    const message = { ...baseStreamStart } as StreamStart;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = SourceInfo.fromJSON(object.source);
    } else {
      message.source = undefined;
    }
    if (object.encoder !== undefined && object.encoder !== null) {
      message.encoder = EncoderInfo.fromJSON(object.encoder);
    } else {
      message.encoder = undefined;
    }
    return message;
  },

  toJSON(message: StreamStart): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.source !== undefined &&
      (obj.source = message.source
        ? SourceInfo.toJSON(message.source)
        : undefined);
    message.encoder !== undefined &&
      (obj.encoder = message.encoder
        ? EncoderInfo.toJSON(message.encoder)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<StreamStart>): StreamStart {
    const message = { ...baseStreamStart } as StreamStart;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = SourceInfo.fromPartial(object.source);
    } else {
      message.source = undefined;
    }
    if (object.encoder !== undefined && object.encoder !== null) {
      message.encoder = EncoderInfo.fromPartial(object.encoder);
    } else {
      message.encoder = undefined;
    }
    return message;
  },
};

const baseStreamStop: object = { id: 0 };

export const StreamStop = {
  encode(message: StreamStop, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): StreamStop {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStreamStop } as StreamStop;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StreamStop {
    const message = { ...baseStreamStop } as StreamStop;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: StreamStop): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<StreamStop>): StreamStop {
    const message = { ...baseStreamStop } as StreamStop;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const basePointer: object = { absx: 0, absy: 0 };

export const Pointer = {
  encode(message: Pointer, writer: Writer = Writer.create()): Writer {
    if (message.absx !== 0) {
      writer.uint32(8).uint32(message.absx);
    }
    if (message.absy !== 0) {
      writer.uint32(16).uint32(message.absy);
    }
    if (message.mask !== undefined) {
      writer.uint32(24).int32(message.mask);
    }
    if (message.down !== undefined) {
      writer.uint32(32).bool(message.down);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Pointer {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePointer } as Pointer;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.absx = reader.uint32();
          break;
        case 2:
          message.absy = reader.uint32();
          break;
        case 3:
          message.mask = reader.int32();
          break;
        case 4:
          message.down = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Pointer {
    const message = { ...basePointer } as Pointer;
    if (object.absx !== undefined && object.absx !== null) {
      message.absx = Number(object.absx);
    } else {
      message.absx = 0;
    }
    if (object.absy !== undefined && object.absy !== null) {
      message.absy = Number(object.absy);
    } else {
      message.absy = 0;
    }
    if (object.mask !== undefined && object.mask !== null) {
      message.mask = Number(object.mask);
    } else {
      message.mask = undefined;
    }
    if (object.down !== undefined && object.down !== null) {
      message.down = Boolean(object.down);
    } else {
      message.down = undefined;
    }
    return message;
  },

  toJSON(message: Pointer): unknown {
    const obj: any = {};
    message.absx !== undefined && (obj.absx = message.absx);
    message.absy !== undefined && (obj.absy = message.absy);
    message.mask !== undefined && (obj.mask = message.mask);
    message.down !== undefined && (obj.down = message.down);
    return obj;
  },

  fromPartial(object: DeepPartial<Pointer>): Pointer {
    const message = { ...basePointer } as Pointer;
    if (object.absx !== undefined && object.absx !== null) {
      message.absx = object.absx;
    } else {
      message.absx = 0;
    }
    if (object.absy !== undefined && object.absy !== null) {
      message.absy = object.absy;
    } else {
      message.absy = 0;
    }
    if (object.mask !== undefined && object.mask !== null) {
      message.mask = object.mask;
    } else {
      message.mask = undefined;
    }
    if (object.down !== undefined && object.down !== null) {
      message.down = object.down;
    } else {
      message.down = undefined;
    }
    return message;
  },
};

const baseKeyboard: object = { keysym: 0, keycode: 0, down: false };

export const Keyboard = {
  encode(message: Keyboard, writer: Writer = Writer.create()): Writer {
    if (message.keysym !== 0) {
      writer.uint32(8).uint32(message.keysym);
    }
    if (message.keycode !== 0) {
      writer.uint32(16).uint32(message.keycode);
    }
    if (message.down === true) {
      writer.uint32(24).bool(message.down);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Keyboard {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseKeyboard } as Keyboard;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keysym = reader.uint32();
          break;
        case 2:
          message.keycode = reader.uint32();
          break;
        case 3:
          message.down = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Keyboard {
    const message = { ...baseKeyboard } as Keyboard;
    if (object.keysym !== undefined && object.keysym !== null) {
      message.keysym = Number(object.keysym);
    } else {
      message.keysym = 0;
    }
    if (object.keycode !== undefined && object.keycode !== null) {
      message.keycode = Number(object.keycode);
    } else {
      message.keycode = 0;
    }
    if (object.down !== undefined && object.down !== null) {
      message.down = Boolean(object.down);
    } else {
      message.down = false;
    }
    return message;
  },

  toJSON(message: Keyboard): unknown {
    const obj: any = {};
    message.keysym !== undefined && (obj.keysym = message.keysym);
    message.keycode !== undefined && (obj.keycode = message.keycode);
    message.down !== undefined && (obj.down = message.down);
    return obj;
  },

  fromPartial(object: DeepPartial<Keyboard>): Keyboard {
    const message = { ...baseKeyboard } as Keyboard;
    if (object.keysym !== undefined && object.keysym !== null) {
      message.keysym = object.keysym;
    } else {
      message.keysym = 0;
    }
    if (object.keycode !== undefined && object.keycode !== null) {
      message.keycode = object.keycode;
    } else {
      message.keycode = 0;
    }
    if (object.down !== undefined && object.down !== null) {
      message.down = object.down;
    } else {
      message.down = false;
    }
    return message;
  },
};

const baseSetResolution: object = { width: 0, height: 0 };

export const SetResolution = {
  encode(message: SetResolution, writer: Writer = Writer.create()): Writer {
    if (message.width !== 0) {
      writer.uint32(8).uint32(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(16).uint32(message.height);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SetResolution {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSetResolution } as SetResolution;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.width = reader.uint32();
          break;
        case 2:
          message.height = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetResolution {
    const message = { ...baseSetResolution } as SetResolution;
    if (object.width !== undefined && object.width !== null) {
      message.width = Number(object.width);
    } else {
      message.width = 0;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    return message;
  },

  toJSON(message: SetResolution): unknown {
    const obj: any = {};
    message.width !== undefined && (obj.width = message.width);
    message.height !== undefined && (obj.height = message.height);
    return obj;
  },

  fromPartial(object: DeepPartial<SetResolution>): SetResolution {
    const message = { ...baseSetResolution } as SetResolution;
    if (object.width !== undefined && object.width !== null) {
      message.width = object.width;
    } else {
      message.width = 0;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    return message;
  },
};

const baseSetVideoStreamAttributes: object = { qp: 0 };

export const SetVideoStreamAttributes = {
  encode(
    message: SetVideoStreamAttributes,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.qp !== 0) {
      writer.uint32(8).uint32(message.qp);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): SetVideoStreamAttributes {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSetVideoStreamAttributes,
    } as SetVideoStreamAttributes;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.qp = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetVideoStreamAttributes {
    const message = {
      ...baseSetVideoStreamAttributes,
    } as SetVideoStreamAttributes;
    if (object.qp !== undefined && object.qp !== null) {
      message.qp = Number(object.qp);
    } else {
      message.qp = 0;
    }
    return message;
  },

  toJSON(message: SetVideoStreamAttributes): unknown {
    const obj: any = {};
    message.qp !== undefined && (obj.qp = message.qp);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SetVideoStreamAttributes>
  ): SetVideoStreamAttributes {
    const message = {
      ...baseSetVideoStreamAttributes,
    } as SetVideoStreamAttributes;
    if (object.qp !== undefined && object.qp !== null) {
      message.qp = object.qp;
    } else {
      message.qp = 0;
    }
    return message;
  },
};

const baseSetAudioStreamAttributes: object = { bitrate: 0 };

export const SetAudioStreamAttributes = {
  encode(
    message: SetAudioStreamAttributes,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.bitrate !== 0) {
      writer.uint32(8).uint32(message.bitrate);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): SetAudioStreamAttributes {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSetAudioStreamAttributes,
    } as SetAudioStreamAttributes;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bitrate = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetAudioStreamAttributes {
    const message = {
      ...baseSetAudioStreamAttributes,
    } as SetAudioStreamAttributes;
    if (object.bitrate !== undefined && object.bitrate !== null) {
      message.bitrate = Number(object.bitrate);
    } else {
      message.bitrate = 0;
    }
    return message;
  },

  toJSON(message: SetAudioStreamAttributes): unknown {
    const obj: any = {};
    message.bitrate !== undefined && (obj.bitrate = message.bitrate);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SetAudioStreamAttributes>
  ): SetAudioStreamAttributes {
    const message = {
      ...baseSetAudioStreamAttributes,
    } as SetAudioStreamAttributes;
    if (object.bitrate !== undefined && object.bitrate !== null) {
      message.bitrate = object.bitrate;
    } else {
      message.bitrate = 0;
    }
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
