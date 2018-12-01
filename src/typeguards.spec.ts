/* Copyright 2018 Reach Rocket UG (haftungsbeschränkt) */

// tslint:disable:no-magic-numbers

import { isBoolean, isFalsy, isFunction, isNull, isNumber, isObject, isString } from './typeguards';

// tslint:disable-next-line:no-implicit-dependencies
import { expect } from 'chai';
// tslint:disable-next-line:no-implicit-dependencies
import 'mocha';

describe('Typeguards', () => {
	it('isBoolean should detect true and false as boolean', () => {
		expect(isBoolean(true)).to.be.equal(true);
		expect(isBoolean(false)).to.be.equal(true);

		expect(isBoolean(null)).to.be.equal(false);
		expect(isBoolean(undefined)).to.be.equal(false);
		expect(isBoolean({})).to.be.equal(false);

		expect(isBoolean(0)).to.be.equal(false);
		expect(isBoolean(1)).to.be.equal(false);

		expect(isBoolean(Number.NaN)).to.be.equal(false);

		expect(isBoolean('')).to.be.equal(false);
		expect(isBoolean('true')).to.be.equal(false);
		expect(isBoolean('false')).to.be.equal(false);
	});

	it('isNull should detect null', () => {
		expect(isNull(true)).to.be.equal(false);
		expect(isNull(false)).to.be.equal(false);

		expect(isNull(null)).to.be.equal(true);
		expect(isNull(undefined)).to.be.equal(false);
		expect(isNull({})).to.be.equal(false);

		expect(isNull(0)).to.be.equal(false);
		expect(isNull(1)).to.be.equal(false);

		expect(isNull(Number.NaN)).to.be.equal(false);

		expect(isNull('')).to.be.equal(false);
		expect(isNull('true')).to.be.equal(false);
		expect(isNull('false')).to.be.equal(false);
	});

	it('isNumber should detect Numbers', () => {
		expect(isNumber(true)).to.be.equal(false);
		expect(isNumber(false)).to.be.equal(false);

		expect(isNumber(null)).to.be.equal(false);
		expect(isNumber(undefined)).to.be.equal(false);
		expect(isNumber({})).to.be.equal(false);

		expect(isNumber(0)).to.be.equal(true);
		expect(isNumber(1)).to.be.equal(true);
		expect(isNumber(Number.POSITIVE_INFINITY)).to.be.equal(true);
		expect(isNumber(1337)).to.be.equal(true);

		// TODO: check if this should be true or false.
		// expect(isNumber(Number.NaN)).to.be.equal(false);

		expect(isNumber('')).to.be.equal(false);
		expect(isNumber('true')).to.be.equal(false);
		expect(isNumber('false')).to.be.equal(false);
	});

	it('isObject should detect Objects but not null', () => {
		expect(isObject(true)).to.be.equal(false);
		expect(isObject(false)).to.be.equal(false);

		expect(isObject(null)).to.be.equal(false);
		expect(isObject(undefined)).to.be.equal(false);

		expect(isObject({})).to.be.equal(true);
		expect(isObject(new Object())).to.be.equal(true);

		expect(isObject(0)).to.be.equal(false);
		expect(isObject(1)).to.be.equal(false);

		expect(isObject(Number.NaN)).to.be.equal(false);

		expect(isObject('')).to.be.equal(false);
		expect(isObject('true')).to.be.equal(false);
		expect(isObject('false')).to.be.equal(false);
	});

	it('isString should detect any Strings', () => {
		expect(isString(true)).to.be.equal(false);
		expect(isString(false)).to.be.equal(false);

		expect(isString(null)).to.be.equal(false);
		expect(isString(undefined)).to.be.equal(false);

		expect(isString({})).to.be.equal(false);

		expect(isString(0)).to.be.equal(false);
		expect(isString(1)).to.be.equal(false);

		expect(isString(Number.NaN)).to.be.equal(false);

		expect(isString('')).to.be.equal(true);
		expect(isString('true')).to.be.equal(true);
		expect(isString('false')).to.be.equal(true);
	});

	it('isFalsy should return true for null, undefined or false. Everything Else should be not Falsy.', () => {
		expect(isFalsy(true)).to.be.equal(false);
		expect(isFalsy(false)).to.be.equal(true);

		expect(isFalsy(null)).to.be.equal(true);
		expect(isFalsy(undefined)).to.be.equal(true);

		expect(isFalsy({})).to.be.equal(false);

		expect(isFalsy(0)).to.be.equal(false);
		expect(isFalsy(1)).to.be.equal(false);

		expect(isFalsy(Number.NaN)).to.be.equal(false);

		expect(isFalsy('')).to.be.equal(false);
		expect(isFalsy('true')).to.be.equal(false);
		expect(isFalsy('false')).to.be.equal(false);
	});

	it('isFunction should return true for functions, false for everything else', () => {
		expect(isFunction(true)).to.be.equal(false);
		expect(isFunction(false)).to.be.equal(false);

		expect(isFunction(null)).to.be.equal(false);
		expect(isFunction(undefined)).to.be.equal(false);

		expect(isFunction({})).to.be.equal(false);

		expect(isFunction(0)).to.be.equal(false);
		expect(isFunction(1)).to.be.equal(false);

		expect(isFunction(Number.NaN)).to.be.equal(false);

		expect(isFunction('')).to.be.equal(false);
		expect(isFunction('true')).to.be.equal(false);
		expect(isFunction('false')).to.be.equal(false);

		expect(isFunction(() => null)).to.be.equal(true);
		expect(
			isFunction(
				/* istanbul ignore next */ function():false {
					return false;
				},
			),
		).to.be.equal(true);
		expect(isFunction(isBoolean)).to.be.equal(true);
		expect(isFunction(isNull)).to.be.equal(true);
	});
});
