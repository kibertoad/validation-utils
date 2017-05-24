'use-strict'
let _ = require('lodash');

/**
 * Checks value not to be null or undefined
 * @param validatedObject
 * @param {String} [errorText] - message for error thrown if validation fails
 */
function validateIsNotNil(validatedObject, errorText) {
  if (_.isNil(validatedObject)) {
    throw new Error(errorText || 'Validated object is null or undefined');
  }
}

/**
 * Checks value not to be an empty Object, String or Array
 * @param validatedObject
 * @param {String} [errorText] - message for error thrown if validation fails
 */
function validateIsNotEmpty(validatedObject, errorText) {
  if (_.isEmpty(validatedObject)) {
    throw new Error(errorText || 'Validated object is empty');
  }
}

/**
 * Checks value to be a number
 * @param validatedObject
 * @param {String} [errorText] - message for error thrown if validation fails
 */
function validateIsNumber(validatedObject, errorText) {
  if (!_.isFinite(validatedObject)) {
    throw new Error(errorText || 'Validated object is not a number');
  }
}

/**
 * Checks value to be a number that is larger than 0
 * @param validatedObject
 * @param {String} [errorText] - message for error thrown if validation fails
 */
function validateIsPositiveNumber(validatedObject, errorText) {
  validateIsNumber(validatedObject);
  if (validatedObject <= 0) {
    throw new Error(errorText || 'Validated number is not positive');
  }
}

/**
 * Checks value to be a True boolean
 * @param validatedObject
 * @param {String} [errorText] - message for error thrown if validation fails
 */
function validateIsTrue(validatedObject, errorText) {
  if (!_.isBoolean(validatedObject) || !validatedObject) {
    throw new Error(errorText || 'Validated object is not True');
  }
}

/**
 * Checks value to be a False boolean
 * @param validatedObject
 * @param {String} [errorText] - message for error thrown if validation fails
 */
function validateIsFalse(validatedObject, errorText) {
  if (!_.isBoolean(validatedObject) || validatedObject) {
    throw new Error(errorText || 'Validated object is not False');
  }
}

/**
 * Checks value to be a truthy entity
 * @param validatedObject
 * @param {String} [errorText] - message for error thrown if validation fails
 */
function validateIsTruthy(validatedObject, errorText) {
  if (!validatedObject) {
    throw new Error(errorText || 'Validated object is not truthy');
  }
}

/**
 * Checks value to be a falsy entity
 * @param validatedObject
 * @param {String} [errorText] - message for error thrown if validation fails
 */
function validateIsFalsy(validatedObject, errorText) {
  if (validatedObject) {
    throw new Error(errorText || 'Validated object is not falsy');
  }
}

/**
 * Checks object to have at least a given set of properties defined
 * @param validatedObject
 * @param {String[]} validatedProperties - names of properties which existence should be checked
 */
function validateHasProperties(validatedObject, validatedProperties) {
  validateIsNotNil(validatedObject);

  let undefinedProperties = _.filter(validatedProperties, function (property) {
    return !validatedObject.hasOwnProperty(property);
  });

  if (!_.isEmpty(undefinedProperties)) {
    throw new Error('Validated object doesn\'t have properties: ' + undefinedProperties);
  }
}

module.exports = {
  validateHasProperties,
  validateIsFalse,
  validateIsFalsy,
  validateIsNotEmpty,
  validateIsNotNil,
  validateIsNumber,
  validateIsPositiveNumber,
  validateIsTrue,
  validateIsTruthy
};
