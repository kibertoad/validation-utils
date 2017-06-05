const expect = require('chai').expect;
const validationHelper = require('../../src/helpers/validation.helper');

describe('ValidationHelper', () => {

  it('throw error on undefined properties', () => {
    expect(function () {
      validationHelper.withProperties({a: 'a', b: 'b', c: 'c'},
        ['b', 'd', 'e'])
    }).to.throw(/Validated object doesn\'t have properties: d,e/);
  });

  it('do not throw error on defined properties', () => {
    validationHelper.withProperties({a: 'a', b: 'b', c: 'c'},
      ['a', 'b', 'c']);

    validationHelper.withProperties({a: 'a', b: 'b', c: 'c'},
      ['b']);

    validationHelper.withProperties({a: 'a', b: 'b', c: 'c'},
      []);

    validationHelper.withProperties({a: 'a', b: 'b', c: 'c'},
      null);
  });

  it('throw error on not truthy values', () => {
    expect(function () {
      validationHelper.truthy(false)
    }).to.throw(/Validated object is not truthy/);

    expect(function () {
      validationHelper.truthy(undefined)
    }).to.throw(/Validated object is not truthy/);

    expect(function () {
      validationHelper.truthy(NaN)
    }).to.throw(/Validated object is not truthy/);

    expect(function () {
      validationHelper.truthy(0)
    }).to.throw(/Validated object is not truthy/);

    expect(function () {
      validationHelper.truthy('')
    }).to.throw(/Validated object is not truthy/);
  });

  it('do not throw error on truthy values', () => {
    validationHelper.truthy(true);
    validationHelper.truthy({});
    validationHelper.truthy(1);
    validationHelper.truthy(-1);
    validationHelper.truthy(' ');
    validationHelper.truthy('a');
  });

  it('throw error on not falsy values', () => {
    expect(function () {
      validationHelper.falsy(true)
    }).to.throw(/Validated object is not falsy/);

    expect(function () {
      validationHelper.falsy({})
    }).to.throw(/Validated object is not falsy/);

    expect(function () {
      validationHelper.falsy(1)
    }).to.throw(/Validated object is not falsy/);

    expect(function () {
      validationHelper.falsy(-1)
    }).to.throw(/Validated object is not falsy/);

    expect(function () {
      validationHelper.falsy(' ')
    }).to.throw(/Validated object is not falsy/);

    expect(function () {
      validationHelper.falsy('a')
    }).to.throw(/Validated object is not falsy/);
  });

  it('do not throw error on falsy values', () => {
    validationHelper.falsy(false);
    validationHelper.falsy(undefined);
    validationHelper.falsy(NaN);
    validationHelper.falsy(0);
    validationHelper.falsy('');
  });

  it('throw error on not True values', () => {
    expect(function () {
      validationHelper.booleanTrue(false)
    }).to.throw(/Validated object is not True/);

    expect(function () {
      validationHelper.booleanTrue({})
    }).to.throw(/Validated object is not True/);

    expect(function () {
      validationHelper.booleanTrue(1)
    }).to.throw(/Validated object is not True/);
  });

  it('do not throw error on True values', () => {
    validationHelper.booleanTrue(true);
  });

  it('throw error on not non-strict boolean values', () => {
    expect(function () {
      validationHelper.booleanNonStrict('0')
    }).to.throw(/Validated object is not Boolean/);

    expect(function () {
      validationHelper.booleanNonStrict({})
    }).to.throw(/Validated object is not Boolean/);

    expect(function () {
      validationHelper.booleanNonStrict('tru')
    }).to.throw(/Validated object is not Boolean/);
  });

  it('do not throw error on non-strict boolean values', () => {
    validationHelper.booleanNonStrict(true);
    validationHelper.booleanNonStrict(false);
    validationHelper.booleanNonStrict('true');
    validationHelper.booleanNonStrict('TRUE');
    validationHelper.booleanNonStrict('false');
    validationHelper.booleanNonStrict('false');
  });

  it('throw error on not False values', () => {
    expect(function () {
      validationHelper.booleanFalse(true)
    }).to.throw(/Validated object is not False/);

    expect(function () {
      validationHelper.booleanFalse(undefined)
    }).to.throw(/Validated object is not False/);

    expect(function () {
      validationHelper.booleanFalse(null)
    }).to.throw(/Validated object is not False/);

    expect(function () {
      validationHelper.booleanFalse(NaN)
    }).to.throw(/Validated object is not False/);

    expect(function () {
      validationHelper.booleanFalse(0)
    }).to.throw(/Validated object is not False/);

    expect(function () {
      validationHelper.booleanFalse(1)
    }).to.throw(/Validated object is not False/);
  });

  it('do not throw error on False values', () => {
    validationHelper.booleanFalse(false);
  });

  it('throw error on not a Number value', () => {
    expect(function () {
      validationHelper.number({})
    }).to.throw(/Validated object is not a number/);

    expect(function () {
      validationHelper.number(undefined)
    }).to.throw(/Validated object is not a number/);

    expect(function () {
      validationHelper.number(NaN)
    }).to.throw(/Validated object is not a number/);

    expect(function () {
      validationHelper.number(null)
    }).to.throw(/Validated object is not a number/);

    expect(function () {
      validationHelper.number('1')
    }).to.throw(/Validated object is not a number/);
  });

  it('do not throw error on Number value', () => {
    validationHelper.number(-1);
    validationHelper.number(0);
    validationHelper.number(1);
    validationHelper.number(1.5);
  });

  it('throw error on not a positive number value', () => {
    expect(function () {
      validationHelper.positiveNumber(0)
    }).to.throw(/Validated number is not positive/);

    expect(function () {
      validationHelper.positiveNumber(-1)
    }).to.throw(/Validated number is not positive/);

    expect(function () {
      validationHelper.positiveNumber(NaN)
    }).to.throw(/Validated object is not a number/);
  });

  it('do not throw error on a positive number value', () => {
    validationHelper.positiveNumber(0.1);
    validationHelper.positiveNumber(1);
    validationHelper.positiveNumber(1.5);
  });

  it('throw error on null or undefined', () => {
    expect(function () {
      validationHelper.notNil(null);
    }).to.throw(/Validated object is null or undefined/);

    expect(function () {
      validationHelper.notNil(undefined);
    }).to.throw(/Validated object is null or undefined/);
  });

  it('do not throw error on not a null or undefined', () => {
    validationHelper.notNil(1);
    validationHelper.notNil(0);
    validationHelper.notNil(-1);
    validationHelper.notNil({});
    validationHelper.notNil('');
    validationHelper.notNil('a');
    validationHelper.notNil(true);
    validationHelper.notNil(false);
  });

  it('throw error on empty object', () => {
    expect(function () {
      validationHelper.notEmpty([])
    }).to.throw(/Validated object is empty/);

    expect(function () {
      validationHelper.notEmpty('')
    }).to.throw(/Validated object is empty/);

    expect(function () {
      validationHelper.notEmpty(new Set())
    }).to.throw(/Validated object is empty/);

    expect(function () {
      validationHelper.notEmpty(null)
    }).to.throw(/Validated object is empty/);

    expect(function () {
      validationHelper.notEmpty(undefined)
    }).to.throw(/Validated object is empty/);

    expect(function () {
      validationHelper.notEmpty(1)
    }).to.throw(/Validated object is empty/);

    expect(function () {
      validationHelper.notEmpty({})
    }).to.throw(/Validated object is empty/);
  });

  it('do not throw error on a not empty object', () => {
    validationHelper.notEmpty({a: ''});
    validationHelper.notEmpty(' ');
    validationHelper.notEmpty('a');
    validationHelper.notEmpty([{}]);
  });

  it('throw error on not a string', () => {
    expect(function () {
      validationHelper.string({});
    }).to.throw(/Validated object is not a string/);

    expect(function () {
      validationHelper.string(1);
    }).to.throw(/Validated object is not a string/);

    expect(function () {
      validationHelper.string(true);
    }).to.throw(/Validated object is not a string/);

    expect(function () {
      validationHelper.string([]);
    }).to.throw(/Validated object is not a string/);

    expect(function () {
      validationHelper.string(null);
    }).to.throw(/Validated object is not a string/);

    expect(function () {
      validationHelper.string(undefined);
    }).to.throw(/Validated object is not a string/);
  });

  it('do not throw error on a string', () => {
    validationHelper.string('');
    validationHelper.string(' ');
    validationHelper.string('a');
    validationHelper.string('1');
  });

});
