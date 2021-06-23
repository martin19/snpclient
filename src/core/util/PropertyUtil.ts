import {Property, PropertyType} from "../network/proto/snappyv1";
import {SnpProperty, SnpPropertyType} from "../stream/SnpProperty";

export class PropertyUtil {
  static fromProtocolProperty(prop:Property):SnpProperty {
    let type:SnpPropertyType = SnpPropertyType.PROPERTY_TYPE_BOOL;
    let value:boolean | number | string | null = null;
    switch(prop.value.$case) {
      case "valueBool" : {
        type = SnpPropertyType.PROPERTY_TYPE_BOOL;
        value = prop.value.valueBool.value;
      } break;
      case "valueString" : {
        type = SnpPropertyType.PROPERTY_TYPE_STRING;
        value = prop.value.valueString.value;
      } break;
      case "valueDouble" : {
        type = SnpPropertyType.PROPERTY_TYPE_DOUBLE;
        value = prop.value.valueDouble.value;
      } break;
      case "valueUint32" : {
        type = SnpPropertyType.PROPERTY_TYPE_UINT32;
        value = prop.value.valueUint32.value;
      } break;
    }
    const p = new SnpProperty(prop.key, type);
    p.value = value;
    return p;
  }

  static toProtocolProperty(prop:SnpProperty):Property {
    switch(prop.type) {
      case SnpPropertyType.PROPERTY_TYPE_BOOL: {
        return {
          key : prop.name,
          type : PropertyType.PROPERTY_TYPE_BOOL,
          value : { $case : "valueBool", valueBool : { value : prop.value as boolean } }
        }
      }
      case SnpPropertyType.PROPERTY_TYPE_STRING: {
        return {
          key : prop.name,
          type : PropertyType.PROPERTY_TYPE_STRING,
          value : { $case : "valueString", valueString : { value : prop.value as string } }
        }
      }
      case SnpPropertyType.PROPERTY_TYPE_DOUBLE: {
        return {
          key : prop.name,
          type : PropertyType.PROPERTY_TYPE_DOUBLE,
          value : { $case : "valueDouble", valueDouble : { value : prop.value as number } }
        }
      }
      case SnpPropertyType.PROPERTY_TYPE_UINT32: {
        return {
          key : prop.name,
          type : PropertyType.PROPERTY_TYPE_UINT32,
          value : { $case : "valueUint32", valueUint32 : { value : prop.value as number } }
        }
      }
    }
  }

  static protocolPropertyArrayToSnpPropertyMap(properties:Property[]):Map<string, SnpProperty> {
      let map:Map<string, SnpProperty> = new Map();
      for(let i = 0; i < properties.length; i++) {
        map.set(properties[i].key, PropertyUtil.fromProtocolProperty(properties[i]));
      }
      return map;
  }
}