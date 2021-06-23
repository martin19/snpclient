import {Property, PropertyType} from "../network/proto/snappyv1";

export enum SnpPropertyType {
  PROPERTY_TYPE_STRING = 0,
  PROPERTY_TYPE_BOOL = 1,
  PROPERTY_TYPE_UINT32 = 2,
  PROPERTY_TYPE_DOUBLE = 3,
}

export class SnpProperty {
  name : string;
  type : SnpPropertyType;

  private _value:boolean|number|string|null;

  constructor(name:string, type:SnpPropertyType) {
    this.name = name;
    this.type = type;
    this._value = null;
  }

  get value(): boolean | number | string | null {
    return this._value;
  }

  set value(value: boolean | number | string | null) {
    this._value = value;
  }
}