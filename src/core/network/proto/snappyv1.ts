/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "snappyv1";

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
  SOURCE_TYPE_VIDEO = 0,
  SOURCE_TYPE_AUDIO = 1,
  SOURCE_TYPE_INPUT = 2,
  UNRECOGNIZED = -1,
}

export function sourceTypeFromJSON(object: any): SourceType {
  switch (object) {
    case 0:
    case "SOURCE_TYPE_VIDEO":
      return SourceType.SOURCE_TYPE_VIDEO;
    case 1:
    case "SOURCE_TYPE_AUDIO":
      return SourceType.SOURCE_TYPE_AUDIO;
    case 2:
    case "SOURCE_TYPE_INPUT":
      return SourceType.SOURCE_TYPE_INPUT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SourceType.UNRECOGNIZED;
  }
}

export function sourceTypeToJSON(object: SourceType): string {
  switch (object) {
    case SourceType.SOURCE_TYPE_VIDEO:
      return "SOURCE_TYPE_VIDEO";
    case SourceType.SOURCE_TYPE_AUDIO:
      return "SOURCE_TYPE_AUDIO";
    case SourceType.SOURCE_TYPE_INPUT:
      return "SOURCE_TYPE_INPUT";
    default:
      return "UNKNOWN";
  }
}

export enum SourceSubType {
  SOURCE_SUB_TYPE_X11 = 0,
  SOURCE_SUB_TYPE_WAYLAND = 1,
  SOURCE_SUB_TYPE_CAMERA = 2,
  SOURCE_SUB_TYPE_KEYBOARD = 3,
  SOURCE_SUB_TYPE_POINTER = 4,
  UNRECOGNIZED = -1,
}

export function sourceSubTypeFromJSON(object: any): SourceSubType {
  switch (object) {
    case 0:
    case "SOURCE_SUB_TYPE_X11":
      return SourceSubType.SOURCE_SUB_TYPE_X11;
    case 1:
    case "SOURCE_SUB_TYPE_WAYLAND":
      return SourceSubType.SOURCE_SUB_TYPE_WAYLAND;
    case 2:
    case "SOURCE_SUB_TYPE_CAMERA":
      return SourceSubType.SOURCE_SUB_TYPE_CAMERA;
    case 3:
    case "SOURCE_SUB_TYPE_KEYBOARD":
      return SourceSubType.SOURCE_SUB_TYPE_KEYBOARD;
    case 4:
    case "SOURCE_SUB_TYPE_POINTER":
      return SourceSubType.SOURCE_SUB_TYPE_POINTER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SourceSubType.UNRECOGNIZED;
  }
}

export function sourceSubTypeToJSON(object: SourceSubType): string {
  switch (object) {
    case SourceSubType.SOURCE_SUB_TYPE_X11:
      return "SOURCE_SUB_TYPE_X11";
    case SourceSubType.SOURCE_SUB_TYPE_WAYLAND:
      return "SOURCE_SUB_TYPE_WAYLAND";
    case SourceSubType.SOURCE_SUB_TYPE_CAMERA:
      return "SOURCE_SUB_TYPE_CAMERA";
    case SourceSubType.SOURCE_SUB_TYPE_KEYBOARD:
      return "SOURCE_SUB_TYPE_KEYBOARD";
    case SourceSubType.SOURCE_SUB_TYPE_POINTER:
      return "SOURCE_SUB_TYPE_POINTER";
    default:
      return "UNKNOWN";
  }
}

export enum EncoderType {
  ENCODER_TYPE_H264_SOFTWARE = 0,
  ENCODER_TYPE_H264_HARDWARE = 1,
  ENCODER_TYPE_MP3_SOFTWARE = 2,
  ENCODER_TYPE_MP3_HARDWARE = 3,
  UNRECOGNIZED = -1,
}

export function encoderTypeFromJSON(object: any): EncoderType {
  switch (object) {
    case 0:
    case "ENCODER_TYPE_H264_SOFTWARE":
      return EncoderType.ENCODER_TYPE_H264_SOFTWARE;
    case 1:
    case "ENCODER_TYPE_H264_HARDWARE":
      return EncoderType.ENCODER_TYPE_H264_HARDWARE;
    case 2:
    case "ENCODER_TYPE_MP3_SOFTWARE":
      return EncoderType.ENCODER_TYPE_MP3_SOFTWARE;
    case 3:
    case "ENCODER_TYPE_MP3_HARDWARE":
      return EncoderType.ENCODER_TYPE_MP3_HARDWARE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EncoderType.UNRECOGNIZED;
  }
}

export function encoderTypeToJSON(object: EncoderType): string {
  switch (object) {
    case EncoderType.ENCODER_TYPE_H264_SOFTWARE:
      return "ENCODER_TYPE_H264_SOFTWARE";
    case EncoderType.ENCODER_TYPE_H264_HARDWARE:
      return "ENCODER_TYPE_H264_HARDWARE";
    case EncoderType.ENCODER_TYPE_MP3_SOFTWARE:
      return "ENCODER_TYPE_MP3_SOFTWARE";
    case EncoderType.ENCODER_TYPE_MP3_HARDWARE:
      return "ENCODER_TYPE_MP3_HARDWARE";
    default:
      return "UNKNOWN";
  }
}

export enum Command {
  COMMAND_INIT = 0,
  COMMAND_START = 1,
  COMMAND_STOP = 2,
  COMMAND_DESTROY = 3,
  UNRECOGNIZED = -1,
}

export function commandFromJSON(object: any): Command {
  switch (object) {
    case 0:
    case "COMMAND_INIT":
      return Command.COMMAND_INIT;
    case 1:
    case "COMMAND_START":
      return Command.COMMAND_START;
    case 2:
    case "COMMAND_STOP":
      return Command.COMMAND_STOP;
    case 3:
    case "COMMAND_DESTROY":
      return Command.COMMAND_DESTROY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Command.UNRECOGNIZED;
  }
}

export function commandToJSON(object: Command): string {
  switch (object) {
    case Command.COMMAND_INIT:
      return "COMMAND_INIT";
    case Command.COMMAND_START:
      return "COMMAND_START";
    case Command.COMMAND_STOP:
      return "COMMAND_STOP";
    case Command.COMMAND_DESTROY:
      return "COMMAND_DESTROY";
    default:
      return "UNKNOWN";
  }
}

export enum MessageType {
  MESSAGE_TYPE_SERVER_INFO = 0,
  MESSAGE_TYPE_STREAMS_CHANGE = 1,
  MESSAGE_TYPE_STREAM_DATA = 2,
  UNRECOGNIZED = -1,
}

export function messageTypeFromJSON(object: any): MessageType {
  switch (object) {
    case 0:
    case "MESSAGE_TYPE_SERVER_INFO":
      return MessageType.MESSAGE_TYPE_SERVER_INFO;
    case 1:
    case "MESSAGE_TYPE_STREAMS_CHANGE":
      return MessageType.MESSAGE_TYPE_STREAMS_CHANGE;
    case 2:
    case "MESSAGE_TYPE_STREAM_DATA":
      return MessageType.MESSAGE_TYPE_STREAM_DATA;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MessageType.UNRECOGNIZED;
  }
}

export function messageTypeToJSON(object: MessageType): string {
  switch (object) {
    case MessageType.MESSAGE_TYPE_SERVER_INFO:
      return "MESSAGE_TYPE_SERVER_INFO";
    case MessageType.MESSAGE_TYPE_STREAMS_CHANGE:
      return "MESSAGE_TYPE_STREAMS_CHANGE";
    case MessageType.MESSAGE_TYPE_STREAM_DATA:
      return "MESSAGE_TYPE_STREAM_DATA";
    default:
      return "UNKNOWN";
  }
}

export interface Parameter {
  type: Parameter_ParameterType;
  key: string;
  valueString?: Parameter_ParameterValueString | undefined;
  valueBool?: Parameter_ParameterValueBool | undefined;
  valueUint32?: Parameter_ParameterValueUint32 | undefined;
  valueDouble?: Parameter_ParameterValueDouble | undefined;
}

export enum Parameter_ParameterType {
  STRING = 0,
  BOOL = 1,
  UINT32 = 2,
  DOUBLE = 3,
  UNRECOGNIZED = -1,
}

export function parameter_ParameterTypeFromJSON(
  object: any
): Parameter_ParameterType {
  switch (object) {
    case 0:
    case "STRING":
      return Parameter_ParameterType.STRING;
    case 1:
    case "BOOL":
      return Parameter_ParameterType.BOOL;
    case 2:
    case "UINT32":
      return Parameter_ParameterType.UINT32;
    case 3:
    case "DOUBLE":
      return Parameter_ParameterType.DOUBLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Parameter_ParameterType.UNRECOGNIZED;
  }
}

export function parameter_ParameterTypeToJSON(
  object: Parameter_ParameterType
): string {
  switch (object) {
    case Parameter_ParameterType.STRING:
      return "STRING";
    case Parameter_ParameterType.BOOL:
      return "BOOL";
    case Parameter_ParameterType.UINT32:
      return "UINT32";
    case Parameter_ParameterType.DOUBLE:
      return "DOUBLE";
    default:
      return "UNKNOWN";
  }
}

export interface Parameter_ParameterValueString {
  value: string;
}

export interface Parameter_ParameterValueBool {
  value: boolean;
}

export interface Parameter_ParameterValueUint32 {
  value: number;
  min?: number | undefined;
  max?: number | undefined;
}

export interface Parameter_ParameterValueDouble {
  value: number;
  min?: number | undefined;
  max?: number | undefined;
}

/** private */
export interface Source {
  type: SourceType;
  subType: SourceSubType;
  parameters: Parameter[];
}

/** private */
export interface Encoder {
  type: EncoderType;
  parameters: Parameter[];
}

export interface ServerInfo {
  platform: Platform;
  availableSources: Source[];
  availableEncoders: Encoder[];
}

export interface StreamChange {
  streams: StreamChange_StreamChange[];
}

export interface StreamChange_StreamChange {
  id: number;
  source?: Source | undefined;
  encoder?: Encoder | undefined;
  command?: Command | undefined;
}

export interface StreamStatistics {
  lastFrame: number;
  averageFrameQp: number;
  encodeTsStartMs: number;
  encodeTsEndMs: number;
  txTsStartMs: number;
  txTsEndMs: number;
}

export interface StreamData {
  streamId: number;
  payload: Uint8Array;
}

export interface Message {
  type: MessageType;
  serverInfo: ServerInfo | undefined;
  streamChange: StreamChange | undefined;
  streamData: StreamData | undefined;
}

const baseParameter: object = { type: 0, key: "" };

export const Parameter = {
  encode(message: Parameter, writer: Writer = Writer.create()): Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    if (message.valueString !== undefined) {
      Parameter_ParameterValueString.encode(
        message.valueString,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.valueBool !== undefined) {
      Parameter_ParameterValueBool.encode(
        message.valueBool,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.valueUint32 !== undefined) {
      Parameter_ParameterValueUint32.encode(
        message.valueUint32,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.valueDouble !== undefined) {
      Parameter_ParameterValueDouble.encode(
        message.valueDouble,
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Parameter {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParameter } as Parameter;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.key = reader.string();
          break;
        case 3:
          message.valueString = Parameter_ParameterValueString.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.valueBool = Parameter_ParameterValueBool.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.valueUint32 = Parameter_ParameterValueUint32.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.valueDouble = Parameter_ParameterValueDouble.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Parameter {
    const message = { ...baseParameter } as Parameter;
    if (object.type !== undefined && object.type !== null) {
      message.type = parameter_ParameterTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.valueString !== undefined && object.valueString !== null) {
      message.valueString = Parameter_ParameterValueString.fromJSON(
        object.valueString
      );
    } else {
      message.valueString = undefined;
    }
    if (object.valueBool !== undefined && object.valueBool !== null) {
      message.valueBool = Parameter_ParameterValueBool.fromJSON(
        object.valueBool
      );
    } else {
      message.valueBool = undefined;
    }
    if (object.valueUint32 !== undefined && object.valueUint32 !== null) {
      message.valueUint32 = Parameter_ParameterValueUint32.fromJSON(
        object.valueUint32
      );
    } else {
      message.valueUint32 = undefined;
    }
    if (object.valueDouble !== undefined && object.valueDouble !== null) {
      message.valueDouble = Parameter_ParameterValueDouble.fromJSON(
        object.valueDouble
      );
    } else {
      message.valueDouble = undefined;
    }
    return message;
  },

  toJSON(message: Parameter): unknown {
    const obj: any = {};
    message.type !== undefined &&
      (obj.type = parameter_ParameterTypeToJSON(message.type));
    message.key !== undefined && (obj.key = message.key);
    message.valueString !== undefined &&
      (obj.valueString = message.valueString
        ? Parameter_ParameterValueString.toJSON(message.valueString)
        : undefined);
    message.valueBool !== undefined &&
      (obj.valueBool = message.valueBool
        ? Parameter_ParameterValueBool.toJSON(message.valueBool)
        : undefined);
    message.valueUint32 !== undefined &&
      (obj.valueUint32 = message.valueUint32
        ? Parameter_ParameterValueUint32.toJSON(message.valueUint32)
        : undefined);
    message.valueDouble !== undefined &&
      (obj.valueDouble = message.valueDouble
        ? Parameter_ParameterValueDouble.toJSON(message.valueDouble)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Parameter>): Parameter {
    const message = { ...baseParameter } as Parameter;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.valueString !== undefined && object.valueString !== null) {
      message.valueString = Parameter_ParameterValueString.fromPartial(
        object.valueString
      );
    } else {
      message.valueString = undefined;
    }
    if (object.valueBool !== undefined && object.valueBool !== null) {
      message.valueBool = Parameter_ParameterValueBool.fromPartial(
        object.valueBool
      );
    } else {
      message.valueBool = undefined;
    }
    if (object.valueUint32 !== undefined && object.valueUint32 !== null) {
      message.valueUint32 = Parameter_ParameterValueUint32.fromPartial(
        object.valueUint32
      );
    } else {
      message.valueUint32 = undefined;
    }
    if (object.valueDouble !== undefined && object.valueDouble !== null) {
      message.valueDouble = Parameter_ParameterValueDouble.fromPartial(
        object.valueDouble
      );
    } else {
      message.valueDouble = undefined;
    }
    return message;
  },
};

const baseParameter_ParameterValueString: object = { value: "" };

export const Parameter_ParameterValueString = {
  encode(
    message: Parameter_ParameterValueString,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): Parameter_ParameterValueString {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseParameter_ParameterValueString,
    } as Parameter_ParameterValueString;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Parameter_ParameterValueString {
    const message = {
      ...baseParameter_ParameterValueString,
    } as Parameter_ParameterValueString;
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: Parameter_ParameterValueString): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<Parameter_ParameterValueString>
  ): Parameter_ParameterValueString {
    const message = {
      ...baseParameter_ParameterValueString,
    } as Parameter_ParameterValueString;
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseParameter_ParameterValueBool: object = { value: false };

export const Parameter_ParameterValueBool = {
  encode(
    message: Parameter_ParameterValueBool,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.value === true) {
      writer.uint32(8).bool(message.value);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): Parameter_ParameterValueBool {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseParameter_ParameterValueBool,
    } as Parameter_ParameterValueBool;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Parameter_ParameterValueBool {
    const message = {
      ...baseParameter_ParameterValueBool,
    } as Parameter_ParameterValueBool;
    if (object.value !== undefined && object.value !== null) {
      message.value = Boolean(object.value);
    } else {
      message.value = false;
    }
    return message;
  },

  toJSON(message: Parameter_ParameterValueBool): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<Parameter_ParameterValueBool>
  ): Parameter_ParameterValueBool {
    const message = {
      ...baseParameter_ParameterValueBool,
    } as Parameter_ParameterValueBool;
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = false;
    }
    return message;
  },
};

const baseParameter_ParameterValueUint32: object = { value: 0 };

export const Parameter_ParameterValueUint32 = {
  encode(
    message: Parameter_ParameterValueUint32,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.value !== 0) {
      writer.uint32(8).uint32(message.value);
    }
    if (message.min !== undefined) {
      writer.uint32(16).uint32(message.min);
    }
    if (message.max !== undefined) {
      writer.uint32(24).uint32(message.max);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): Parameter_ParameterValueUint32 {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseParameter_ParameterValueUint32,
    } as Parameter_ParameterValueUint32;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.uint32();
          break;
        case 2:
          message.min = reader.uint32();
          break;
        case 3:
          message.max = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Parameter_ParameterValueUint32 {
    const message = {
      ...baseParameter_ParameterValueUint32,
    } as Parameter_ParameterValueUint32;
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    if (object.min !== undefined && object.min !== null) {
      message.min = Number(object.min);
    } else {
      message.min = undefined;
    }
    if (object.max !== undefined && object.max !== null) {
      message.max = Number(object.max);
    } else {
      message.max = undefined;
    }
    return message;
  },

  toJSON(message: Parameter_ParameterValueUint32): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    message.min !== undefined && (obj.min = message.min);
    message.max !== undefined && (obj.max = message.max);
    return obj;
  },

  fromPartial(
    object: DeepPartial<Parameter_ParameterValueUint32>
  ): Parameter_ParameterValueUint32 {
    const message = {
      ...baseParameter_ParameterValueUint32,
    } as Parameter_ParameterValueUint32;
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    if (object.min !== undefined && object.min !== null) {
      message.min = object.min;
    } else {
      message.min = undefined;
    }
    if (object.max !== undefined && object.max !== null) {
      message.max = object.max;
    } else {
      message.max = undefined;
    }
    return message;
  },
};

const baseParameter_ParameterValueDouble: object = { value: 0 };

export const Parameter_ParameterValueDouble = {
  encode(
    message: Parameter_ParameterValueDouble,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.value !== 0) {
      writer.uint32(9).double(message.value);
    }
    if (message.min !== undefined) {
      writer.uint32(17).double(message.min);
    }
    if (message.max !== undefined) {
      writer.uint32(25).double(message.max);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): Parameter_ParameterValueDouble {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseParameter_ParameterValueDouble,
    } as Parameter_ParameterValueDouble;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.double();
          break;
        case 2:
          message.min = reader.double();
          break;
        case 3:
          message.max = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Parameter_ParameterValueDouble {
    const message = {
      ...baseParameter_ParameterValueDouble,
    } as Parameter_ParameterValueDouble;
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    if (object.min !== undefined && object.min !== null) {
      message.min = Number(object.min);
    } else {
      message.min = undefined;
    }
    if (object.max !== undefined && object.max !== null) {
      message.max = Number(object.max);
    } else {
      message.max = undefined;
    }
    return message;
  },

  toJSON(message: Parameter_ParameterValueDouble): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    message.min !== undefined && (obj.min = message.min);
    message.max !== undefined && (obj.max = message.max);
    return obj;
  },

  fromPartial(
    object: DeepPartial<Parameter_ParameterValueDouble>
  ): Parameter_ParameterValueDouble {
    const message = {
      ...baseParameter_ParameterValueDouble,
    } as Parameter_ParameterValueDouble;
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    if (object.min !== undefined && object.min !== null) {
      message.min = object.min;
    } else {
      message.min = undefined;
    }
    if (object.max !== undefined && object.max !== null) {
      message.max = object.max;
    } else {
      message.max = undefined;
    }
    return message;
  },
};

const baseSource: object = { type: 0, subType: 0 };

export const Source = {
  encode(message: Source, writer: Writer = Writer.create()): Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.subType !== 0) {
      writer.uint32(16).int32(message.subType);
    }
    for (const v of message.parameters) {
      Parameter.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Source {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSource } as Source;
    message.parameters = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.subType = reader.int32() as any;
          break;
        case 3:
          message.parameters.push(Parameter.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Source {
    const message = { ...baseSource } as Source;
    message.parameters = [];
    if (object.type !== undefined && object.type !== null) {
      message.type = sourceTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (object.subType !== undefined && object.subType !== null) {
      message.subType = sourceSubTypeFromJSON(object.subType);
    } else {
      message.subType = 0;
    }
    if (object.parameters !== undefined && object.parameters !== null) {
      for (const e of object.parameters) {
        message.parameters.push(Parameter.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: Source): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = sourceTypeToJSON(message.type));
    message.subType !== undefined &&
      (obj.subType = sourceSubTypeToJSON(message.subType));
    if (message.parameters) {
      obj.parameters = message.parameters.map((e) =>
        e ? Parameter.toJSON(e) : undefined
      );
    } else {
      obj.parameters = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Source>): Source {
    const message = { ...baseSource } as Source;
    message.parameters = [];
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.subType !== undefined && object.subType !== null) {
      message.subType = object.subType;
    } else {
      message.subType = 0;
    }
    if (object.parameters !== undefined && object.parameters !== null) {
      for (const e of object.parameters) {
        message.parameters.push(Parameter.fromPartial(e));
      }
    }
    return message;
  },
};

const baseEncoder: object = { type: 0 };

export const Encoder = {
  encode(message: Encoder, writer: Writer = Writer.create()): Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    for (const v of message.parameters) {
      Parameter.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Encoder {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEncoder } as Encoder;
    message.parameters = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.parameters.push(Parameter.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Encoder {
    const message = { ...baseEncoder } as Encoder;
    message.parameters = [];
    if (object.type !== undefined && object.type !== null) {
      message.type = encoderTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (object.parameters !== undefined && object.parameters !== null) {
      for (const e of object.parameters) {
        message.parameters.push(Parameter.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: Encoder): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = encoderTypeToJSON(message.type));
    if (message.parameters) {
      obj.parameters = message.parameters.map((e) =>
        e ? Parameter.toJSON(e) : undefined
      );
    } else {
      obj.parameters = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Encoder>): Encoder {
    const message = { ...baseEncoder } as Encoder;
    message.parameters = [];
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.parameters !== undefined && object.parameters !== null) {
      for (const e of object.parameters) {
        message.parameters.push(Parameter.fromPartial(e));
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
    for (const v of message.availableSources) {
      Source.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.availableEncoders) {
      Encoder.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ServerInfo {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseServerInfo } as ServerInfo;
    message.availableSources = [];
    message.availableEncoders = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.platform = reader.int32() as any;
          break;
        case 3:
          message.availableSources.push(Source.decode(reader, reader.uint32()));
          break;
        case 4:
          message.availableEncoders.push(
            Encoder.decode(reader, reader.uint32())
          );
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
    message.availableSources = [];
    message.availableEncoders = [];
    if (object.platform !== undefined && object.platform !== null) {
      message.platform = platformFromJSON(object.platform);
    } else {
      message.platform = 0;
    }
    if (
      object.availableSources !== undefined &&
      object.availableSources !== null
    ) {
      for (const e of object.availableSources) {
        message.availableSources.push(Source.fromJSON(e));
      }
    }
    if (
      object.availableEncoders !== undefined &&
      object.availableEncoders !== null
    ) {
      for (const e of object.availableEncoders) {
        message.availableEncoders.push(Encoder.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: ServerInfo): unknown {
    const obj: any = {};
    message.platform !== undefined &&
      (obj.platform = platformToJSON(message.platform));
    if (message.availableSources) {
      obj.availableSources = message.availableSources.map((e) =>
        e ? Source.toJSON(e) : undefined
      );
    } else {
      obj.availableSources = [];
    }
    if (message.availableEncoders) {
      obj.availableEncoders = message.availableEncoders.map((e) =>
        e ? Encoder.toJSON(e) : undefined
      );
    } else {
      obj.availableEncoders = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ServerInfo>): ServerInfo {
    const message = { ...baseServerInfo } as ServerInfo;
    message.availableSources = [];
    message.availableEncoders = [];
    if (object.platform !== undefined && object.platform !== null) {
      message.platform = object.platform;
    } else {
      message.platform = 0;
    }
    if (
      object.availableSources !== undefined &&
      object.availableSources !== null
    ) {
      for (const e of object.availableSources) {
        message.availableSources.push(Source.fromPartial(e));
      }
    }
    if (
      object.availableEncoders !== undefined &&
      object.availableEncoders !== null
    ) {
      for (const e of object.availableEncoders) {
        message.availableEncoders.push(Encoder.fromPartial(e));
      }
    }
    return message;
  },
};

const baseStreamChange: object = {};

export const StreamChange = {
  encode(message: StreamChange, writer: Writer = Writer.create()): Writer {
    for (const v of message.streams) {
      StreamChange_StreamChange.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): StreamChange {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStreamChange } as StreamChange;
    message.streams = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.streams.push(
            StreamChange_StreamChange.decode(reader, reader.uint32())
          );
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
    message.streams = [];
    if (object.streams !== undefined && object.streams !== null) {
      for (const e of object.streams) {
        message.streams.push(StreamChange_StreamChange.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: StreamChange): unknown {
    const obj: any = {};
    if (message.streams) {
      obj.streams = message.streams.map((e) =>
        e ? StreamChange_StreamChange.toJSON(e) : undefined
      );
    } else {
      obj.streams = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<StreamChange>): StreamChange {
    const message = { ...baseStreamChange } as StreamChange;
    message.streams = [];
    if (object.streams !== undefined && object.streams !== null) {
      for (const e of object.streams) {
        message.streams.push(StreamChange_StreamChange.fromPartial(e));
      }
    }
    return message;
  },
};

const baseStreamChange_StreamChange: object = { id: 0 };

export const StreamChange_StreamChange = {
  encode(
    message: StreamChange_StreamChange,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.source !== undefined) {
      Source.encode(message.source, writer.uint32(18).fork()).ldelim();
    }
    if (message.encoder !== undefined) {
      Encoder.encode(message.encoder, writer.uint32(26).fork()).ldelim();
    }
    if (message.command !== undefined) {
      writer.uint32(32).int32(message.command);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): StreamChange_StreamChange {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseStreamChange_StreamChange,
    } as StreamChange_StreamChange;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.source = Source.decode(reader, reader.uint32());
          break;
        case 3:
          message.encoder = Encoder.decode(reader, reader.uint32());
          break;
        case 4:
          message.command = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StreamChange_StreamChange {
    const message = {
      ...baseStreamChange_StreamChange,
    } as StreamChange_StreamChange;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = Source.fromJSON(object.source);
    } else {
      message.source = undefined;
    }
    if (object.encoder !== undefined && object.encoder !== null) {
      message.encoder = Encoder.fromJSON(object.encoder);
    } else {
      message.encoder = undefined;
    }
    if (object.command !== undefined && object.command !== null) {
      message.command = commandFromJSON(object.command);
    } else {
      message.command = undefined;
    }
    return message;
  },

  toJSON(message: StreamChange_StreamChange): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.source !== undefined &&
      (obj.source = message.source ? Source.toJSON(message.source) : undefined);
    message.encoder !== undefined &&
      (obj.encoder = message.encoder
        ? Encoder.toJSON(message.encoder)
        : undefined);
    message.command !== undefined &&
      (obj.command =
        message.command !== undefined
          ? commandToJSON(message.command)
          : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<StreamChange_StreamChange>
  ): StreamChange_StreamChange {
    const message = {
      ...baseStreamChange_StreamChange,
    } as StreamChange_StreamChange;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = Source.fromPartial(object.source);
    } else {
      message.source = undefined;
    }
    if (object.encoder !== undefined && object.encoder !== null) {
      message.encoder = Encoder.fromPartial(object.encoder);
    } else {
      message.encoder = undefined;
    }
    if (object.command !== undefined && object.command !== null) {
      message.command = object.command;
    } else {
      message.command = undefined;
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

const baseStreamData: object = { streamId: 0 };

export const StreamData = {
  encode(message: StreamData, writer: Writer = Writer.create()): Writer {
    if (message.streamId !== 0) {
      writer.uint32(8).uint32(message.streamId);
    }
    if (message.payload.length !== 0) {
      writer.uint32(18).bytes(message.payload);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): StreamData {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStreamData } as StreamData;
    message.payload = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.streamId = reader.uint32();
          break;
        case 2:
          message.payload = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StreamData {
    const message = { ...baseStreamData } as StreamData;
    message.payload = new Uint8Array();
    if (object.streamId !== undefined && object.streamId !== null) {
      message.streamId = Number(object.streamId);
    } else {
      message.streamId = 0;
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = bytesFromBase64(object.payload);
    }
    return message;
  },

  toJSON(message: StreamData): unknown {
    const obj: any = {};
    message.streamId !== undefined && (obj.streamId = message.streamId);
    message.payload !== undefined &&
      (obj.payload = base64FromBytes(
        message.payload !== undefined ? message.payload : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<StreamData>): StreamData {
    const message = { ...baseStreamData } as StreamData;
    if (object.streamId !== undefined && object.streamId !== null) {
      message.streamId = object.streamId;
    } else {
      message.streamId = 0;
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = object.payload;
    } else {
      message.payload = new Uint8Array();
    }
    return message;
  },
};

const baseMessage: object = { type: 0 };

export const Message = {
  encode(message: Message, writer: Writer = Writer.create()): Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.serverInfo !== undefined) {
      ServerInfo.encode(message.serverInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.streamChange !== undefined) {
      StreamChange.encode(
        message.streamChange,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.streamData !== undefined) {
      StreamData.encode(message.streamData, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Message {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMessage } as Message;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.serverInfo = ServerInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.streamChange = StreamChange.decode(reader, reader.uint32());
          break;
        case 4:
          message.streamData = StreamData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Message {
    const message = { ...baseMessage } as Message;
    if (object.type !== undefined && object.type !== null) {
      message.type = messageTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (object.serverInfo !== undefined && object.serverInfo !== null) {
      message.serverInfo = ServerInfo.fromJSON(object.serverInfo);
    } else {
      message.serverInfo = undefined;
    }
    if (object.streamChange !== undefined && object.streamChange !== null) {
      message.streamChange = StreamChange.fromJSON(object.streamChange);
    } else {
      message.streamChange = undefined;
    }
    if (object.streamData !== undefined && object.streamData !== null) {
      message.streamData = StreamData.fromJSON(object.streamData);
    } else {
      message.streamData = undefined;
    }
    return message;
  },

  toJSON(message: Message): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = messageTypeToJSON(message.type));
    message.serverInfo !== undefined &&
      (obj.serverInfo = message.serverInfo
        ? ServerInfo.toJSON(message.serverInfo)
        : undefined);
    message.streamChange !== undefined &&
      (obj.streamChange = message.streamChange
        ? StreamChange.toJSON(message.streamChange)
        : undefined);
    message.streamData !== undefined &&
      (obj.streamData = message.streamData
        ? StreamData.toJSON(message.streamData)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Message>): Message {
    const message = { ...baseMessage } as Message;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.serverInfo !== undefined && object.serverInfo !== null) {
      message.serverInfo = ServerInfo.fromPartial(object.serverInfo);
    } else {
      message.serverInfo = undefined;
    }
    if (object.streamChange !== undefined && object.streamChange !== null) {
      message.streamChange = StreamChange.fromPartial(object.streamChange);
    } else {
      message.streamChange = undefined;
    }
    if (object.streamData !== undefined && object.streamData !== null) {
      message.streamData = StreamData.fromPartial(object.streamData);
    } else {
      message.streamData = undefined;
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (let i = 0; i < arr.byteLength; ++i) {
    bin.push(String.fromCharCode(arr[i]));
  }
  return btoa(bin.join(""));
}

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
