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
  SOURCE_SUB_TYPE_CURSOR = 5,
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
    case 5:
    case "SOURCE_SUB_TYPE_CURSOR":
      return SourceSubType.SOURCE_SUB_TYPE_CURSOR;
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
    case SourceSubType.SOURCE_SUB_TYPE_CURSOR:
      return "SOURCE_SUB_TYPE_CURSOR";
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

export enum ParameterType {
  PARAMETER_TYPE_STRING = 0,
  PARAMETER_TYPE_BOOL = 1,
  PARAMETER_TYPE_UINT32 = 2,
  PARAMETER_TYPE_DOUBLE = 3,
  UNRECOGNIZED = -1,
}

export function parameterTypeFromJSON(object: any): ParameterType {
  switch (object) {
    case 0:
    case "PARAMETER_TYPE_STRING":
      return ParameterType.PARAMETER_TYPE_STRING;
    case 1:
    case "PARAMETER_TYPE_BOOL":
      return ParameterType.PARAMETER_TYPE_BOOL;
    case 2:
    case "PARAMETER_TYPE_UINT32":
      return ParameterType.PARAMETER_TYPE_UINT32;
    case 3:
    case "PARAMETER_TYPE_DOUBLE":
      return ParameterType.PARAMETER_TYPE_DOUBLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ParameterType.UNRECOGNIZED;
  }
}

export function parameterTypeToJSON(object: ParameterType): string {
  switch (object) {
    case ParameterType.PARAMETER_TYPE_STRING:
      return "PARAMETER_TYPE_STRING";
    case ParameterType.PARAMETER_TYPE_BOOL:
      return "PARAMETER_TYPE_BOOL";
    case ParameterType.PARAMETER_TYPE_UINT32:
      return "PARAMETER_TYPE_UINT32";
    case ParameterType.PARAMETER_TYPE_DOUBLE:
      return "PARAMETER_TYPE_DOUBLE";
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
  type: ParameterType;
  key: string;
  value?:
    | { $case: "valueString"; valueString: Parameter_ValueString }
    | { $case: "valueBool"; valueBool: Parameter_ValueBool }
    | { $case: "valueUint32"; valueUint32: Parameter_ValueUint32 }
    | { $case: "valueDouble"; valueDouble: Parameter_ValueDouble };
}

export interface Parameter_ValueString {
  value: string;
}

export interface Parameter_ValueBool {
  value: boolean;
}

export interface Parameter_ValueUint32 {
  value: number;
  min?: number | undefined;
  max?: number | undefined;
}

export interface Parameter_ValueDouble {
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

export interface StreamsChange {
  streams: StreamsChange_StreamChange[];
}

export interface StreamsChange_StreamChange {
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
  message?:
    | { $case: "serverInfo"; serverInfo: ServerInfo }
    | { $case: "streamChange"; streamChange: StreamsChange }
    | { $case: "streamData"; streamData: StreamData };
}

export interface StreamDataPointer {
  absx: number;
  absy: number;
  mask?: number | undefined;
}

export interface StreamDataKeyboard {
  keysym: number;
  keycode: number;
  down: boolean;
}

export interface StreamDataCursor {
  width: number;
  height: number;
  hotx: number;
  hoty: number;
  image: Uint8Array;
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
    if (message.value?.$case === "valueString") {
      Parameter_ValueString.encode(
        message.value.valueString,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.value?.$case === "valueBool") {
      Parameter_ValueBool.encode(
        message.value.valueBool,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.value?.$case === "valueUint32") {
      Parameter_ValueUint32.encode(
        message.value.valueUint32,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.value?.$case === "valueDouble") {
      Parameter_ValueDouble.encode(
        message.value.valueDouble,
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
          message.value = {
            $case: "valueString",
            valueString: Parameter_ValueString.decode(reader, reader.uint32()),
          };
          break;
        case 4:
          message.value = {
            $case: "valueBool",
            valueBool: Parameter_ValueBool.decode(reader, reader.uint32()),
          };
          break;
        case 5:
          message.value = {
            $case: "valueUint32",
            valueUint32: Parameter_ValueUint32.decode(reader, reader.uint32()),
          };
          break;
        case 6:
          message.value = {
            $case: "valueDouble",
            valueDouble: Parameter_ValueDouble.decode(reader, reader.uint32()),
          };
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
      message.type = parameterTypeFromJSON(object.type);
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    }
    if (object.valueString !== undefined && object.valueString !== null) {
      message.value = {
        $case: "valueString",
        valueString: Parameter_ValueString.fromJSON(object.valueString),
      };
    }
    if (object.valueBool !== undefined && object.valueBool !== null) {
      message.value = {
        $case: "valueBool",
        valueBool: Parameter_ValueBool.fromJSON(object.valueBool),
      };
    }
    if (object.valueUint32 !== undefined && object.valueUint32 !== null) {
      message.value = {
        $case: "valueUint32",
        valueUint32: Parameter_ValueUint32.fromJSON(object.valueUint32),
      };
    }
    if (object.valueDouble !== undefined && object.valueDouble !== null) {
      message.value = {
        $case: "valueDouble",
        valueDouble: Parameter_ValueDouble.fromJSON(object.valueDouble),
      };
    }
    return message;
  },

  toJSON(message: Parameter): unknown {
    const obj: any = {};
    message.type !== undefined &&
      (obj.type = parameterTypeToJSON(message.type));
    message.key !== undefined && (obj.key = message.key);
    message.value?.$case === "valueString" &&
      (obj.valueString = message.value?.valueString
        ? Parameter_ValueString.toJSON(message.value?.valueString)
        : undefined);
    message.value?.$case === "valueBool" &&
      (obj.valueBool = message.value?.valueBool
        ? Parameter_ValueBool.toJSON(message.value?.valueBool)
        : undefined);
    message.value?.$case === "valueUint32" &&
      (obj.valueUint32 = message.value?.valueUint32
        ? Parameter_ValueUint32.toJSON(message.value?.valueUint32)
        : undefined);
    message.value?.$case === "valueDouble" &&
      (obj.valueDouble = message.value?.valueDouble
        ? Parameter_ValueDouble.toJSON(message.value?.valueDouble)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Parameter>): Parameter {
    const message = { ...baseParameter } as Parameter;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (
      object.value?.$case === "valueString" &&
      object.value?.valueString !== undefined &&
      object.value?.valueString !== null
    ) {
      message.value = {
        $case: "valueString",
        valueString: Parameter_ValueString.fromPartial(
          object.value.valueString
        ),
      };
    }
    if (
      object.value?.$case === "valueBool" &&
      object.value?.valueBool !== undefined &&
      object.value?.valueBool !== null
    ) {
      message.value = {
        $case: "valueBool",
        valueBool: Parameter_ValueBool.fromPartial(object.value.valueBool),
      };
    }
    if (
      object.value?.$case === "valueUint32" &&
      object.value?.valueUint32 !== undefined &&
      object.value?.valueUint32 !== null
    ) {
      message.value = {
        $case: "valueUint32",
        valueUint32: Parameter_ValueUint32.fromPartial(
          object.value.valueUint32
        ),
      };
    }
    if (
      object.value?.$case === "valueDouble" &&
      object.value?.valueDouble !== undefined &&
      object.value?.valueDouble !== null
    ) {
      message.value = {
        $case: "valueDouble",
        valueDouble: Parameter_ValueDouble.fromPartial(
          object.value.valueDouble
        ),
      };
    }
    return message;
  },
};

const baseParameter_ValueString: object = { value: "" };

export const Parameter_ValueString = {
  encode(
    message: Parameter_ValueString,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Parameter_ValueString {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParameter_ValueString } as Parameter_ValueString;
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

  fromJSON(object: any): Parameter_ValueString {
    const message = { ...baseParameter_ValueString } as Parameter_ValueString;
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    }
    return message;
  },

  toJSON(message: Parameter_ValueString): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<Parameter_ValueString>
  ): Parameter_ValueString {
    const message = { ...baseParameter_ValueString } as Parameter_ValueString;
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
};

const baseParameter_ValueBool: object = { value: false };

export const Parameter_ValueBool = {
  encode(
    message: Parameter_ValueBool,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.value === true) {
      writer.uint32(8).bool(message.value);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Parameter_ValueBool {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParameter_ValueBool } as Parameter_ValueBool;
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

  fromJSON(object: any): Parameter_ValueBool {
    const message = { ...baseParameter_ValueBool } as Parameter_ValueBool;
    if (object.value !== undefined && object.value !== null) {
      message.value = Boolean(object.value);
    }
    return message;
  },

  toJSON(message: Parameter_ValueBool): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<Parameter_ValueBool>): Parameter_ValueBool {
    const message = { ...baseParameter_ValueBool } as Parameter_ValueBool;
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
};

const baseParameter_ValueUint32: object = { value: 0 };

export const Parameter_ValueUint32 = {
  encode(
    message: Parameter_ValueUint32,
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

  decode(input: Reader | Uint8Array, length?: number): Parameter_ValueUint32 {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParameter_ValueUint32 } as Parameter_ValueUint32;
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

  fromJSON(object: any): Parameter_ValueUint32 {
    const message = { ...baseParameter_ValueUint32 } as Parameter_ValueUint32;
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    }
    if (object.min !== undefined && object.min !== null) {
      message.min = Number(object.min);
    }
    if (object.max !== undefined && object.max !== null) {
      message.max = Number(object.max);
    }
    return message;
  },

  toJSON(message: Parameter_ValueUint32): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    message.min !== undefined && (obj.min = message.min);
    message.max !== undefined && (obj.max = message.max);
    return obj;
  },

  fromPartial(
    object: DeepPartial<Parameter_ValueUint32>
  ): Parameter_ValueUint32 {
    const message = { ...baseParameter_ValueUint32 } as Parameter_ValueUint32;
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    if (object.min !== undefined && object.min !== null) {
      message.min = object.min;
    }
    if (object.max !== undefined && object.max !== null) {
      message.max = object.max;
    }
    return message;
  },
};

const baseParameter_ValueDouble: object = { value: 0 };

export const Parameter_ValueDouble = {
  encode(
    message: Parameter_ValueDouble,
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

  decode(input: Reader | Uint8Array, length?: number): Parameter_ValueDouble {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParameter_ValueDouble } as Parameter_ValueDouble;
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

  fromJSON(object: any): Parameter_ValueDouble {
    const message = { ...baseParameter_ValueDouble } as Parameter_ValueDouble;
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    }
    if (object.min !== undefined && object.min !== null) {
      message.min = Number(object.min);
    }
    if (object.max !== undefined && object.max !== null) {
      message.max = Number(object.max);
    }
    return message;
  },

  toJSON(message: Parameter_ValueDouble): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    message.min !== undefined && (obj.min = message.min);
    message.max !== undefined && (obj.max = message.max);
    return obj;
  },

  fromPartial(
    object: DeepPartial<Parameter_ValueDouble>
  ): Parameter_ValueDouble {
    const message = { ...baseParameter_ValueDouble } as Parameter_ValueDouble;
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    if (object.min !== undefined && object.min !== null) {
      message.min = object.min;
    }
    if (object.max !== undefined && object.max !== null) {
      message.max = object.max;
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
    }
    if (object.subType !== undefined && object.subType !== null) {
      message.subType = sourceSubTypeFromJSON(object.subType);
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
    }
    if (object.subType !== undefined && object.subType !== null) {
      message.subType = object.subType;
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

const baseStreamsChange: object = {};

export const StreamsChange = {
  encode(message: StreamsChange, writer: Writer = Writer.create()): Writer {
    for (const v of message.streams) {
      StreamsChange_StreamChange.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): StreamsChange {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStreamsChange } as StreamsChange;
    message.streams = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.streams.push(
            StreamsChange_StreamChange.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StreamsChange {
    const message = { ...baseStreamsChange } as StreamsChange;
    message.streams = [];
    if (object.streams !== undefined && object.streams !== null) {
      for (const e of object.streams) {
        message.streams.push(StreamsChange_StreamChange.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: StreamsChange): unknown {
    const obj: any = {};
    if (message.streams) {
      obj.streams = message.streams.map((e) =>
        e ? StreamsChange_StreamChange.toJSON(e) : undefined
      );
    } else {
      obj.streams = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<StreamsChange>): StreamsChange {
    const message = { ...baseStreamsChange } as StreamsChange;
    message.streams = [];
    if (object.streams !== undefined && object.streams !== null) {
      for (const e of object.streams) {
        message.streams.push(StreamsChange_StreamChange.fromPartial(e));
      }
    }
    return message;
  },
};

const baseStreamsChange_StreamChange: object = { id: 0 };

export const StreamsChange_StreamChange = {
  encode(
    message: StreamsChange_StreamChange,
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
  ): StreamsChange_StreamChange {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseStreamsChange_StreamChange,
    } as StreamsChange_StreamChange;
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

  fromJSON(object: any): StreamsChange_StreamChange {
    const message = {
      ...baseStreamsChange_StreamChange,
    } as StreamsChange_StreamChange;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = Source.fromJSON(object.source);
    }
    if (object.encoder !== undefined && object.encoder !== null) {
      message.encoder = Encoder.fromJSON(object.encoder);
    }
    if (object.command !== undefined && object.command !== null) {
      message.command = commandFromJSON(object.command);
    }
    return message;
  },

  toJSON(message: StreamsChange_StreamChange): unknown {
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
    object: DeepPartial<StreamsChange_StreamChange>
  ): StreamsChange_StreamChange {
    const message = {
      ...baseStreamsChange_StreamChange,
    } as StreamsChange_StreamChange;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = Source.fromPartial(object.source);
    }
    if (object.encoder !== undefined && object.encoder !== null) {
      message.encoder = Encoder.fromPartial(object.encoder);
    }
    if (object.command !== undefined && object.command !== null) {
      message.command = object.command;
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
    }
    if (object.averageFrameQp !== undefined && object.averageFrameQp !== null) {
      message.averageFrameQp = Number(object.averageFrameQp);
    }
    if (
      object.encodeTsStartMs !== undefined &&
      object.encodeTsStartMs !== null
    ) {
      message.encodeTsStartMs = Number(object.encodeTsStartMs);
    }
    if (object.encodeTsEndMs !== undefined && object.encodeTsEndMs !== null) {
      message.encodeTsEndMs = Number(object.encodeTsEndMs);
    }
    if (object.txTsStartMs !== undefined && object.txTsStartMs !== null) {
      message.txTsStartMs = Number(object.txTsStartMs);
    }
    if (object.txTsEndMs !== undefined && object.txTsEndMs !== null) {
      message.txTsEndMs = Number(object.txTsEndMs);
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
    }
    if (object.averageFrameQp !== undefined && object.averageFrameQp !== null) {
      message.averageFrameQp = object.averageFrameQp;
    }
    if (
      object.encodeTsStartMs !== undefined &&
      object.encodeTsStartMs !== null
    ) {
      message.encodeTsStartMs = object.encodeTsStartMs;
    }
    if (object.encodeTsEndMs !== undefined && object.encodeTsEndMs !== null) {
      message.encodeTsEndMs = object.encodeTsEndMs;
    }
    if (object.txTsStartMs !== undefined && object.txTsStartMs !== null) {
      message.txTsStartMs = object.txTsStartMs;
    }
    if (object.txTsEndMs !== undefined && object.txTsEndMs !== null) {
      message.txTsEndMs = object.txTsEndMs;
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
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = object.payload;
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
    if (message.message?.$case === "serverInfo") {
      ServerInfo.encode(
        message.message.serverInfo,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.message?.$case === "streamChange") {
      StreamsChange.encode(
        message.message.streamChange,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.message?.$case === "streamData") {
      StreamData.encode(
        message.message.streamData,
        writer.uint32(34).fork()
      ).ldelim();
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
          message.message = {
            $case: "serverInfo",
            serverInfo: ServerInfo.decode(reader, reader.uint32()),
          };
          break;
        case 3:
          message.message = {
            $case: "streamChange",
            streamChange: StreamsChange.decode(reader, reader.uint32()),
          };
          break;
        case 4:
          message.message = {
            $case: "streamData",
            streamData: StreamData.decode(reader, reader.uint32()),
          };
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
    }
    if (object.serverInfo !== undefined && object.serverInfo !== null) {
      message.message = {
        $case: "serverInfo",
        serverInfo: ServerInfo.fromJSON(object.serverInfo),
      };
    }
    if (object.streamChange !== undefined && object.streamChange !== null) {
      message.message = {
        $case: "streamChange",
        streamChange: StreamsChange.fromJSON(object.streamChange),
      };
    }
    if (object.streamData !== undefined && object.streamData !== null) {
      message.message = {
        $case: "streamData",
        streamData: StreamData.fromJSON(object.streamData),
      };
    }
    return message;
  },

  toJSON(message: Message): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = messageTypeToJSON(message.type));
    message.message?.$case === "serverInfo" &&
      (obj.serverInfo = message.message?.serverInfo
        ? ServerInfo.toJSON(message.message?.serverInfo)
        : undefined);
    message.message?.$case === "streamChange" &&
      (obj.streamChange = message.message?.streamChange
        ? StreamsChange.toJSON(message.message?.streamChange)
        : undefined);
    message.message?.$case === "streamData" &&
      (obj.streamData = message.message?.streamData
        ? StreamData.toJSON(message.message?.streamData)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Message>): Message {
    const message = { ...baseMessage } as Message;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (
      object.message?.$case === "serverInfo" &&
      object.message?.serverInfo !== undefined &&
      object.message?.serverInfo !== null
    ) {
      message.message = {
        $case: "serverInfo",
        serverInfo: ServerInfo.fromPartial(object.message.serverInfo),
      };
    }
    if (
      object.message?.$case === "streamChange" &&
      object.message?.streamChange !== undefined &&
      object.message?.streamChange !== null
    ) {
      message.message = {
        $case: "streamChange",
        streamChange: StreamsChange.fromPartial(object.message.streamChange),
      };
    }
    if (
      object.message?.$case === "streamData" &&
      object.message?.streamData !== undefined &&
      object.message?.streamData !== null
    ) {
      message.message = {
        $case: "streamData",
        streamData: StreamData.fromPartial(object.message.streamData),
      };
    }
    return message;
  },
};

const baseStreamDataPointer: object = { absx: 0, absy: 0 };

export const StreamDataPointer = {
  encode(message: StreamDataPointer, writer: Writer = Writer.create()): Writer {
    if (message.absx !== 0) {
      writer.uint32(8).uint32(message.absx);
    }
    if (message.absy !== 0) {
      writer.uint32(16).uint32(message.absy);
    }
    if (message.mask !== undefined) {
      writer.uint32(24).int32(message.mask);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): StreamDataPointer {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStreamDataPointer } as StreamDataPointer;
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StreamDataPointer {
    const message = { ...baseStreamDataPointer } as StreamDataPointer;
    if (object.absx !== undefined && object.absx !== null) {
      message.absx = Number(object.absx);
    }
    if (object.absy !== undefined && object.absy !== null) {
      message.absy = Number(object.absy);
    }
    if (object.mask !== undefined && object.mask !== null) {
      message.mask = Number(object.mask);
    }
    return message;
  },

  toJSON(message: StreamDataPointer): unknown {
    const obj: any = {};
    message.absx !== undefined && (obj.absx = message.absx);
    message.absy !== undefined && (obj.absy = message.absy);
    message.mask !== undefined && (obj.mask = message.mask);
    return obj;
  },

  fromPartial(object: DeepPartial<StreamDataPointer>): StreamDataPointer {
    const message = { ...baseStreamDataPointer } as StreamDataPointer;
    if (object.absx !== undefined && object.absx !== null) {
      message.absx = object.absx;
    }
    if (object.absy !== undefined && object.absy !== null) {
      message.absy = object.absy;
    }
    if (object.mask !== undefined && object.mask !== null) {
      message.mask = object.mask;
    }
    return message;
  },
};

const baseStreamDataKeyboard: object = { keysym: 0, keycode: 0, down: false };

export const StreamDataKeyboard = {
  encode(
    message: StreamDataKeyboard,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): StreamDataKeyboard {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStreamDataKeyboard } as StreamDataKeyboard;
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

  fromJSON(object: any): StreamDataKeyboard {
    const message = { ...baseStreamDataKeyboard } as StreamDataKeyboard;
    if (object.keysym !== undefined && object.keysym !== null) {
      message.keysym = Number(object.keysym);
    }
    if (object.keycode !== undefined && object.keycode !== null) {
      message.keycode = Number(object.keycode);
    }
    if (object.down !== undefined && object.down !== null) {
      message.down = Boolean(object.down);
    }
    return message;
  },

  toJSON(message: StreamDataKeyboard): unknown {
    const obj: any = {};
    message.keysym !== undefined && (obj.keysym = message.keysym);
    message.keycode !== undefined && (obj.keycode = message.keycode);
    message.down !== undefined && (obj.down = message.down);
    return obj;
  },

  fromPartial(object: DeepPartial<StreamDataKeyboard>): StreamDataKeyboard {
    const message = { ...baseStreamDataKeyboard } as StreamDataKeyboard;
    if (object.keysym !== undefined && object.keysym !== null) {
      message.keysym = object.keysym;
    }
    if (object.keycode !== undefined && object.keycode !== null) {
      message.keycode = object.keycode;
    }
    if (object.down !== undefined && object.down !== null) {
      message.down = object.down;
    }
    return message;
  },
};

const baseStreamDataCursor: object = { width: 0, height: 0, hotx: 0, hoty: 0 };

export const StreamDataCursor = {
  encode(message: StreamDataCursor, writer: Writer = Writer.create()): Writer {
    if (message.width !== 0) {
      writer.uint32(8).uint32(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(16).uint32(message.height);
    }
    if (message.hotx !== 0) {
      writer.uint32(24).uint32(message.hotx);
    }
    if (message.hoty !== 0) {
      writer.uint32(32).uint32(message.hoty);
    }
    if (message.image.length !== 0) {
      writer.uint32(42).bytes(message.image);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): StreamDataCursor {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStreamDataCursor } as StreamDataCursor;
    message.image = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.width = reader.uint32();
          break;
        case 2:
          message.height = reader.uint32();
          break;
        case 3:
          message.hotx = reader.uint32();
          break;
        case 4:
          message.hoty = reader.uint32();
          break;
        case 5:
          message.image = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StreamDataCursor {
    const message = { ...baseStreamDataCursor } as StreamDataCursor;
    message.image = new Uint8Array();
    if (object.width !== undefined && object.width !== null) {
      message.width = Number(object.width);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    }
    if (object.hotx !== undefined && object.hotx !== null) {
      message.hotx = Number(object.hotx);
    }
    if (object.hoty !== undefined && object.hoty !== null) {
      message.hoty = Number(object.hoty);
    }
    if (object.image !== undefined && object.image !== null) {
      message.image = bytesFromBase64(object.image);
    }
    return message;
  },

  toJSON(message: StreamDataCursor): unknown {
    const obj: any = {};
    message.width !== undefined && (obj.width = message.width);
    message.height !== undefined && (obj.height = message.height);
    message.hotx !== undefined && (obj.hotx = message.hotx);
    message.hoty !== undefined && (obj.hoty = message.hoty);
    message.image !== undefined &&
      (obj.image = base64FromBytes(
        message.image !== undefined ? message.image : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<StreamDataCursor>): StreamDataCursor {
    const message = { ...baseStreamDataCursor } as StreamDataCursor;
    if (object.width !== undefined && object.width !== null) {
      message.width = object.width;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    }
    if (object.hotx !== undefined && object.hotx !== null) {
      message.hotx = object.hotx;
    }
    if (object.hoty !== undefined && object.hoty !== null) {
      message.hoty = object.hoty;
    }
    if (object.image !== undefined && object.image !== null) {
      message.image = object.image;
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
  : T extends { $case: string }
  ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & {
      $case: T["$case"];
    }
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
