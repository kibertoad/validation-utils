const expect = require('chai').expect;
const validationHelper = require('../../src/helpers/validation.helper');

describe('ValidationHelper', () => {

  it('throw error on undefined properties', () => {
    expect(function () {
      validationHelper.validateHasProperties({a: 'a', b: 'b', c: 'c'},
        ['b', 'd', 'e'])
    }).to.throw(/Validated object doesn\'t have properties: d,e/);
  });

  it('do not throw error on defined properties', () => {
    validationHelper.validateHasProperties({a: 'a', b: 'b', c: 'c'},
      ['a', 'b', 'c']);

    validationHelper.validateHasProperties({a: 'a', b: 'b', c: 'c'},
      ['b']);

    validationHelper.validateHasProperties({a: 'a', b: 'b', c: 'c'},
      []);

    validationHelper.validateHasProperties({a: 'a', b: 'b', c: 'c'},
      null);
  });

  it('throw error on not truthy values', () => {
    expect(function () {
      validationHelper.validateIsTruthy(false)
    }).to.throw(/Validated object is not truthy/);

    expect(function () {
      validationHelper.validateIsTruthy(undefined)
    }).to.throw(/Validated object is not truthy/);

    expect(function () {
      validationHelper.validateIsTruthy(NaN)
    }).to.throw(/Validated object is not truthy/);

    expect(function () {
      validationHelper.validateIsTruthy(0)
    }).to.throw(/Validated object is not truthy/);

    expect(function () {
      validationHelper.validateIsTruthy('')
    }).to.throw(/Validated object is not truthy/);
  });

  it('do not throw error on truthy values', () => {
    validationHelper.validateIsTruthy(true);
    validationHelper.validateIsTruthy({});
    validationHelper.validateIsTruthy(1);
    validationHelper.validateIsTruthy(-1);
    validationHelper.validateIsTruthy(' ');
    validationHelper.validateIsTruthy('a');
  });

  it('throw error on not falsy values', () => {
    expect(function () {
      validationHelper.validateIsFalsy(true)
    }).to.throw(/Validated object is not falsy/);

    expect(function () {
      validationHelper.validateIsFalsy({})
    }).to.throw(/Validated object is not falsy/);

    expect(function () {
      validationHelper.validateIsFalsy(1)
    }).to.throw(/Validated object is not falsy/);

    expect(function () {
      validationHelper.validateIsFalsy(-1)
    }).to.throw(/Validated object is not falsy/);

    expect(function () {
      validationHelper.validateIsFalsy(' ')
    }).to.throw(/Validated object is not falsy/);

    expect(function () {
      validationHelper.validateIsFalsy('a')
    }).to.throw(/Validated object is not falsy/);
  });

  it('do not throw error on falsy values', () => {
    validationHelper.validateIsFalsy(false);
    validationHelper.validateIsFalsy(undefined);
    validationHelper.validateIsFalsy(NaN);
    validationHelper.validateIsFalsy(0);
    validationHelper.validateIsFalsy('');
  });

  it('throw error on not True values', () => {
    expect(function () {
      validationHelper.validateIsTrue(false)
    }).to.throw(/Validated object is not True/);

    expect(function () {
      validationHelper.validateIsTrue({})
    }).to.throw(/Validated object is not True/);

    expect(function () {
      validationHelper.validateIsTrue(1)
    }).to.throw(/Validated object is not True/);
  });

  it('do not throw error on True values', () => {
    validationHelper.validateIsTrue(true);
  });

  it('throw error on not False values', () => {
    expect(function () {
      validationHelper.validateIsFalse(true)
    }).to.throw(/Validated object is not False/);

    expect(function () {
      validationHelper.validateIsFalse(undefined)
    }).to.throw(/Validated object is not False/);

    expect(function () {
      validationHelper.validateIsFalse(null)
    }).to.throw(/Validated object is not False/);

    expect(function () {
      validationHelper.validateIsFalse(NaN)
    }).to.throw(/Validated object is not False/);

    expect(function () {
      validationHelper.validateIsFalse(0)
    }).to.throw(/Validated object is not False/);

    expect(function () {
      validationHelper.validateIsFalse(1)
    }).to.throw(/Validated object is not False/);
  });

  it('do not throw error on False values', () => {
    validationHelper.validateIsFalse(false);
  });

  it('throw error on not a Number value', () => {
    expect(function () {
      validationHelper.validateIsNumber({})
    }).to.throw(/Validated object is not a number/);

    expect(function () {
      validationHelper.validateIsNumber(undefined)
    }).to.throw(/Validated object is not a number/);

    expect(function () {
      validationHelper.validateIsNumber(NaN)
    }).to.throw(/Validated object is not a number/);

    expect(function () {
      validationHelper.validateIsNumber(null)
    }).to.throw(/Validated object is not a number/);

    expect(function () {
      validationHelper.validateIsNumber('1')
    }).to.throw(/Validated object is not a number/);
  });

  it('do not throw error on Number value', () => {
    validationHelper.validateIsNumber(-1);
    validationHelper.validateIsNumber(0);
    validationHelper.validateIsNumber(1);
    validationHelper.validateIsNumber(1.5);
  });

  it('throw error on not a positive number value', () => {
    expect(function () {
      validationHelper.validateIsPositiveNumber(0)
    }).to.throw(/Validated number is not positive/);

    expect(function () {
      validationHelper.validateIsPositiveNumber(-1)
    }).to.throw(/Validated number is not positive/);

    expect(function () {
      validationHelper.validateIsPositiveNumber(NaN)
    }).to.throw(/Validated object is not a number/);
  });

  it('do not throw error on a positive number value', () => {
    validationHelper.validateIsPositiveNumber(0.1);
    validationHelper.validateIsPositiveNumber(1);
    validationHelper.validateIsPositiveNumber(1.5);
  });

  it('throw error on null or undefined', () => {
    expect(function () {
      validationHelper.validateIsNotNil(null);
    }).to.throw(/Validated object is null or undefined/);

    expect(function () {
      validationHelper.validateIsNotNil(undefined);
    }).to.throw(/Validated object is null or undefined/);
  });

  it('do not throw error on not a null or undefined', () => {
    validationHelper.validateIsNotNil(1);
    validationHelper.validateIsNotNil(0);
    validationHelper.validateIsNotNil(-1);
    validationHelper.validateIsNotNil({});
    validationHelper.validateIsNotNil('');
    validationHelper.validateIsNotNil('a');
    validationHelper.validateIsNotNil(true);
    validationHelper.validateIsNotNil(false);
  });

  it('throw error on empty object', () => {
    expect(function () {
      validationHelper.validateIsNotEmpty([])
    }).to.throw(/Validated object is empty/);

    expect(function () {
      validationHelper.validateIsNotEmpty('')
    }).to.throw(/Validated object is empty/);

    expect(function () {
      validationHelper.validateIsNotEmpty(new Set())
    }).to.throw(/Validated object is empty/);

    expect(function () {
      validationHelper.validateIsNotEmpty(null)
    }).to.throw(/Validated object is empty/);

    expect(function () {
      validationHelper.validateIsNotEmpty(undefined)
    }).to.throw(/Validated object is empty/);

    expect(function () {
      validationHelper.validateIsNotEmpty(1)
    }).to.throw(/Validated object is empty/);

    expect(function () {
      validationHelper.validateIsNotEmpty({})
    }).to.throw(/Validated object is empty/);
  });

  it('do not throw error on a not empty object', () => {
    validationHelper.validateIsNotEmpty({a: ''});
    validationHelper.validateIsNotEmpty(' ');
    validationHelper.validateIsNotEmpty('a');
    validationHelper.validateIsNotEmpty([{}]);
  });

});
