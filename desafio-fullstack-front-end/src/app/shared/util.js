export class Util {
  static isObject(value) {
    return value && typeof value === 'object' && value.constructor === Object;
  }

  static isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }

  static isString(value) {
    return typeof value === 'string' || value instanceof String;
  }

  static isNumber(value) {
    return typeof value === 'number' && isFinite(value);
  }

  static isFunction(value) {
    return typeof value === 'function';
  }

  static isNull(value) {
    return value === null;
  }

  static isUndefined(value) {
    return typeof value === 'undefined';
  }

  static isBoolean(value) {
    return typeof value === 'boolean';
  }

  static isRegExp(value) {
    return value && typeof value === 'object' && value.constructor === RegExp;
  }

  static isError(value) {
    return value instanceof Error && typeof value.message !== 'undefined';
  }

  static isDate(value) {
    return value instanceof Date;
  }

  static isSymbol(value) {
    return typeof value === 'symbol';
  }
}
