import ValidationError from './ValidationError'
import { isEmpty, isNil, isFinite, isString, isBoolean, isFunction, isObject, isDate } from 'zoology'

/**
 * Checks value not to be null or undefined
 * @param {*} validatedObject
 * @param {String} [errorText] - message for error thrown if validation fails
 * @returns {*} validatedObject
 */
export function validateNotNil<T>(validatedObject: T, errorText?: string): T {
  if (isNil(validatedObject)) {
    throw new ValidationError(errorText || 'Validated object is null or undefined')
  }
  return validatedObject
}

/**
 * Checks value to be null or undefined
 * @param {*} validatedObject
 * @param {String} [errorText] - message for error thrown if validation fails
 * @returns {*} validatedObject
 */
export function validateNil<T>(validatedObject: T, errorText?: string): T {
  if (!isNil(validatedObject)) {
    throw new ValidationError(errorText || 'Validated object is not null or undefined')
  }
  return validatedObject
}

/**
 * Checks value not to be an empty Object, String or Array
 * @param {*} validatedObject
 * @param {String} [errorText] - message for error thrown if validation fails
 * @returns {*} validatedObject
 */
export function validateNotEmpty<T>(validatedObject: T, errorText?: string): T {
  if (isEmpty(validatedObject)) {
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
export function validateNumber(validatedObject: any, errorText?: string): number {
  if (!isFinite(validatedObject)) {
    throw new ValidationError(errorText || 'Validated object is not a number')
  }
  return validatedObject as number
}

/**
 * Checks value to be a number that is larger than 0
 * @param {*} validatedObject
 * @param {String} [errorText] - message for error thrown if validation fails
 * @returns {number} validatedObject
 */
export function validatePositiveNumber(validatedObject: any, errorText?: string): number {
  validateNumber(validatedObject)
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
export function validateLessThan(validatedObject: any, threshold: number, errorText?: string): number {
  validateNumber(validatedObject)
  validateNumber(threshold, 'Threshold is not a number')
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
export function validateGreaterThan(validatedObject: any, threshold: number, errorText?: string): number {
  validateNumber(validatedObject)
  validateNumber(threshold, 'Threshold is not a number')
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
export function validateEqual<T>(validatedEntity: any, expectedEqualTo: T, errorText?: string): T {
  if (validatedEntity !== expectedEqualTo) {
    throw new ValidationError(errorText || `Validated entity ${validatedEntity} is not equal to ${expectedEqualTo}`)
  }
  return validatedEntity
}

/**
 * Checks value to be included among specified entities (indexOf !== -1 comparison)
 * @param {*} validatedEntity
 * @param {*} expectedOneOfEntities - if validated entity is not equal to one of these, throw an error
 * @param {String} [errorText] - message for error thrown if validation fails
 * @returns {number} validatedObject
 */
export function validateOneOf<T>(validatedEntity: any, expectedOneOfEntities: T[], errorText?: string): T {
  const index = expectedOneOfEntities.indexOf(validatedEntity)
  if (index === -1) {
    throw new ValidationError(errorText || `Validated entity ${validatedEntity} is not one of ${expectedOneOfEntities}`)
  }
  return validatedEntity
}

export function validateSomeNotNil<T>(validatedEntities: T[], errorText?: string): T[] {
  const someAreNotNil = validatedEntities.some((entity) => !isNil(entity))
  if (!someAreNotNil) {
    throw new ValidationError(errorText || 'All of validated values are nil')
  }
  return validatedEntities
}

/**
 * Checks value to be a number that is less than 0
 * @param {*} validatedObject
 * @param {String} [errorText] - message for error thrown if validation fails
 * @returns {number} validatedObject
 */
export function validateNegativeNumber(validatedObject: any, errorText?: string): number {
  validateNumber(validatedObject)
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
export function validateString(validatedObject: any, errorText?: string): string {
  if (!isString(validatedObject)) {
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
export function validateBooleanTrue(validatedObject: any, errorText?: string): boolean {
  if (!isBoolean(validatedObject) || !validatedObject) {
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
export function validateDate(validatedEntity: any, errorText?: string): Date {
  if (!isDate(validatedEntity)) {
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
export function validateBooleanNonStrict(validatedObject: any, errorText?: string): boolean | string {
  if (!isBoolean(validatedObject)) {
    if (
      !isString(validatedObject) ||
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
export function validateBoolean(validatedObject: any, errorText?: string): boolean {
  if (!isBoolean(validatedObject)) {
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
export function validateBooleanFalse(validatedObject: any, errorText?: string): boolean {
  if (!isBoolean(validatedObject) || validatedObject) {
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
export function validateTruthy<T>(validatedObject: T, errorText?: string): T {
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
export function validateFalsy<T>(validatedObject: T, errorText?: string): T {
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
// eslint-disable-next-line @typescript-eslint/ban-types
export function validateFunction(validatedEntity: any, errorText?: string): Function {
  if (!isFunction(validatedEntity)) {
    throw new ValidationError(errorText || 'Validated entity is not a function')
  }
  return validatedEntity
}

/**
 * Checks object to have at least a given set of properties defined
 * @param {*} validatedObject
 * @param {String[]} validatedProperties - names of properties which existence should be checked
 * @param {string} [errorMessage] - error message prefixed to the list of undefined properties
 * @returns {*} validatedObject
 */
export function validateHasProperties(validatedObject: any, validatedProperties: string[], errorMessage?: string): any {
  validateNotNil(validatedObject)

  const undefinedProperties = validatedProperties.filter((property) => {
    return !Object.prototype.hasOwnProperty.call(validatedObject, property)
  })

  if (undefinedProperties.length > 0) {
    throw new ValidationError(`${errorMessage ?? "Validated object doesn't have properties: "}${undefinedProperties}`)
  }
  return validatedObject
}

/**
 * Checks object to have at least a given set of not nil properties
 * @param {*} validatedObject
 * @param {String[]} validatedProperties - names of properties which existence should be checked
 * @param {string} [errorMessage] - error message prefixed to the list of nil properties
 * @returns {*} validatedObject
 */
export function validateNotNilProperties(
  validatedObject: any,
  validatedProperties: string[],
  errorMessage?: string
): any {
  validateNotNil(validatedObject)

  const nilProperties = validatedProperties.filter((property) => {
    return isNil(validatedObject[property])
  })

  if (nilProperties.length > 0) {
    throw new ValidationError(`${errorMessage ?? 'Validated object has nil properties: '}${nilProperties}`)
  }
  return validatedObject
}

/**
 * Checks value to be an object
 * @param validatedObject
 * @param {string} [errorText] - message for error thrown if validation fails
 * @returns {Object} validatedObject
 */
export function validateObject<T>(validatedObject: T, errorText?: string): T {
  if (!isObject(validatedObject)) {
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
export function validateArray(validatedObject: any, errorText?: string): any[] {
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
export function validateInstanceOf<T>(validatedObject: T, expectedClass: any, errorText?: string): T {
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
export function validateInheritsFrom(validatedClass: any, expectedParentClass: any, errorText?: string): any {
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
