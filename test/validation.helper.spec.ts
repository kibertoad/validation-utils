import ValidationError from '../lib/ValidationError'
import * as validationHelper from '../lib/validation.helper'

describe('ValidationHelper', () => {
  describe('validateHasProperties', () => {
    it('throw error on undefined properties', () => {
      expect(() => {
        validationHelper.validateHasProperties({ a: 'a', b: 'b', c: 'c' }, ['b', 'd', 'e'])
      }).toThrow(/Validated object doesn't have properties: d,e/)
    })

    it('do not throw error on defined properties', () => {
      validationHelper.validateHasProperties({ a: 'a', b: 'b', c: 'c' }, ['a', 'b', 'c'])

      validationHelper.validateHasProperties({ a: 'a', b: 'b', c: 'c' }, ['b'])

      validationHelper.validateHasProperties({ a: 'a', b: 'b', c: 'c' }, [])
    })
  })

  describe('validateTruthy', () => {
    it('throw error on not truthy values', () => {
      expect(() => {
        validationHelper.validateTruthy(false)
      }).toThrow(/Validated object is not truthy/)

      expect(() => {
        validationHelper.validateTruthy(undefined)
      }).toThrow(/Validated object is not truthy/)

      expect(() => {
        validationHelper.validateTruthy(NaN)
      }).toThrow(/Validated object is not truthy/)

      expect(() => {
        validationHelper.validateTruthy(0)
      }).toThrow(/Validated object is not truthy/)

      expect(() => {
        validationHelper.validateTruthy('')
      }).toThrow(/Validated object is not truthy/)
    })

    it('do not throw error on truthy values', () => {
      validationHelper.validateTruthy(true)
      validationHelper.validateTruthy({})
      validationHelper.validateTruthy(1)
      validationHelper.validateTruthy(-1)
      validationHelper.validateTruthy(' ')
      validationHelper.validateTruthy('a')
    })
  })

  describe('validateFalsy', () => {
    it('throw error on not falsy values', () => {
      expect(() => {
        validationHelper.validateFalsy(true)
      }).toThrow(/Validated object is not falsy/)

      expect(() => {
        validationHelper.validateFalsy({})
      }).toThrow(/Validated object is not falsy/)

      expect(() => {
        validationHelper.validateFalsy(1)
      }).toThrow(/Validated object is not falsy/)

      expect(() => {
        validationHelper.validateFalsy(-1)
      }).toThrow(/Validated object is not falsy/)

      expect(() => {
        validationHelper.validateFalsy(' ')
      }).toThrow(/Validated object is not falsy/)

      expect(() => {
        validationHelper.validateFalsy('a')
      }).toThrow(/Validated object is not falsy/)
    })

    it('do not throw error on falsy values', () => {
      validationHelper.validateFalsy(false)
      validationHelper.validateFalsy(undefined)
      validationHelper.validateFalsy(NaN)
      validationHelper.validateFalsy(0)
      validationHelper.validateFalsy('')
    })
  })

  describe('validateBooleanTrue', () => {
    it('throw error on not True values', () => {
      expect(() => {
        validationHelper.validateBooleanTrue(false)
      }).toThrow(/Validated object is not True/)

      expect(() => {
        validationHelper.validateBooleanTrue({})
      }).toThrow(/Validated object is not True/)

      expect(() => {
        validationHelper.validateBooleanTrue(1)
      }).toThrow(/Validated object is not True/)
    })

    it('do not throw error on True values', () => {
      validationHelper.validateBooleanTrue(true)
    })
  })

  describe('validateDate', () => {
    it('throw error on not Date values', () => {
      expect(() => {
        validationHelper.validateDate(false)
      }).toThrow(/Validated object is not Date/)

      expect(() => {
        validationHelper.validateDate({})
      }).toThrow(/Validated object is not Date/)

      expect(() => {
        validationHelper.validateDate(1)
      }).toThrow(/Validated object is not Date/)
    })

    it('do not throw error on Date values', () => {
      validationHelper.validateDate(new Date())
    })
  })

  describe('validateBoolean', () => {
    it('throw error on not non-strict boolean values', () => {
      expect(() => {
        validationHelper.validateBoolean('0')
      }).toThrow(/Validated object is not Boolean/)

      expect(() => {
        validationHelper.validateBoolean({})
      }).toThrow(/Validated object is not Boolean/)

      expect(() => {
        validationHelper.validateBoolean('tru')
      }).toThrow(/Validated object is not Boolean/)

      expect(() => {
        validationHelper.validateBoolean('true')
      }).toThrow(/Validated object is not Boolean/)

      expect(() => {
        validationHelper.validateBoolean('TRUE')
      }).toThrow(/Validated object is not Boolean/)

      expect(() => {
        validationHelper.validateBoolean('false')
      }).toThrow(/Validated object is not Boolean/)

      expect(() => {
        validationHelper.validateBoolean('FALSE')
      }).toThrow(/Validated object is not Boolean/)
    })

    it('do not throw error on boolean values', () => {
      validationHelper.validateBoolean(true)
      validationHelper.validateBoolean(false)
    })
  })

  describe('validateBooleanNonStrict', () => {
    it('throw error on not non-strict boolean values', () => {
      expect(() => {
        validationHelper.validateBooleanNonStrict('0')
      }).toThrow(/Validated object is not Boolean/)

      expect(() => {
        validationHelper.validateBooleanNonStrict({})
      }).toThrow(/Validated object is not Boolean/)

      expect(() => {
        validationHelper.validateBooleanNonStrict('tru')
      }).toThrow(/Validated object is not Boolean/)
    })

    it('do not throw error on non-strict boolean values', () => {
      validationHelper.validateBooleanNonStrict(true)
      validationHelper.validateBooleanNonStrict(false)
      validationHelper.validateBooleanNonStrict('true')
      validationHelper.validateBooleanNonStrict('TRUE')
      validationHelper.validateBooleanNonStrict('false')
      validationHelper.validateBooleanNonStrict('FALSE')
    })
  })

  describe('validateBooleanFalse', () => {
    it('throw error on not False values', () => {
      expect(() => {
        validationHelper.validateBooleanFalse(true)
      }).toThrow(/Validated object is not False/)

      expect(() => {
        validationHelper.validateBooleanFalse(undefined)
      }).toThrow(/Validated object is not False/)

      expect(() => {
        validationHelper.validateBooleanFalse(null)
      }).toThrow(/Validated object is not False/)

      expect(() => {
        validationHelper.validateBooleanFalse(NaN)
      }).toThrow(/Validated object is not False/)

      expect(() => {
        validationHelper.validateBooleanFalse(0)
      }).toThrow(/Validated object is not False/)

      expect(() => {
        validationHelper.validateBooleanFalse(1)
      }).toThrow(/Validated object is not False/)
    })

    it('do not throw error on False values', () => {
      validationHelper.validateBooleanFalse(false)
    })
  })

  describe('validateNumber', () => {
    it('throw error on not a Number value', () => {
      expect(() => {
        validationHelper.validateNumber({})
      }).toThrow(/Validated object is not a number/)

      expect(() => {
        validationHelper.validateNumber(undefined)
      }).toThrow(/Validated object is not a number/)

      expect(() => {
        validationHelper.validateNumber(NaN)
      }).toThrow(/Validated object is not a number/)

      expect(() => {
        validationHelper.validateNumber(null)
      }).toThrow(/Validated object is not a number/)

      expect(() => {
        validationHelper.validateNumber('1')
      }).toThrow(/Validated object is not a number/)
    })

    it('do not throw error on Number value', () => {
      validationHelper.validateNumber(-1)
      validationHelper.validateNumber(0)
      validationHelper.validateNumber(1)
      validationHelper.validateNumber(1.5)
    })
  })

  describe('validatePositiveNumber', () => {
    it('throw error on not a positive number value', () => {
      expect(() => {
        validationHelper.validatePositiveNumber(0)
      }).toThrow(/Validated number is not positive/)

      expect(() => {
        validationHelper.validatePositiveNumber(-1)
      }).toThrow(/Validated number is not positive/)

      expect(() => {
        validationHelper.validatePositiveNumber(NaN)
      }).toThrow(/Validated object is not a number/)
    })

    it('do not throw error on a positive number value', () => {
      validationHelper.validatePositiveNumber(0.1)
      validationHelper.validatePositiveNumber(1)
      validationHelper.validatePositiveNumber(1.5)
    })
  })

  describe('validateNegativeNumber', () => {
    it('throw error on not a negative number value', () => {
      expect(() => {
        validationHelper.validateNegativeNumber(0)
      }).toThrow(/Validated number is not negative/)

      expect(() => {
        validationHelper.validateNegativeNumber(1)
      }).toThrow(/Validated number is not negative/)

      expect(() => {
        validationHelper.validateNegativeNumber(NaN)
      }).toThrow(/Validated object is not a number/)
    })

    it('do not throw error on a negative number value', () => {
      validationHelper.validateNegativeNumber(-0.1)
      validationHelper.validateNegativeNumber(-1)
      validationHelper.validateNegativeNumber(-1.5)
    })
  })

  describe('validateNotNil', () => {
    it('throw error on null or undefined', () => {
      expect(() => {
        validationHelper.validateNotNil(null)
      }).toThrow(/Validated object is null or undefined/)

      expect(() => {
        validationHelper.validateNotNil(undefined)
      }).toThrow(/Validated object is null or undefined/)
    })

    it('do not throw error on not a null or undefined', () => {
      validationHelper.validateNotNil(1)
      validationHelper.validateNotNil(0)
      validationHelper.validateNotNil(-1)
      validationHelper.validateNotNil({})
      validationHelper.validateNotNil('')
      validationHelper.validateNotNil('a')
      validationHelper.validateNotNil(true)
      validationHelper.validateNotNil(false)
    })
  })

  describe('validateNil', () => {
    it('throw error on not a null or undefined', () => {
      expect(() => {
        validationHelper.validateNil(1)
      }).toThrow(/Validated object is not null or undefined/)

      expect(() => {
        validationHelper.validateNil(0)
      }).toThrow(/Validated object is not null or undefined/)

      expect(() => {
        validationHelper.validateNil(-1)
      }).toThrow(/Validated object is not null or undefined/)

      expect(() => {
        validationHelper.validateNil({})
      }).toThrow(/Validated object is not null or undefined/)

      expect(() => {
        validationHelper.validateNil('')
      }).toThrow(/Validated object is not null or undefined/)

      expect(() => {
        validationHelper.validateNil('a')
      }).toThrow(/Validated object is not null or undefined/)

      expect(() => {
        validationHelper.validateNil(true)
      }).toThrow(/Validated object is not null or undefined/)

      expect(() => {
        validationHelper.validateNil(false)
      }).toThrow(/Validated object is not null or undefined/)
    })

    it('do not throw error on null or undefined', () => {
      validationHelper.validateNil(null)
      validationHelper.validateNil(undefined)
    })
  })

  describe('validateNotEmpty', () => {
    it('throw error on empty object', () => {
      expect(() => {
        validationHelper.validateNotEmpty([])
      }).toThrow(/Validated object is empty/)

      expect(() => {
        validationHelper.validateNotEmpty('')
      }).toThrow(/Validated object is empty/)

      expect(() => {
        validationHelper.validateNotEmpty(new Set())
      }).toThrow(/Validated object is empty/)

      expect(() => {
        validationHelper.validateNotEmpty(null)
      }).toThrow(/Validated object is empty/)

      expect(() => {
        validationHelper.validateNotEmpty(undefined)
      }).toThrow(/Validated object is empty/)

      expect(() => {
        validationHelper.validateNotEmpty({})
      }).toThrow(/Validated object is empty/)
    })

    it('do not throw error on a not empty object', () => {
      validationHelper.validateNotEmpty({ a: '' })
      validationHelper.validateNotEmpty(' ')
      validationHelper.validateNotEmpty('a')
      validationHelper.validateNotEmpty([{}])
      validationHelper.validateNotEmpty(1)
    })
  })

  describe('validateString', () => {
    it('throw error on not a string', () => {
      expect(() => {
        validationHelper.validateString({})
      }).toThrow(/Validated object is not a string/)

      expect(() => {
        validationHelper.validateString(1)
      }).toThrow(/Validated object is not a string/)

      expect(() => {
        validationHelper.validateString(true)
      }).toThrow(/Validated object is not a string/)

      expect(() => {
        validationHelper.validateString([])
      }).toThrow(/Validated object is not a string/)

      expect(() => {
        validationHelper.validateString(null)
      }).toThrow(/Validated object is not a string/)

      expect(() => {
        validationHelper.validateString(undefined)
      }).toThrow(/Validated object is not a string/)
    })

    it('do not throw error on a string', () => {
      validationHelper.validateString('')
      validationHelper.validateString(' ')
      validationHelper.validateString('a')
      validationHelper.validateString('1')
    })
  })

  describe('validateObject', () => {
    it('throw error on not an object', () => {
      expect(() => {
        validationHelper.validateObject('s')
      }).toThrow(/Validated object is not an object/)

      expect(() => {
        validationHelper.validateObject(1)
      }).toThrow(/Validated object is not an object/)

      expect(() => {
        validationHelper.validateObject(true)
      }).toThrow(/Validated object is not an object/)

      expect(() => {
        validationHelper.validateObject(null)
      }).toThrow(/Validated object is not an object/)

      expect(() => {
        validationHelper.validateObject(undefined)
      }).toThrow(/Validated object is not an object/)
    })

    it('do not throw error on an object', () => {
      validationHelper.validateObject({})
      validationHelper.validateObject({ a: 'a' })
    })
  })

  describe('validateArray', () => {
    it('throw error on not an array', () => {
      const expectedError = /Validated entity is not an array/

      expect(() => {
        validationHelper.validateArray('s')
      }).toThrow(expectedError)

      expect(() => {
        validationHelper.validateArray(1)
      }).toThrow(expectedError)

      expect(() => {
        validationHelper.validateArray(true)
      }).toThrow(expectedError)

      expect(() => {
        validationHelper.validateArray(null)
      }).toThrow(expectedError)

      expect(() => {
        validationHelper.validateArray(undefined)
      }).toThrow(expectedError)
    })

    it('do not throw error on an array', () => {
      validationHelper.validateArray([])
      validationHelper.validateArray([{ a: 'a' }])
      validationHelper.validateArray(['a'])
    })
  })

  describe('validateFunction', () => {
    it('throw error on not a function', () => {
      const expectedError = /Validated entity is not a function/

      expect(() => {
        validationHelper.validateFunction('s')
      }).toThrow(expectedError)

      expect(() => {
        validationHelper.validateFunction(1)
      }).toThrow(expectedError)

      expect(() => {
        validationHelper.validateFunction(true)
      }).toThrow(expectedError)

      expect(() => {
        validationHelper.validateFunction(null)
      }).toThrow(expectedError)

      expect(() => {
        validationHelper.validateFunction(undefined)
      }).toThrow(expectedError)
    })

    it('do not throw error on a function', () => {
      validationHelper.validateFunction(() => {})
      validationHelper.validateFunction(function x() {})
      validationHelper.validateFunction(class Dummy {})
    })
  })

  describe('validateInheritsFrom', () => {
    it('throw error on not an inheritor of a class', () => {
      class X {}

      class X2 extends X {}

      class Y {}

      expect(() => {
        validationHelper.validateInheritsFrom(X, X2)
      }).toThrow(/Validated class does not inherit from X2/)

      expect(() => {
        validationHelper.validateInheritsFrom(X, Y)
      }).toThrow(/Validated class does not inherit from Y/)

      expect(() => {
        validationHelper.validateInheritsFrom(Object, Y)
      }).toThrow(/Validated class does not inherit from Y/)

      expect(() => {
        validationHelper.validateInheritsFrom(null, Y)
      }).toThrow(/Validated class does not inherit from Y/)
    })

    it('do not throw error on inheritor of a class', () => {
      class X {}

      class X2 extends X {}

      validationHelper.validateInheritsFrom(X, X)
      validationHelper.validateInheritsFrom(X2, X2)
      validationHelper.validateInheritsFrom(X2, X)
    })
  })

  describe('validateInstanceOf', () => {
    it('throw error on not an instance of a class', () => {
      class X {}

      class X2 extends X {}

      class Y {}

      expect(() => {
        validationHelper.validateInstanceOf(new X(), X2)
      }).toThrow(/Validated object is not an instance of X2/)

      expect(() => {
        validationHelper.validateInstanceOf(new X(), Y)
      }).toThrow(/Validated object is not an instance of Y/)

      expect(() => {
        validationHelper.validateInstanceOf({}, Y)
      }).toThrow(/Validated object is not an instance of Y/)

      expect(() => {
        validationHelper.validateInstanceOf(null, Y)
      }).toThrow(/Validated object is not an instance of Y/)
    })

    it('do not throw error on an instance of a class', () => {
      class X {}

      class X2 extends X {}

      validationHelper.validateInstanceOf(new X(), X)
      validationHelper.validateInstanceOf(new X2(), X2)
      validationHelper.validateInstanceOf(new X2(), X)
    })
  })

  describe('validateLessThan', () => {
    it('throw error on not less than', () => {
      expect(() => {
        validationHelper.validateLessThan(1, 1)
      }).toThrow(/Validated number 1 is not less than the threshold 1/)

      expect(() => {
        validationHelper.validateLessThan(2, 1)
      }).toThrow(/Validated number 2 is not less than the threshold 1/)
    })

    it('do not throw error on less than', () => {
      validationHelper.validateLessThan(1, 2)
      validationHelper.validateLessThan(1, 1.1)
    })
  })

  describe('validateGreaterThan', () => {
    it('throw error on not greater than', () => {
      expect(() => {
        validationHelper.validateGreaterThan(1, 1)
      }).toThrow(/Validated number 1 is not greater than the threshold 1/)

      expect(() => {
        validationHelper.validateGreaterThan(0, 1)
      }).toThrow(/Validated number 0 is not greater than the threshold 1/)
    })

    it('do not throw error on greater than', () => {
      validationHelper.validateGreaterThan(2, 1)
      validationHelper.validateGreaterThan(1.1, 1)
    })
  })

  describe('validateEqual', () => {
    it('throw error on not equal to', () => {
      expect(() => {
        validationHelper.validateEqual(1, 2)
      }).toThrow(/Validated entity 1 is not equal to 2/)

      expect(() => {
        validationHelper.validateEqual({}, {})
      }).toThrow('Validated entity [object Object] is not equal to [object Object]')

      expect(() => {
        validationHelper.validateEqual('a', 'b')
      }).toThrow(/Validated entity a is not equal to b/)
    })

    it('do not throw error on equal to', () => {
      validationHelper.validateEqual(1, 1)
      validationHelper.validateEqual('dummy', 'dummy')

      const object = {}
      validationHelper.validateEqual(object, object)
      validationHelper.validateEqual(null, null)
      validationHelper.validateEqual(undefined, undefined)
    })
  })

  describe('ValidationError', () => {
    it('throws ValidationError', () => {
      expect(() => {
        validationHelper.validateString(undefined)
      }).toThrow(new ValidationError('Validated object is not a string'))
    })
  })
})
