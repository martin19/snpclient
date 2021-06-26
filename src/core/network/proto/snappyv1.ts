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

export enum StreamMedium {
  STREAM_MEDIUM_VIDEO = 0,
  STREAM_MEDIUM_AUDIO = 1,
  STREAM_MEDIUM_PERIPHERIAL = 2,
  UNRECOGNIZED = -1,
}

export function streamMediumFromJSON(object: any): StreamMedium {
  switch (object) {
    case 0:
    case "STREAM_MEDIUM_VIDEO":
      return StreamMedium.STREAM_MEDIUM_VIDEO;
    case 1:
    case "STREAM_MEDIUM_AUDIO":
      return StreamMedium.STREAM_MEDIUM_AUDIO;
    case 2:
    case "STREAM_MEDIUM_PERIPHERIAL":
      return StreamMedium.STREAM_MEDIUM_PERIPHERIAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StreamMedium.UNRECOGNIZED;
  }
}

export function streamMediumToJSON(object: StreamMedium): string {
  switch (object) {
    case StreamMedium.STREAM_MEDIUM_VIDEO:
      return "STREAM_MEDIUM_VIDEO";
    case StreamMedium.STREAM_MEDIUM_AUDIO:
      return "STREAM_MEDIUM_AUDIO";
    case StreamMedium.STREAM_MEDIUM_PERIPHERIAL:
      return "STREAM_MEDIUM_PERIPHERIAL";
    default:
      return "UNKNOWN";
  }
}

export enum StreamEndpoint {
  STREAM_ENDPOINT_DRM = 0,
  STREAM_ENDPOINT_X11 = 1,
  STREAM_ENDPOINT_WAYLAND = 2,
  STREAM_ENDPOINT_CAMERA = 3,
  STREAM_ENDPOINT_KEYBOARD = 4,
  STREAM_ENDPOINT_POINTER = 5,
  STREAM_ENDPOINT_CURSOR = 6,
  UNRECOGNIZED = -1,
}

export function streamEndpointFromJSON(object: any): StreamEndpoint {
  switch (object) {
    case 0:
    case "STREAM_ENDPOINT_DRM":
      return StreamEndpoint.STREAM_ENDPOINT_DRM;
    case 1:
    case "STREAM_ENDPOINT_X11":
      return StreamEndpoint.STREAM_ENDPOINT_X11;
    case 2:
    case "STREAM_ENDPOINT_WAYLAND":
      return StreamEndpoint.STREAM_ENDPOINT_WAYLAND;
    case 3:
    case "STREAM_ENDPOINT_CAMERA":
      return StreamEndpoint.STREAM_ENDPOINT_CAMERA;
    case 4:
    case "STREAM_ENDPOINT_KEYBOARD":
      return StreamEndpoint.STREAM_ENDPOINT_KEYBOARD;
    case 5:
    case "STREAM_ENDPOINT_POINTER":
      return StreamEndpoint.STREAM_ENDPOINT_POINTER;
    case 6:
    case "STREAM_ENDPOINT_CURSOR":
      return StreamEndpoint.STREAM_ENDPOINT_CURSOR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StreamEndpoint.UNRECOGNIZED;
  }
}

export function streamEndpointToJSON(object: StreamEndpoint): string {
  switch (object) {
    case StreamEndpoint.STREAM_ENDPOINT_DRM:
      return "STREAM_ENDPOINT_DRM";
    case StreamEndpoint.STREAM_ENDPOINT_X11:
      return "STREAM_ENDPOINT_X11";
    case StreamEndpoint.STREAM_ENDPOINT_WAYLAND:
      return "STREAM_ENDPOINT_WAYLAND";
    case StreamEndpoint.STREAM_ENDPOINT_CAMERA:
      return "STREAM_ENDPOINT_CAMERA";
    case StreamEndpoint.STREAM_ENDPOINT_KEYBOARD:
      return "STREAM_ENDPOINT_KEYBOARD";
    case StreamEndpoint.STREAM_ENDPOINT_POINTER:
      return "STREAM_ENDPOINT_POINTER";
    case StreamEndpoint.STREAM_ENDPOINT_CURSOR:
      return "STREAM_ENDPOINT_CURSOR";
    default:
      return "UNKNOWN";
  }
}

export enum StreamDirection {
  STREAM_DIRECTION_INPUT = 0,
  STREAM_DIRECTION_OUTPUT = 1,
  UNRECOGNIZED = -1,
}

export function streamDirectionFromJSON(object: any): StreamDirection {
  switch (object) {
    case 0:
    case "STREAM_DIRECTION_INPUT":
      return StreamDirection.STREAM_DIRECTION_INPUT;
    case 1:
    case "STREAM_DIRECTION_OUTPUT":
      return StreamDirection.STREAM_DIRECTION_OUTPUT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StreamDirection.UNRECOGNIZED;
  }
}

export function streamDirectionToJSON(object: StreamDirection): string {
  switch (object) {
    case StreamDirection.STREAM_DIRECTION_INPUT:
      return "STREAM_DIRECTION_INPUT";
    case StreamDirection.STREAM_DIRECTION_OUTPUT:
      return "STREAM_DIRECTION_OUTPUT";
    default:
      return "UNKNOWN";
  }
}

export enum StreamEncoding {
  STREAM_ENCODING_H264_SOFTWARE = 0,
  STREAM_ENCODING_H264_HARDWARE = 1,
  STREAM_ENCODING_MP3_SOFTWARE = 2,
  STREAM_ENCODING_MP3_HARDWARE = 3,
  UNRECOGNIZED = -1,
}

export function streamEncodingFromJSON(object: any): StreamEncoding {
  switch (object) {
    case 0:
    case "STREAM_ENCODING_H264_SOFTWARE":
      return StreamEncoding.STREAM_ENCODING_H264_SOFTWARE;
    case 1:
    case "STREAM_ENCODING_H264_HARDWARE":
      return StreamEncoding.STREAM_ENCODING_H264_HARDWARE;
    case 2:
    case "STREAM_ENCODING_MP3_SOFTWARE":
      return StreamEncoding.STREAM_ENCODING_MP3_SOFTWARE;
    case 3:
    case "STREAM_ENCODING_MP3_HARDWARE":
      return StreamEncoding.STREAM_ENCODING_MP3_HARDWARE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StreamEncoding.UNRECOGNIZED;
  }
}

export function streamEncodingToJSON(object: StreamEncoding): string {
  switch (object) {
    case StreamEncoding.STREAM_ENCODING_H264_SOFTWARE:
      return "STREAM_ENCODING_H264_SOFTWARE";
    case StreamEncoding.STREAM_ENCODING_H264_HARDWARE:
      return "STREAM_ENCODING_H264_HARDWARE";
    case StreamEncoding.STREAM_ENCODING_MP3_SOFTWARE:
      return "STREAM_ENCODING_MP3_SOFTWARE";
    case StreamEncoding.STREAM_ENCODING_MP3_HARDWARE:
      return "STREAM_ENCODING_MP3_HARDWARE";
    default:
      return "UNKNOWN";
  }
}

export enum Command {
  COMMAND_INIT = 0,
  COMMAND_INIT_OK = 1,
  COMMAND_START = 2,
  COMMAND_STOP = 3,
  COMMAND_SET_PARAMETER = 4,
  COMMAND_DESTROY = 5,
  UNRECOGNIZED = -1,
}

export function commandFromJSON(object: any): Command {
  switch (object) {
    case 0:
    case "COMMAND_INIT":
      return Command.COMMAND_INIT;
    case 1:
    case "COMMAND_INIT_OK":
      return Command.COMMAND_INIT_OK;
    case 2:
    case "COMMAND_START":
      return Command.COMMAND_START;
    case 3:
    case "COMMAND_STOP":
      return Command.COMMAND_STOP;
    case 4:
    case "COMMAND_SET_PARAMETER":
      return Command.COMMAND_SET_PARAMETER;
    case 5:
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
    case Command.COMMAND_INIT_OK:
      return "COMMAND_INIT_OK";
    case Command.COMMAND_START:
      return "COMMAND_START";
    case Command.COMMAND_STOP:
      return "COMMAND_STOP";
    case Command.COMMAND_SET_PARAMETER:
      return "COMMAND_SET_PARAMETER";
    case Command.COMMAND_DESTROY:
      return "COMMAND_DESTROY";
    default:
      return "UNKNOWN";
  }
}

export enum PropertyType {
  PROPERTY_TYPE_STRING = 0,
  PROPERTY_TYPE_BOOL = 1,
  PROPERTY_TYPE_UINT32 = 2,
  PROPERTY_TYPE_DOUBLE = 3,
  UNRECOGNIZED = -1,
}

export function propertyTypeFromJSON(object: any): PropertyType {
  switch (object) {
    case 0:
    case "PROPERTY_TYPE_STRING":
      return PropertyType.PROPERTY_TYPE_STRING;
    case 1:
    case "PROPERTY_TYPE_BOOL":
      return PropertyType.PROPERTY_TYPE_BOOL;
    case 2:
    case "PROPERTY_TYPE_UINT32":
      return PropertyType.PROPERTY_TYPE_UINT32;
    case 3:
    case "PROPERTY_TYPE_DOUBLE":
      return PropertyType.PROPERTY_TYPE_DOUBLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PropertyType.UNRECOGNIZED;
  }
}

export function propertyTypeToJSON(object: PropertyType): string {
  switch (object) {
    case PropertyType.PROPERTY_TYPE_STRING:
      return "PROPERTY_TYPE_STRING";
    case PropertyType.PROPERTY_TYPE_BOOL:
      return "PROPERTY_TYPE_BOOL";
    case PropertyType.PROPERTY_TYPE_UINT32:
      return "PROPERTY_TYPE_UINT32";
    case PropertyType.PROPERTY_TYPE_DOUBLE:
      return "PROPERTY_TYPE_DOUBLE";
    default:
      return "UNKNOWN";
  }
}

export enum MessageType {
  MESSAGE_TYPE_STREAM_CHANGE = 0,
  MESSAGE_TYPE_STREAM_DATA = 1,
  MESSAGE_TYPE_STREAM_INFO = 2,
  UNRECOGNIZED = -1,
}

export function messageTypeFromJSON(object: any): MessageType {
  switch (object) {
    case 0:
    case "MESSAGE_TYPE_STREAM_CHANGE":
      return MessageType.MESSAGE_TYPE_STREAM_CHANGE;
    case 1:
    case "MESSAGE_TYPE_STREAM_DATA":
      return MessageType.MESSAGE_TYPE_STREAM_DATA;
    case 2:
    case "MESSAGE_TYPE_STREAM_INFO":
      return MessageType.MESSAGE_TYPE_STREAM_INFO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MessageType.UNRECOGNIZED;
  }
}

export function messageTypeToJSON(object: MessageType): string {
  switch (object) {
    case MessageType.MESSAGE_TYPE_STREAM_CHANGE:
      return "MESSAGE_TYPE_STREAM_CHANGE";
    case MessageType.MESSAGE_TYPE_STREAM_DATA:
      return "MESSAGE_TYPE_STREAM_DATA";
    case MessageType.MESSAGE_TYPE_STREAM_INFO:
      return "MESSAGE_TYPE_STREAM_INFO";
    default:
      return "UNKNOWN";
  }
}

export interface Property {
  type: PropertyType;
  key: string;
  value?:
    | { $case: "valueString"; valueString: Property_ValueString }
    | { $case: "valueBool"; valueBool: Property_ValueBool }
    | { $case: "valueUint32"; valueUint32: Property_ValueUint32 }
    | { $case: "valueDouble"; valueDouble: Property_ValueDouble };
}

export interface Property_ValueString {
  value: string;
}

export interface Property_ValueBool {
  value: boolean;
}

export interface Property_ValueUint32 {
  value: number;
  min?: number | undefined;
  max?: number | undefined;
}

export interface Property_ValueDouble {
  value: number;
  min?: number | undefined;
  max?: number | undefined;
}

export interface StreamInfo {
  platform: Platform;
  streamEndpoints: StreamEndpoint[];
  streamEncodings: StreamEncoding[];
}

export interface StreamChange {
  id: number;
  command: Command;
  streamMedium: StreamMedium;
  streamDirection: StreamDirection;
  streamEndpoint: StreamEndpoint;
  streamEncoding: StreamEncoding;
  property: Property[];
}

export interface StreamData {
  streamId: number;
  /** optional FrameTiming frame_timing = 3; */
  payload: Uint8Array;
}

export interface Message {
  type: MessageType;
  message?:
    | { $case: "streamChange"; streamChange: StreamChange }
    | { $case: "streamData"; streamData: StreamData }
    | { $case: "streamInfo"; streamInfo: StreamInfo };
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

const baseProperty: object = { type: 0, key: "" };

export const Property = {
  encode(message: Property, writer: Writer = Writer.create()): Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    if (message.value?.$case === "valueString") {
      Property_ValueString.encode(
        message.value.valueString,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.value?.$case === "valueBool") {
      Property_ValueBool.encode(
        message.value.valueBool,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.value?.$case === "valueUint32") {
      Property_ValueUint32.encode(
        message.value.valueUint32,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.value?.$case === "valueDouble") {
      Property_ValueDouble.encode(
        message.value.valueDouble,
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Property {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProperty } as Property;
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
            valueString: Property_ValueString.decode(reader, reader.uint32()),
          };
          break;
        case 4:
          message.value = {
            $case: "valueBool",
            valueBool: Property_ValueBool.decode(reader, reader.uint32()),
          };
          break;
        case 5:
          message.value = {
            $case: "valueUint32",
            valueUint32: Property_ValueUint32.decode(reader, reader.uint32()),
          };
          break;
        case 6:
          message.value = {
            $case: "valueDouble",
            valueDouble: Property_ValueDouble.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Property {
    const message = { ...baseProperty } as Property;
    if (object.type !== undefined && object.type !== null) {
      message.type = propertyTypeFromJSON(object.type);
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    }
    if (object.valueString !== undefined && object.valueString !== null) {
      message.value = {
        $case: "valueString",
        valueString: Property_ValueString.fromJSON(object.valueString),
      };
    }
    if (object.valueBool !== undefined && object.valueBool !== null) {
      message.value = {
        $case: "valueBool",
        valueBool: Property_ValueBool.fromJSON(object.valueBool),
      };
    }
    if (object.valueUint32 !== undefined && object.valueUint32 !== null) {
      message.value = {
        $case: "valueUint32",
        valueUint32: Property_ValueUint32.fromJSON(object.valueUint32),
      };
    }
    if (object.valueDouble !== undefined && object.valueDouble !== null) {
      message.value = {
        $case: "valueDouble",
        valueDouble: Property_ValueDouble.fromJSON(object.valueDouble),
      };
    }
    return message;
  },

  toJSON(message: Property): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = propertyTypeToJSON(message.type));
    message.key !== undefined && (obj.key = message.key);
    message.value?.$case === "valueString" &&
      (obj.valueString = message.value?.valueString
        ? Property_ValueString.toJSON(message.value?.valueString)
        : undefined);
    message.value?.$case === "valueBool" &&
      (obj.valueBool = message.value?.valueBool
        ? Property_ValueBool.toJSON(message.value?.valueBool)
        : undefined);
    message.value?.$case === "valueUint32" &&
      (obj.valueUint32 = message.value?.valueUint32
        ? Property_ValueUint32.toJSON(message.value?.valueUint32)
        : undefined);
    message.value?.$case === "valueDouble" &&
      (obj.valueDouble = message.value?.valueDouble
        ? Property_ValueDouble.toJSON(message.value?.valueDouble)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Property>): Property {
    const message = { ...baseProperty } as Property;
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
        valueString: Property_ValueString.fromPartial(object.value.valueString),
      };
    }
    if (
      object.value?.$case === "valueBool" &&
      object.value?.valueBool !== undefined &&
      object.value?.valueBool !== null
    ) {
      message.value = {
        $case: "valueBool",
        valueBool: Property_ValueBool.fromPartial(object.value.valueBool),
      };
    }
    if (
      object.value?.$case === "valueUint32" &&
      object.value?.valueUint32 !== undefined &&
      object.value?.valueUint32 !== null
    ) {
      message.value = {
        $case: "valueUint32",
        valueUint32: Property_ValueUint32.fromPartial(object.value.valueUint32),
      };
    }
    if (
      object.value?.$case === "valueDouble" &&
      object.value?.valueDouble !== undefined &&
      object.value?.valueDouble !== null
    ) {
      message.value = {
        $case: "valueDouble",
        valueDouble: Property_ValueDouble.fromPartial(object.value.valueDouble),
      };
    }
    return message;
  },
};

const baseProperty_ValueString: object = { value: "" };

export const Property_ValueString = {
  encode(
    message: Property_ValueString,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Property_ValueString {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProperty_ValueString } as Property_ValueString;
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

  fromJSON(object: any): Property_ValueString {
    const message = { ...baseProperty_ValueString } as Property_ValueString;
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    }
    return message;
  },

  toJSON(message: Property_ValueString): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<Property_ValueString>): Property_ValueString {
    const message = { ...baseProperty_ValueString } as Property_ValueString;
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
};

const baseProperty_ValueBool: object = { value: false };

export const Property_ValueBool = {
  encode(
    message: Property_ValueBool,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.value === true) {
      writer.uint32(8).bool(message.value);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Property_ValueBool {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProperty_ValueBool } as Property_ValueBool;
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

  fromJSON(object: any): Property_ValueBool {
    const message = { ...baseProperty_ValueBool } as Property_ValueBool;
    if (object.value !== undefined && object.value !== null) {
      message.value = Boolean(object.value);
    }
    return message;
  },

  toJSON(message: Property_ValueBool): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<Property_ValueBool>): Property_ValueBool {
    const message = { ...baseProperty_ValueBool } as Property_ValueBool;
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
};

const baseProperty_ValueUint32: object = { value: 0 };

export const Property_ValueUint32 = {
  encode(
    message: Property_ValueUint32,
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

  decode(input: Reader | Uint8Array, length?: number): Property_ValueUint32 {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProperty_ValueUint32 } as Property_ValueUint32;
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

  fromJSON(object: any): Property_ValueUint32 {
    const message = { ...baseProperty_ValueUint32 } as Property_ValueUint32;
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

  toJSON(message: Property_ValueUint32): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    message.min !== undefined && (obj.min = message.min);
    message.max !== undefined && (obj.max = message.max);
    return obj;
  },

  fromPartial(object: DeepPartial<Property_ValueUint32>): Property_ValueUint32 {
    const message = { ...baseProperty_ValueUint32 } as Property_ValueUint32;
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

const baseProperty_ValueDouble: object = { value: 0 };

export const Property_ValueDouble = {
  encode(
    message: Property_ValueDouble,
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

  decode(input: Reader | Uint8Array, length?: number): Property_ValueDouble {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProperty_ValueDouble } as Property_ValueDouble;
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

  fromJSON(object: any): Property_ValueDouble {
    const message = { ...baseProperty_ValueDouble } as Property_ValueDouble;
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

  toJSON(message: Property_ValueDouble): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    message.min !== undefined && (obj.min = message.min);
    message.max !== undefined && (obj.max = message.max);
    return obj;
  },

  fromPartial(object: DeepPartial<Property_ValueDouble>): Property_ValueDouble {
    const message = { ...baseProperty_ValueDouble } as Property_ValueDouble;
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

const baseStreamInfo: object = {
  platform: 0,
  streamEndpoints: 0,
  streamEncodings: 0,
};

export const StreamInfo = {
  encode(message: StreamInfo, writer: Writer = Writer.create()): Writer {
    if (message.platform !== 0) {
      writer.uint32(8).int32(message.platform);
    }
    writer.uint32(18).fork();
    for (const v of message.streamEndpoints) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(26).fork();
    for (const v of message.streamEncodings) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): StreamInfo {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStreamInfo } as StreamInfo;
    message.streamEndpoints = [];
    message.streamEncodings = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.platform = reader.int32() as any;
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.streamEndpoints.push(reader.int32() as any);
            }
          } else {
            message.streamEndpoints.push(reader.int32() as any);
          }
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.streamEncodings.push(reader.int32() as any);
            }
          } else {
            message.streamEncodings.push(reader.int32() as any);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StreamInfo {
    const message = { ...baseStreamInfo } as StreamInfo;
    message.streamEndpoints = [];
    message.streamEncodings = [];
    if (object.platform !== undefined && object.platform !== null) {
      message.platform = platformFromJSON(object.platform);
    }
    if (
      object.streamEndpoints !== undefined &&
      object.streamEndpoints !== null
    ) {
      for (const e of object.streamEndpoints) {
        message.streamEndpoints.push(streamEndpointFromJSON(e));
      }
    }
    if (
      object.streamEncodings !== undefined &&
      object.streamEncodings !== null
    ) {
      for (const e of object.streamEncodings) {
        message.streamEncodings.push(streamEncodingFromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: StreamInfo): unknown {
    const obj: any = {};
    message.platform !== undefined &&
      (obj.platform = platformToJSON(message.platform));
    if (message.streamEndpoints) {
      obj.streamEndpoints = message.streamEndpoints.map((e) =>
        streamEndpointToJSON(e)
      );
    } else {
      obj.streamEndpoints = [];
    }
    if (message.streamEncodings) {
      obj.streamEncodings = message.streamEncodings.map((e) =>
        streamEncodingToJSON(e)
      );
    } else {
      obj.streamEncodings = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<StreamInfo>): StreamInfo {
    const message = { ...baseStreamInfo } as StreamInfo;
    message.streamEndpoints = [];
    message.streamEncodings = [];
    if (object.platform !== undefined && object.platform !== null) {
      message.platform = object.platform;
    }
    if (
      object.streamEndpoints !== undefined &&
      object.streamEndpoints !== null
    ) {
      for (const e of object.streamEndpoints) {
        message.streamEndpoints.push(e);
      }
    }
    if (
      object.streamEncodings !== undefined &&
      object.streamEncodings !== null
    ) {
      for (const e of object.streamEncodings) {
        message.streamEncodings.push(e);
      }
    }
    return message;
  },
};

const baseStreamChange: object = {
  id: 0,
  command: 0,
  streamMedium: 0,
  streamDirection: 0,
  streamEndpoint: 0,
  streamEncoding: 0,
};

export const StreamChange = {
  encode(message: StreamChange, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.command !== 0) {
      writer.uint32(16).int32(message.command);
    }
    if (message.streamMedium !== 0) {
      writer.uint32(24).int32(message.streamMedium);
    }
    if (message.streamDirection !== 0) {
      writer.uint32(32).int32(message.streamDirection);
    }
    if (message.streamEndpoint !== 0) {
      writer.uint32(40).int32(message.streamEndpoint);
    }
    if (message.streamEncoding !== 0) {
      writer.uint32(48).int32(message.streamEncoding);
    }
    for (const v of message.property) {
      Property.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): StreamChange {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStreamChange } as StreamChange;
    message.property = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.command = reader.int32() as any;
          break;
        case 3:
          message.streamMedium = reader.int32() as any;
          break;
        case 4:
          message.streamDirection = reader.int32() as any;
          break;
        case 5:
          message.streamEndpoint = reader.int32() as any;
          break;
        case 6:
          message.streamEncoding = reader.int32() as any;
          break;
        case 7:
          message.property.push(Property.decode(reader, reader.uint32()));
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
    message.property = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    }
    if (object.command !== undefined && object.command !== null) {
      message.command = commandFromJSON(object.command);
    }
    if (object.streamMedium !== undefined && object.streamMedium !== null) {
      message.streamMedium = streamMediumFromJSON(object.streamMedium);
    }
    if (
      object.streamDirection !== undefined &&
      object.streamDirection !== null
    ) {
      message.streamDirection = streamDirectionFromJSON(object.streamDirection);
    }
    if (object.streamEndpoint !== undefined && object.streamEndpoint !== null) {
      message.streamEndpoint = streamEndpointFromJSON(object.streamEndpoint);
    }
    if (object.streamEncoding !== undefined && object.streamEncoding !== null) {
      message.streamEncoding = streamEncodingFromJSON(object.streamEncoding);
    }
    if (object.property !== undefined && object.property !== null) {
      for (const e of object.property) {
        message.property.push(Property.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: StreamChange): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.command !== undefined &&
      (obj.command = commandToJSON(message.command));
    message.streamMedium !== undefined &&
      (obj.streamMedium = streamMediumToJSON(message.streamMedium));
    message.streamDirection !== undefined &&
      (obj.streamDirection = streamDirectionToJSON(message.streamDirection));
    message.streamEndpoint !== undefined &&
      (obj.streamEndpoint = streamEndpointToJSON(message.streamEndpoint));
    message.streamEncoding !== undefined &&
      (obj.streamEncoding = streamEncodingToJSON(message.streamEncoding));
    if (message.property) {
      obj.property = message.property.map((e) =>
        e ? Property.toJSON(e) : undefined
      );
    } else {
      obj.property = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<StreamChange>): StreamChange {
    const message = { ...baseStreamChange } as StreamChange;
    message.property = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.command !== undefined && object.command !== null) {
      message.command = object.command;
    }
    if (object.streamMedium !== undefined && object.streamMedium !== null) {
      message.streamMedium = object.streamMedium;
    }
    if (
      object.streamDirection !== undefined &&
      object.streamDirection !== null
    ) {
      message.streamDirection = object.streamDirection;
    }
    if (object.streamEndpoint !== undefined && object.streamEndpoint !== null) {
      message.streamEndpoint = object.streamEndpoint;
    }
    if (object.streamEncoding !== undefined && object.streamEncoding !== null) {
      message.streamEncoding = object.streamEncoding;
    }
    if (object.property !== undefined && object.property !== null) {
      for (const e of object.property) {
        message.property.push(Property.fromPartial(e));
      }
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
    if (message.message?.$case === "streamChange") {
      StreamChange.encode(
        message.message.streamChange,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.message?.$case === "streamData") {
      StreamData.encode(
        message.message.streamData,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.message?.$case === "streamInfo") {
      StreamInfo.encode(
        message.message.streamInfo,
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
            $case: "streamChange",
            streamChange: StreamChange.decode(reader, reader.uint32()),
          };
          break;
        case 3:
          message.message = {
            $case: "streamData",
            streamData: StreamData.decode(reader, reader.uint32()),
          };
          break;
        case 4:
          message.message = {
            $case: "streamInfo",
            streamInfo: StreamInfo.decode(reader, reader.uint32()),
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
    if (object.streamChange !== undefined && object.streamChange !== null) {
      message.message = {
        $case: "streamChange",
        streamChange: StreamChange.fromJSON(object.streamChange),
      };
    }
    if (object.streamData !== undefined && object.streamData !== null) {
      message.message = {
        $case: "streamData",
        streamData: StreamData.fromJSON(object.streamData),
      };
    }
    if (object.streamInfo !== undefined && object.streamInfo !== null) {
      message.message = {
        $case: "streamInfo",
        streamInfo: StreamInfo.fromJSON(object.streamInfo),
      };
    }
    return message;
  },

  toJSON(message: Message): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = messageTypeToJSON(message.type));
    message.message?.$case === "streamChange" &&
      (obj.streamChange = message.message?.streamChange
        ? StreamChange.toJSON(message.message?.streamChange)
        : undefined);
    message.message?.$case === "streamData" &&
      (obj.streamData = message.message?.streamData
        ? StreamData.toJSON(message.message?.streamData)
        : undefined);
    message.message?.$case === "streamInfo" &&
      (obj.streamInfo = message.message?.streamInfo
        ? StreamInfo.toJSON(message.message?.streamInfo)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Message>): Message {
    const message = { ...baseMessage } as Message;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (
      object.message?.$case === "streamChange" &&
      object.message?.streamChange !== undefined &&
      object.message?.streamChange !== null
    ) {
      message.message = {
        $case: "streamChange",
        streamChange: StreamChange.fromPartial(object.message.streamChange),
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
    if (
      object.message?.$case === "streamInfo" &&
      object.message?.streamInfo !== undefined &&
      object.message?.streamInfo !== null
    ) {
      message.message = {
        $case: "streamInfo",
        streamInfo: StreamInfo.fromPartial(object.message.streamInfo),
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
