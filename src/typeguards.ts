/* Copyright 2018 Reach Rocket UG (haftungsbeschränkt) */

/**
 * Returns true if the passed argument is a boolean.
 * @param bool thing to test
 */
export function isBoolean(bool: any): bool is boolean {
	return typeof bool === 'boolean';
}

/**
 * Returns true if the Value is null, undefined or false. Warning: Will not consider 0 as falsy
 * @param value Value to test
 */
export function isFalsy(value: any): boolean {
	return isNull(value) || isUndefined(value) || (isBoolean(value) && value === false);
}

/**
 * Returns true if the passed argument is null.
 * @param nul thing to test
 */
export function isNull(nul: any): nul is null {
	return nul === null;
}

/**
 * Returns true if the passed argument is a number.
 * @param num thing to test
 */
export function isNumber(num: any): num is number {
	return typeof num === 'number';
}

/**
 * Returns true if the passed argument is an Object.
 * @param obj thing to test
 */
export function isObject(obj: any): obj is object {
	return !isNull(obj) && typeof obj === 'object';
}

/**
 * Returns true if the passed argument is a string.
 * @param str thing to test
 */
export function isString(str: any): str is string {
	return typeof str === 'string';
}

/**
 * Returns true if the passed argument is undefined.
 * @param thing thing to test
 */
export function isUndefined(thing: any): thing is undefined {
	return typeof thing === 'undefined';
}

/**
 * Returns true if the passed argument is a function.
 * @param fn thing to test
 */
// tslint:disable-next-line:ban-types
export function isFunction(fn: any): fn is Function {
	return !!(fn && fn.constructor && fn.call && fn.apply);
}
