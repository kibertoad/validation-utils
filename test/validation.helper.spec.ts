import ValidationError from '../lib/ValidationError'
import * as validationHelper from '../lib/validation.helper'

describe('ValidationHelper', () => {
  describe('withProperties', () => {
    it('throw error on undefined properties', () => {
      expect(() => {
        validationHelper.withProperties({ a: 'a', b: 'b', c: 'c' }, ['b', 'd', 'e'])
      }).toThrow(/Validated object doesn't have properties: d,e/)
    })

    it('do not throw error on defined properties', () => {
      validationHelper.withProperties({ a: 'a', b: 'b', c: 'c' }, ['a', 'b', 'c'])

      validationHelper.withProperties({ a: 'a', b: 'b', c: 'c' }, ['b'])

      validationHelper.withProperties({ a: 'a', b: 'b', c: 'c' }, [])
    })
  })

  describe('truthy', () => {
    it('throw error on not truthy values', () => {
      expect(() => {
        validationHelper.truthy(false)
      }).toThrow(/Validated object is not truthy/)

      expect(() => {
        validationHelper.truthy(undefined)
      }).toThrow(/Validated object is not truthy/)

      expect(() => {
        validationHelper.truthy(NaN)
      }).toThrow(/Validated object is not truthy/)

      expect(() => {
        validationHelper.truthy(0)
      }).toThrow(/Validated object is not truthy/)

      expect(() => {
        validationHelper.truthy('')
      }).toThrow(/Validated object is not truthy/)
    })

    it('do not throw error on truthy values', () => {
      validationHelper.truthy(true)
      validationHelper.truthy({})
      validationHelper.truthy(1)
      validationHelper.truthy(-1)
      validationHelper.truthy(' ')
      validationHelper.truthy('a')
    })
  })

  describe('falsy', () => {
    it('throw error on not falsy values', () => {
      expect(() => {
        validationHelper.falsy(true)
      }).toThrow(/Validated object is not falsy/)

      expect(() => {
        validationHelper.falsy({})
      }).toThrow(/Validated object is not falsy/)

      expect(() => {
        validationHelper.falsy(1)
      }).toThrow(/Validated object is not falsy/)

      expect(() => {
        validationHelper.falsy(-1)
      }).toThrow(/Validated object is not falsy/)

      expect(() => {
        validationHelper.falsy(' ')
      }).toThrow(/Validated object is not falsy/)

      expect(() => {
        validationHelper.falsy('a')
      }).toThrow(/Validated object is not falsy/)
    })

    it('do not throw error on falsy values', () => {
      validationHelper.falsy(false)
      validationHelper.falsy(undefined)
      validationHelper.falsy(NaN)
      validationHelper.falsy(0)
      validationHelper.falsy('')
    })
  })

  describe('booleanTrue', () => {
    it('throw error on not True values', () => {
      expect(() => {
        validationHelper.booleanTrue(false)
      }).toThrow(/Validated object is not True/)

      expect(() => {
        validationHelper.booleanTrue({})
      }).toThrow(/Validated object is not True/)

      expect(() => {
        validationHelper.booleanTrue(1)
      }).toThrow(/Validated object is not True/)
    })

    it('do not throw error on True values', () => {
      validationHelper.booleanTrue(true)
    })
  })

  describe('date', () => {
    it('throw error on not Date values', () => {
      expect(() => {
        validationHelper.date(false)
      }).toThrow(/Validated object is not Date/)

      expect(() => {
        validationHelper.date({})
      }).toThrow(/Validated object is not Date/)

      expect(() => {
        validationHelper.date(1)
      }).toThrow(/Validated object is not Date/)
    })

    it('do not throw error on Date values', () => {
      validationHelper.date(new Date())
    })
  })

  describe('booleanNonStrict', () => {
    it('throw error on not non-strict boolean values', () => {
      expect(() => {
        validationHelper.boolean_('0')
      }).toThrow(/Validated object is not Boolean/)

      expect(() => {
        validationHelper.boolean_({})
      }).toThrow(/Validated object is not Boolean/)

      expect(() => {
        validationHelper.boolean_('tru')
      }).toThrow(/Validated object is not Boolean/)

      expect(() => {
        validationHelper.boolean_('true')
      }).toThrow(/Validated object is not Boolean/)

      expect(() => {
        validationHelper.boolean_('TRUE')
      }).toThrow(/Validated object is not Boolean/)

      expect(() => {
        validationHelper.boolean_('false')
      }).toThrow(/Validated object is not Boolean/)

      expect(() => {
        validationHelper.boolean_('FALSE')
      }).toThrow(/Validated object is not Boolean/)
    })

    it('do not throw error on boolean values', () => {
      validationHelper.boolean_(true)
      validationHelper.boolean_(false)
    })
  })

  describe('booleanNonStrict', () => {
    it('throw error on not non-strict boolean values', () => {
      expect(() => {
        validationHelper.booleanNonStrict('0')
      }).toThrow(/Validated object is not Boolean/)

      expect(() => {
        validationHelper.booleanNonStrict({})
      }).toThrow(/Validated object is not Boolean/)

      expect(() => {
        validationHelper.booleanNonStrict('tru')
      }).toThrow(/Validated object is not Boolean/)
    })

    it('do not throw error on non-strict boolean values', () => {
      validationHelper.booleanNonStrict(true)
      validationHelper.booleanNonStrict(false)
      validationHelper.booleanNonStrict('true')
      validationHelper.booleanNonStrict('TRUE')
      validationHelper.booleanNonStrict('false')
      validationHelper.booleanNonStrict('FALSE')
    })
  })

  describe('booleanFalse', () => {
    it('throw error on not False values', () => {
      expect(() => {
        validationHelper.booleanFalse(true)
      }).toThrow(/Validated object is not False/)

      expect(() => {
        validationHelper.booleanFalse(undefined)
      }).toThrow(/Validated object is not False/)

      expect(() => {
        validationHelper.booleanFalse(null)
      }).toThrow(/Validated object is not False/)

      expect(() => {
        validationHelper.booleanFalse(NaN)
      }).toThrow(/Validated object is not False/)

      expect(() => {
        validationHelper.booleanFalse(0)
      }).toThrow(/Validated object is not False/)

      expect(() => {
        validationHelper.booleanFalse(1)
      }).toThrow(/Validated object is not False/)
    })

    it('do not throw error on False values', () => {
      validationHelper.booleanFalse(false)
    })
  })

  describe('number', () => {
    it('throw error on not a Number value', () => {
      expect(() => {
        validationHelper.number({})
      }).toThrow(/Validated object is not a number/)

      expect(() => {
        validationHelper.number(undefined)
      }).toThrow(/Validated object is not a number/)

      expect(() => {
        validationHelper.number(NaN)
      }).toThrow(/Validated object is not a number/)

      expect(() => {
        validationHelper.number(null)
      }).toThrow(/Validated object is not a number/)

      expect(() => {
        validationHelper.number('1')
      }).toThrow(/Validated object is not a number/)
    })

    it('do not throw error on Number value', () => {
      validationHelper.number(-1)
      validationHelper.number(0)
      validationHelper.number(1)
      validationHelper.number(1.5)
    })
  })

  describe('positiveNumber', () => {
    it('throw error on not a positive number value', () => {
      expect(() => {
        validationHelper.positiveNumber(0)
      }).toThrow(/Validated number is not positive/)

      expect(() => {
        validationHelper.positiveNumber(-1)
      }).toThrow(/Validated number is not positive/)

      expect(() => {
        validationHelper.positiveNumber(NaN)
      }).toThrow(/Validated object is not a number/)
    })

    it('do not throw error on a positive number value', () => {
      validationHelper.positiveNumber(0.1)
      validationHelper.positiveNumber(1)
      validationHelper.positiveNumber(1.5)
    })
  })

  describe('negativeNumber', () => {
    it('throw error on not a negative number value', () => {
      expect(() => {
        validationHelper.negativeNumber(0)
      }).toThrow(/Validated number is not negative/)

      expect(() => {
        validationHelper.negativeNumber(1)
      }).toThrow(/Validated number is not negative/)

      expect(() => {
        validationHelper.negativeNumber(NaN)
      }).toThrow(/Validated object is not a number/)
    })

    it('do not throw error on a negative number value', () => {
      validationHelper.negativeNumber(-0.1)
      validationHelper.negativeNumber(-1)
      validationHelper.negativeNumber(-1.5)
    })
  })

  describe('notNil', () => {
    it('throw error on null or undefined', () => {
      expect(() => {
        validationHelper.notNil(null)
      }).toThrow(/Validated object is null or undefined/)

      expect(() => {
        validationHelper.notNil(undefined)
      }).toThrow(/Validated object is null or undefined/)
    })

    it('do not throw error on not a null or undefined', () => {
      validationHelper.notNil(1)
      validationHelper.notNil(0)
      validationHelper.notNil(-1)
      validationHelper.notNil({})
      validationHelper.notNil('')
      validationHelper.notNil('a')
      validationHelper.notNil(true)
      validationHelper.notNil(false)
    })
  })

  describe('nil', () => {
    it('throw error on not a null or undefined', () => {
      expect(() => {
        validationHelper.nil(1)
      }).toThrow(/Validated object is not null or undefined/)

      expect(() => {
        validationHelper.nil(0)
      }).toThrow(/Validated object is not null or undefined/)

      expect(() => {
        validationHelper.nil(-1)
      }).toThrow(/Validated object is not null or undefined/)

      expect(() => {
        validationHelper.nil({})
      }).toThrow(/Validated object is not null or undefined/)

      expect(() => {
        validationHelper.nil('')
      }).toThrow(/Validated object is not null or undefined/)

      expect(() => {
        validationHelper.nil('a')
      }).toThrow(/Validated object is not null or undefined/)

      expect(() => {
        validationHelper.nil(true)
      }).toThrow(/Validated object is not null or undefined/)

      expect(() => {
        validationHelper.nil(false)
      }).toThrow(/Validated object is not null or undefined/)
    })

    it('do not throw error on null or undefined', () => {
      validationHelper.nil(null)
      validationHelper.nil(undefined)
    })
  })

  describe('notEmpty', () => {
    it('throw error on empty object', () => {
      expect(() => {
        validationHelper.notEmpty([])
      }).toThrow(/Validated object is empty/)

      expect(() => {
        validationHelper.notEmpty('')
      }).toThrow(/Validated object is empty/)

      expect(() => {
        validationHelper.notEmpty(new Set())
      }).toThrow(/Validated object is empty/)

      expect(() => {
        validationHelper.notEmpty(null)
      }).toThrow(/Validated object is empty/)

      expect(() => {
        validationHelper.notEmpty(undefined)
      }).toThrow(/Validated object is empty/)

      expect(() => {
        validationHelper.notEmpty(1)
      }).toThrow(/Validated object is empty/)

      expect(() => {
        validationHelper.notEmpty({})
      }).toThrow(/Validated object is empty/)
    })

    it('do not throw error on a not empty object', () => {
      validationHelper.notEmpty({ a: '' })
      validationHelper.notEmpty(' ')
      validationHelper.notEmpty('a')
      validationHelper.notEmpty([{}])
    })
  })

  describe('string', () => {
    it('throw error on not a string', () => {
      expect(() => {
        validationHelper.string({})
      }).toThrow(/Validated object is not a string/)

      expect(() => {
        validationHelper.string(1)
      }).toThrow(/Validated object is not a string/)

      expect(() => {
        validationHelper.string(true)
      }).toThrow(/Validated object is not a string/)

      expect(() => {
        validationHelper.string([])
      }).toThrow(/Validated object is not a string/)

      expect(() => {
        validationHelper.string(null)
      }).toThrow(/Validated object is not a string/)

      expect(() => {
        validationHelper.string(undefined)
      }).toThrow(/Validated object is not a string/)
    })

    it('do not throw error on a string', () => {
      validationHelper.string('')
      validationHelper.string(' ')
      validationHelper.string('a')
      validationHelper.string('1')
    })
  })

  describe('object', () => {
    it('throw error on not an object', () => {
      expect(() => {
        validationHelper.object_('s')
      }).toThrow(/Validated object is not an object/)

      expect(() => {
        validationHelper.object_(1)
      }).toThrow(/Validated object is not an object/)

      expect(() => {
        validationHelper.object_(true)
      }).toThrow(/Validated object is not an object/)

      expect(() => {
        validationHelper.object_(null)
      }).toThrow(/Validated object is not an object/)

      expect(() => {
        validationHelper.object_(undefined)
      }).toThrow(/Validated object is not an object/)
    })

    it('do not throw error on an object', () => {
      validationHelper.object_({})
      validationHelper.object_({ a: 'a' })
    })
  })

  describe('array', () => {
    it('throw error on not an array', () => {
      const expectedError = /Validated entity is not an array/

      expect(() => {
        validationHelper.array('s')
      }).toThrow(expectedError)

      expect(() => {
        validationHelper.array(1)
      }).toThrow(expectedError)

      expect(() => {
        validationHelper.array(true)
      }).toThrow(expectedError)

      expect(() => {
        validationHelper.array(null)
      }).toThrow(expectedError)

      expect(() => {
        validationHelper.array(undefined)
      }).toThrow(expectedError)
    })

    it('do not throw error on an array', () => {
      validationHelper.array([])
      validationHelper.array([{ a: 'a' }])
      validationHelper.array(['a'])
    })
  })

  describe('function_', () => {
    it('throw error on not a function', () => {
      const expectedError = /Validated entity is not a function/

      expect(() => {
        validationHelper.function_('s')
      }).toThrow(expectedError)

      expect(() => {
        validationHelper.function_(1)
      }).toThrow(expectedError)

      expect(() => {
        validationHelper.function_(true)
      }).toThrow(expectedError)

      expect(() => {
        validationHelper.function_(null)
      }).toThrow(expectedError)

      expect(() => {
        validationHelper.function_(undefined)
      }).toThrow(expectedError)
    })

    it('do not throw error on a function', () => {
      validationHelper.function_(() => {})
      validationHelper.function_(function x() {})
      validationHelper.function_(class Dummy {})
    })
  })

  describe('inheritsFrom', () => {
    it('throw error on not an inheritor of a class', () => {
      class X {}

      class X2 extends X {}

      class Y {}

      expect(() => {
        validationHelper.inheritsFrom(X, X2)
      }).toThrow(/Validated class does not inherit from X2/)

      expect(() => {
        validationHelper.inheritsFrom(X, Y)
      }).toThrow(/Validated class does not inherit from Y/)

      expect(() => {
        validationHelper.inheritsFrom(Object, Y)
      }).toThrow(/Validated class does not inherit from Y/)

      expect(() => {
        validationHelper.inheritsFrom(null, Y)
      }).toThrow(/Validated class does not inherit from Y/)
    })

    it('do not throw error on inheritor of a class', () => {
      class X {}

      class X2 extends X {}

      validationHelper.inheritsFrom(X, X)
      validationHelper.inheritsFrom(X2, X2)
      validationHelper.inheritsFrom(X2, X)
    })
  })

  describe('instanceOf', () => {
    it('throw error on not an instance of a class', () => {
      class X {}

      class X2 extends X {}

      class Y {}

      expect(() => {
        validationHelper.instanceOf(new X(), X2)
      }).toThrow(/Validated object is not an instance of X2/)

      expect(() => {
        validationHelper.instanceOf(new X(), Y)
      }).toThrow(/Validated object is not an instance of Y/)

      expect(() => {
        validationHelper.instanceOf({}, Y)
      }).toThrow(/Validated object is not an instance of Y/)

      expect(() => {
        validationHelper.instanceOf(null, Y)
      }).toThrow(/Validated object is not an instance of Y/)
    })

    it('do not throw error on an instance of a class', () => {
      class X {}

      class X2 extends X {}

      validationHelper.instanceOf(new X(), X)
      validationHelper.instanceOf(new X2(), X2)
      validationHelper.instanceOf(new X2(), X)
    })
  })

  describe('lessThan', () => {
    it('throw error on not less than', () => {
      expect(() => {
        validationHelper.lessThan(1, 1)
      }).toThrow(/Validated number 1 is not less than the threshold 1/)

      expect(() => {
        validationHelper.lessThan(2, 1)
      }).toThrow(/Validated number 2 is not less than the threshold 1/)
    })

    it('do not throw error on less than', () => {
      validationHelper.lessThan(1, 2)
      validationHelper.lessThan(1, 1.1)
    })
  })

  describe('greaterThan', () => {
    it('throw error on not greater than', () => {
      expect(() => {
        validationHelper.greaterThan(1, 1)
      }).toThrow(/Validated number 1 is not greater than the threshold 1/)

      expect(() => {
        validationHelper.greaterThan(0, 1)
      }).toThrow(/Validated number 0 is not greater than the threshold 1/)
    })

    it('do not throw error on greater than', () => {
      validationHelper.greaterThan(2, 1)
      validationHelper.greaterThan(1.1, 1)
    })
  })

  describe('equal', () => {
    it('throw error on not equal to', () => {
      expect(() => {
        validationHelper.equal(1, 2)
      }).toThrow(/Validated entity 1 is not equal to 2/)

      expect(() => {
        validationHelper.equal({}, {})
      }).toThrow('Validated entity [object Object] is not equal to [object Object]')

      expect(() => {
        validationHelper.equal('a', 'b')
      }).toThrow(/Validated entity a is not equal to b/)
    })

    it('do not throw error on equal to', () => {
      validationHelper.equal(1, 1)
      validationHelper.equal('dummy', 'dummy')

      const object = {}
      validationHelper.equal(object, object)
      validationHelper.equal(null, null)
      validationHelper.equal(undefined, undefined)
    })
  })

  describe('ValidationError', () => {
    it('throws ValidationError', () => {
      expect(() => {
        validationHelper.string(undefined)
      }).toThrow(new ValidationError('Validated object is not a string'))
    })
  })
})
