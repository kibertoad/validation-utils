const expect = require('chai').expect;
const ValidationError = require('../lib/ValidationError');
const validationHelper = require('../lib/validation.helper');

describe('ValidationHelper', () => {
  describe('withProperties', () => {
    it('throw error on undefined properties', () => {
      expect(() => {
        validationHelper.withProperties({ a: 'a', b: 'b', c: 'c' }, ['b', 'd', 'e']);
      }).to.throw(/Validated object doesn't have properties: d,e/);
    });

    it('do not throw error on defined properties', () => {
      validationHelper.withProperties({ a: 'a', b: 'b', c: 'c' }, ['a', 'b', 'c']);

      validationHelper.withProperties({ a: 'a', b: 'b', c: 'c' }, ['b']);

      validationHelper.withProperties({ a: 'a', b: 'b', c: 'c' }, []);

      validationHelper.withProperties({ a: 'a', b: 'b', c: 'c' }, null);
    });
  });

  describe('truthy', () => {
    it('throw error on not truthy values', () => {
      expect(() => {
        validationHelper.truthy(false);
      }).to.throw(/Validated object is not truthy/);

      expect(() => {
        validationHelper.truthy(undefined);
      }).to.throw(/Validated object is not truthy/);

      expect(() => {
        validationHelper.truthy(NaN);
      }).to.throw(/Validated object is not truthy/);

      expect(() => {
        validationHelper.truthy(0);
      }).to.throw(/Validated object is not truthy/);

      expect(() => {
        validationHelper.truthy('');
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
  });

  describe('falsy', () => {
    it('throw error on not falsy values', () => {
      expect(() => {
        validationHelper.falsy(true);
      }).to.throw(/Validated object is not falsy/);

      expect(() => {
        validationHelper.falsy({});
      }).to.throw(/Validated object is not falsy/);

      expect(() => {
        validationHelper.falsy(1);
      }).to.throw(/Validated object is not falsy/);

      expect(() => {
        validationHelper.falsy(-1);
      }).to.throw(/Validated object is not falsy/);

      expect(() => {
        validationHelper.falsy(' ');
      }).to.throw(/Validated object is not falsy/);

      expect(() => {
        validationHelper.falsy('a');
      }).to.throw(/Validated object is not falsy/);
    });

    it('do not throw error on falsy values', () => {
      validationHelper.falsy(false);
      validationHelper.falsy(undefined);
      validationHelper.falsy(NaN);
      validationHelper.falsy(0);
      validationHelper.falsy('');
    });
  });

  describe('booleanTrue', () => {
    it('throw error on not True values', () => {
      expect(() => {
        validationHelper.booleanTrue(false);
      }).to.throw(/Validated object is not True/);

      expect(() => {
        validationHelper.booleanTrue({});
      }).to.throw(/Validated object is not True/);

      expect(() => {
        validationHelper.booleanTrue(1);
      }).to.throw(/Validated object is not True/);
    });

    it('do not throw error on True values', () => {
      validationHelper.booleanTrue(true);
    });
  });

  describe('booleanNonStrict', () => {
    it('throw error on not non-strict boolean values', () => {
      expect(() => {
        validationHelper.booleanNonStrict('0');
      }).to.throw(/Validated object is not Boolean/);

      expect(() => {
        validationHelper.booleanNonStrict({});
      }).to.throw(/Validated object is not Boolean/);

      expect(() => {
        validationHelper.booleanNonStrict('tru');
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
  });

  describe('booleanFalse', () => {
    it('throw error on not False values', () => {
      expect(() => {
        validationHelper.booleanFalse(true);
      }).to.throw(/Validated object is not False/);

      expect(() => {
        validationHelper.booleanFalse(undefined);
      }).to.throw(/Validated object is not False/);

      expect(() => {
        validationHelper.booleanFalse(null);
      }).to.throw(/Validated object is not False/);

      expect(() => {
        validationHelper.booleanFalse(NaN);
      }).to.throw(/Validated object is not False/);

      expect(() => {
        validationHelper.booleanFalse(0);
      }).to.throw(/Validated object is not False/);

      expect(() => {
        validationHelper.booleanFalse(1);
      }).to.throw(/Validated object is not False/);
    });

    it('do not throw error on False values', () => {
      validationHelper.booleanFalse(false);
    });
  });

  describe('number', () => {
    it('throw error on not a Number value', () => {
      expect(() => {
        validationHelper.number({});
      }).to.throw(/Validated object is not a number/);

      expect(() => {
        validationHelper.number(undefined);
      }).to.throw(/Validated object is not a number/);

      expect(() => {
        validationHelper.number(NaN);
      }).to.throw(/Validated object is not a number/);

      expect(() => {
        validationHelper.number(null);
      }).to.throw(/Validated object is not a number/);

      expect(() => {
        validationHelper.number('1');
      }).to.throw(/Validated object is not a number/);
    });

    it('do not throw error on Number value', () => {
      validationHelper.number(-1);
      validationHelper.number(0);
      validationHelper.number(1);
      validationHelper.number(1.5);
    });
  });

  describe('positiveNumber', () => {
    it('throw error on not a positive number value', () => {
      expect(() => {
        validationHelper.positiveNumber(0);
      }).to.throw(/Validated number is not positive/);

      expect(() => {
        validationHelper.positiveNumber(-1);
      }).to.throw(/Validated number is not positive/);

      expect(() => {
        validationHelper.positiveNumber(NaN);
      }).to.throw(/Validated object is not a number/);
    });

    it('do not throw error on a positive number value', () => {
      validationHelper.positiveNumber(0.1);
      validationHelper.positiveNumber(1);
      validationHelper.positiveNumber(1.5);
    });
  });

  describe('negativeNumber', () => {
    it('throw error on not a negative number value', () => {
      expect(() => {
        validationHelper.negativeNumber(0);
      }).to.throw(/Validated number is not negative/);

      expect(() => {
        validationHelper.negativeNumber(1);
      }).to.throw(/Validated number is not negative/);

      expect(() => {
        validationHelper.negativeNumber(NaN);
      }).to.throw(/Validated object is not a number/);
    });

    it('do not throw error on a negative number value', () => {
      validationHelper.negativeNumber(-0.1);
      validationHelper.negativeNumber(-1);
      validationHelper.negativeNumber(-1.5);
    });
  });

  describe('notNil', () => {
    it('throw error on null or undefined', () => {
      expect(() => {
        validationHelper.notNil(null);
      }).to.throw(/Validated object is null or undefined/);

      expect(() => {
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
  });

  describe('notEmpty', () => {
    it('throw error on empty object', () => {
      expect(() => {
        validationHelper.notEmpty([]);
      }).to.throw(/Validated object is empty/);

      expect(() => {
        validationHelper.notEmpty('');
      }).to.throw(/Validated object is empty/);

      expect(() => {
        validationHelper.notEmpty(new Set());
      }).to.throw(/Validated object is empty/);

      expect(() => {
        validationHelper.notEmpty(null);
      }).to.throw(/Validated object is empty/);

      expect(() => {
        validationHelper.notEmpty(undefined);
      }).to.throw(/Validated object is empty/);

      expect(() => {
        validationHelper.notEmpty(1);
      }).to.throw(/Validated object is empty/);

      expect(() => {
        validationHelper.notEmpty({});
      }).to.throw(/Validated object is empty/);
    });

    it('do not throw error on a not empty object', () => {
      validationHelper.notEmpty({ a: '' });
      validationHelper.notEmpty(' ');
      validationHelper.notEmpty('a');
      validationHelper.notEmpty([{}]);
    });
  });

  describe('string', () => {
    it('throw error on not a string', () => {
      expect(() => {
        validationHelper.string({});
      }).to.throw(/Validated object is not a string/);

      expect(() => {
        validationHelper.string(1);
      }).to.throw(/Validated object is not a string/);

      expect(() => {
        validationHelper.string(true);
      }).to.throw(/Validated object is not a string/);

      expect(() => {
        validationHelper.string([]);
      }).to.throw(/Validated object is not a string/);

      expect(() => {
        validationHelper.string(null);
      }).to.throw(/Validated object is not a string/);

      expect(() => {
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

  describe('object', () => {
    it('throw error on not an object', () => {
      expect(() => {
        validationHelper.object_('s');
      }).to.throw(/Validated object is not an object/);

      expect(() => {
        validationHelper.object_(1);
      }).to.throw(/Validated object is not an object/);

      expect(() => {
        validationHelper.object_(true);
      }).to.throw(/Validated object is not an object/);

      expect(() => {
        validationHelper.object_(null);
      }).to.throw(/Validated object is not an object/);

      expect(() => {
        validationHelper.object_(undefined);
      }).to.throw(/Validated object is not an object/);
    });

    it('do not throw error on an object', () => {
      validationHelper.object_({});
      validationHelper.object_({ a: 'a' });
    });
  });

  describe('inheritsFrom', () => {
    it('throw error on not an inheritor of a class', () => {
      class X {}

      class X2 extends X {}

      class Y {}

      expect(() => {
        validationHelper.inheritsFrom(X, X2);
      }).to.throw(/Validated class does not inherit from X2/);

      expect(() => {
        validationHelper.inheritsFrom(X, Y);
      }).to.throw(/Validated class does not inherit from Y/);

      expect(() => {
        validationHelper.inheritsFrom(Object, Y);
      }).to.throw(/Validated class does not inherit from Y/);

      expect(() => {
        validationHelper.inheritsFrom(null, Y);
      }).to.throw(/Validated class does not inherit from Y/);
    });

    it('do not throw error on inheritor of a class', () => {
      class X {}

      class X2 extends X {}

      validationHelper.inheritsFrom(X, X);
      validationHelper.inheritsFrom(X2, X2);
      validationHelper.inheritsFrom(X2, X);
    });
  });

  describe('instanceOf', () => {
    it('throw error on not an instance of a class', () => {
      class X {}

      class X2 extends X {}

      class Y {}

      expect(() => {
        validationHelper.instanceOf(new X(), X2);
      }).to.throw(/Validated object is not an instance of X2/);

      expect(() => {
        validationHelper.instanceOf(new X(), Y);
      }).to.throw(/Validated object is not an instance of Y/);

      expect(() => {
        validationHelper.instanceOf({}, Y);
      }).to.throw(/Validated object is not an instance of Y/);

      expect(() => {
        validationHelper.instanceOf(null, Y);
      }).to.throw(/Validated object is not an instance of Y/);
    });

    it('do not throw error on an instance of a class', () => {
      class X {}

      class X2 extends X {}

      validationHelper.instanceOf(new X(), X);
      validationHelper.instanceOf(new X2(), X2);
      validationHelper.instanceOf(new X2(), X);
    });
  });

  describe('lessThan', () => {
    it('throw error on not less than', () => {
      expect(() => {
        validationHelper.lessThan(1, 1);
      }).to.throw(/Validated number 1 is not less than the threshold 1/);

      expect(() => {
        validationHelper.lessThan(2, 1);
      }).to.throw(/Validated number 2 is not less than the threshold 1/);
    });

    it('do not throw error on less than', () => {
      validationHelper.lessThan(1, 2);
      validationHelper.lessThan(1, 1.1);
    });
  });

  describe('greaterThan', () => {
    it('throw error on not greater than', () => {
      expect(() => {
        validationHelper.greaterThan(1, 1);
      }).to.throw(/Validated number 1 is not greater than the threshold 1/);

      expect(() => {
        validationHelper.greaterThan(0, 1);
      }).to.throw(/Validated number 0 is not greater than the threshold 1/);
    });

    it('do not throw error on greater than', () => {
      validationHelper.greaterThan(2, 1);
      validationHelper.greaterThan(1.1, 1);
    });
  });

  describe('ValidationError', () => {
    it('throws ValidationError', () => {
      expect(() => {
        validationHelper.string(undefined);
      }).to.throw(ValidationError);
    });
  });
});
