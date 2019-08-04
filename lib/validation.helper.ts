import ValidationError from './ValidationError'
import * as _ from 'lodash'

/**
 * Checks value not to be null or undefined
 * @param {*} validatedObject
 * @param {String} [errorText] - message for error thrown if validation fails
 * @returns {*} validatedObject
 */
export function notNil(validatedObject: any, errorText?: string) {
  if (_.isNil(validatedObject)) {
    throw new ValidationError(errorText || 'Validated object is null or undefined')
  }
  return validatedObject
}

/**
 * Checks value not to be an empty Object, String or Array
 * @param {*} validatedObject
 * @param {String} [errorText] - message for error thrown if validation fails
 * @returns {*} validatedObject
 */
export function notEmpty(validatedObject: any, errorText?: string) {
  if (_.isEmpty(validatedObject)) {
    throw new ValidationError(errorText || 'Validated object is empty')
  }
  return validatedObject
}

/**
 * Checks value to be a number
 * @param {*} validatedObject
 * @param {String} [errorText] - message for error thrown if validation fails
 * @returns {number} validatedObject
 */
export function number(validatedObject: any, errorText?: string) {
  if (!_.isFinite(validatedObject)) {
    throw new ValidationError(errorText || 'Validated object is not a number')
  }
  return validatedObject
}

/**
 * Checks value to be a number that is larger than 0
 * @param {*} validatedObject
 * @param {String} [errorText] - message for error thrown if validation fails
 * @returns {number} validatedObject
 */
export function positiveNumber(validatedObject: any, errorText?: string) {
  number(validatedObject)
  if (validatedObject <= 0) {
    throw new ValidationError(errorText || 'Validated number is not positive')
  }
  return validatedObject
}

/**
 * Checks value to be a number that is less than the specified number
 * @param {*} validatedObject
 * @param {number} threshold - if validated number is equal or larger than this, throw an error
 * @param {String} [errorText] - message for error thrown if validation fails
 * @returns {number} validatedObject
 */
export function lessThan(validatedObject: any, threshold: number, errorText?: string) {
  number(validatedObject)
  number(threshold, 'Threshold is not a number')
  if (validatedObject >= threshold) {
    throw new ValidationError(
      errorText || `Validated number ${validatedObject} is not less than the threshold ${threshold}`
    )
  }
  return validatedObject
}

/**
 * Checks value to be a number that is greater than specified number
 * @param {*} validatedObject
 * @param {number} threshold - if validated number is equal or less than this, throw an error
 * @param {String} [errorText] - message for error thrown if validation fails
 * @returns {number} validatedObject
 */
export function greaterThan(validatedObject: any, threshold: number, errorText?: string) {
  number(validatedObject)
  number(threshold, 'Threshold is not a number')
  if (validatedObject <= threshold) {
    throw new ValidationError(
      errorText || `Validated number ${validatedObject} is not greater than the threshold ${threshold}`
    )
  }
  return validatedObject
}

/**
 * Checks value to equal specified entity (=== comparison)
 * @param {*} validatedEntity
 * @param {*} expectedEqualTo - if validated entity is not equal to this, throw an error
 * @param {String} [errorText] - message for error thrown if validation fails
 * @returns {number} validatedObject
 */
export function equal(validatedEntity: any, expectedEqualTo: any, errorText?: string) {
  if (validatedEntity !== expectedEqualTo) {
    throw new ValidationError(errorText || `Validated entity ${validatedEntity} is not equal to ${expectedEqualTo}`)
  }
  return validatedEntity
}

/**
 * Checks value to be a number that is less than 0
 * @param {*} validatedObject
 * @param {String} [errorText] - message for error thrown if validation fails
 * @returns {number} validatedObject
 */
export function negativeNumber(validatedObject: any, errorText?: string) {
  number(validatedObject)
  if (validatedObject >= 0) {
    throw new ValidationError(errorText || 'Validated number is not negative')
  }
  return validatedObject
}

/**
 * Checks value to be a string
 * @param {*} validatedObject
 * @param {String} [errorText] - message for error thrown if validation fails
 * @returns {String} validatedObject
 */
export function string(validatedObject: any, errorText?: string) {
  if (!_.isString(validatedObject)) {
    throw new ValidationError(errorText || 'Validated object is not a string')
  }
  return validatedObject
}

/**
 * Checks value to be a True boolean
 * @param {*} validatedObject
 * @param {String} [errorText] - message for error thrown if validation fails
 * @returns {boolean} validatedObject
 */
export function booleanTrue(validatedObject: any, errorText?: string) {
  if (!_.isBoolean(validatedObject) || !validatedObject) {
    throw new ValidationError(errorText || 'Validated object is not True')
  }
  return validatedObject
}

/**
 * Checks value to be an instance of Date
 * @param {*} validatedEntity
 * @param {String} [errorText] - message for error thrown if validation fails
 * @returns {boolean} validatedObject
 */
export function date(validatedEntity: any, errorText?: string) {
  if (!_.isDate(validatedEntity)) {
    throw new ValidationError(errorText || 'Validated object is not Date')
  }
  return validatedEntity
}

/**
 * Checks value to be a boolean or a (case-insensitive) 'true' or 'false' string
 * @param {*} validatedObject
 * @param {String} [errorText] - message for error thrown if validation fails
 * @returns {*} validatedObject
 */
export function booleanNonStrict(validatedObject: any, errorText?: string) {
  if (!_.isBoolean(validatedObject)) {
    if (
      !_.isString(validatedObject) ||
      (validatedObject.toLowerCase() !== 'false' && validatedObject.toLowerCase() !== 'true')
    ) {
      throw new ValidationError(errorText || 'Validated object is not Boolean')
    }
  }
  return validatedObject
}

/**
 * Checks value to be a boolean
 * @param {*} validatedObject
 * @param {String} [errorText] - message for error thrown if validation fails
 * @returns {*} validatedObject
 */
export function boolean_(validatedObject: any, errorText?: string) {
  if (!_.isBoolean(validatedObject)) {
    throw new ValidationError(errorText || 'Validated object is not Boolean')
  }
  return validatedObject
}

/**
 * Checks value to be a False boolean
 * @param {*} validatedObject
 * @param {String} [errorText] - message for error thrown if validation fails
 * @returns {boolean} validatedObject
 */
export function booleanFalse(validatedObject: any, errorText?: string) {
  if (!_.isBoolean(validatedObject) || validatedObject) {
    throw new ValidationError(errorText || 'Validated object is not False')
  }
  return validatedObject
}

/**
 * Checks value to be a truthy entity
 * @param {*} validatedObject
 * @param {String} [errorText] - message for error thrown if validation fails
 * @returns {*} validatedObject
 */
export function truthy(validatedObject: any, errorText?: string) {
  if (!validatedObject) {
    throw new ValidationError(errorText || 'Validated object is not truthy')
  }
  return validatedObject
}

/**
 * Checks value to be a falsy entity
 * @param {*} validatedObject
 * @param {String} [errorText] - message for error thrown if validation fails
 * @returns {*} validatedObject
 */
export function falsy(validatedObject: any, errorText?: string) {
  if (validatedObject) {
    throw new ValidationError(errorText || 'Validated object is not falsy')
  }
  return validatedObject
}

/**
 * Checks value to be a function
 * @param {*} validatedEntity
 * @param {String} [errorText] - message for error thrown if validation fails
 * @returns {*} validatedEntity
 */
export function function_(validatedEntity: any, errorText?: string) {
  if (!_.isFunction(validatedEntity)) {
    throw new ValidationError(errorText || 'Validated entity is not a function')
  }
  return validatedEntity
}

/**
 * Checks object to have at least a given set of properties defined
 * @param {*} validatedObject
 * @param {String[]} validatedProperties - names of properties which existence should be checked
 * @returns {*} validatedObject
 */
export function withProperties(validatedObject: any, validatedProperties: string[]) {
  notNil(validatedObject)

  const undefinedProperties = _.filter(validatedProperties, function(property) {
    return !validatedObject.hasOwnProperty(property)
  })

  if (!_.isEmpty(undefinedProperties)) {
    throw new ValidationError("Validated object doesn't have properties: " + undefinedProperties)
  }
  return validatedObject
}

/**
 * Checks value to be an object
 * @param validatedObject
 * @param {string} [errorText] - message for error thrown if validation fails
 * @returns {Object} validatedObject
 */
export function object_(validatedObject: any, errorText?: string) {
  if (!_.isObject(validatedObject)) {
    throw new ValidationError(errorText || 'Validated object is not an object')
  }
  return validatedObject
}

/**
 * Checks value to be an object
 * @param validatedObject
 * @param {string} [errorText] - message for error thrown if validation fails
 * @returns {Object} validatedObject
 */
export function array(validatedObject: any, errorText?: string) {
  if (!Array.isArray(validatedObject)) {
    throw new ValidationError(errorText || 'Validated entity is not an array')
  }
  return validatedObject
}

/**
 * Checks value to be an instance of a given class
 * @param validatedObject
 * @param {class} expectedClass
 * @param {string} [errorText] - message for error thrown if validation fails
 * @returns {Object} validatedObject
 */
export function instanceOf(validatedObject: any, expectedClass: any, errorText?: string) {
  if (!(validatedObject instanceof expectedClass)) {
    throw new ValidationError(errorText || `Validated object is not an instance of ${expectedClass.name}`)
  }
  return validatedObject
}

/**
 * Checks value to inherit from a given class or to be that class
 * @param validatedClass
 * @param {class} expectedParentClass
 * @param {string} [errorText] - message for error thrown if validation fails
 * @returns {Object} validatedObject
 */
export function inheritsFrom(validatedClass: any, expectedParentClass: any, errorText?: string) {
  if (
    //fail-fast if it is nil
    !validatedClass ||
    //lenient check whether class directly or indirectly inherits from expected class
    (!(validatedClass.prototype instanceof expectedParentClass) && validatedClass !== expectedParentClass)
  ) {
    throw new ValidationError(errorText || `Validated class does not inherit from ${expectedParentClass.name}`)
  }
  return validatedClass
}
