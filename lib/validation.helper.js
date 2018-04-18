"use-strict";
const ValidationError = require("./ValidationError");
const _ = require("lodash");

/**
 * Checks value not to be null or undefined
 * @param validatedObject
 * @param {String} [errorText] - message for error thrown if validation fails
 * @returns {*} validatedObject
 */
function notNil(validatedObject, errorText) {
  if (_.isNil(validatedObject)) {
    throw new ValidationError(
      errorText || "Validated object is null or undefined"
    );
  }
  return validatedObject;
}

/**
 * Checks value not to be an empty Object, String or Array
 * @param validatedObject
 * @param {String} [errorText] - message for error thrown if validation fails
 * @returns {*} validatedObject
 */
function notEmpty(validatedObject, errorText) {
  if (_.isEmpty(validatedObject)) {
    throw new ValidationError(errorText || "Validated object is empty");
  }
  return validatedObject;
}

/**
 * Checks value to be a number
 * @param validatedObject
 * @param {String} [errorText] - message for error thrown if validation fails
 * @returns {number} validatedObject
 */
function number(validatedObject, errorText) {
  if (!_.isFinite(validatedObject)) {
    throw new ValidationError(errorText || "Validated object is not a number");
  }
  return validatedObject;
}

/**
 * Checks value to be a number that is larger than 0
 * @param validatedObject
 * @param {String} [errorText] - message for error thrown if validation fails
 * @returns {number} validatedObject
 */
function positiveNumber(validatedObject, errorText) {
  number(validatedObject);
  if (validatedObject <= 0) {
    throw new ValidationError(errorText || "Validated number is not positive");
  }
  return validatedObject;
}

/**
 * Checks value to be a string
 * @param validatedObject
 * @param {String} [errorText] - message for error thrown if validation fails
 * @returns {String} validatedObject
 */
function string(validatedObject, errorText) {
  if (!_.isString(validatedObject)) {
    throw new ValidationError(errorText || "Validated object is not a string");
  }
  return validatedObject;
}

/**
 * Checks value to be a True boolean
 * @param validatedObject
 * @param {String} [errorText] - message for error thrown if validation fails
 * @returns {boolean} validatedObject
 */
function booleanTrue(validatedObject, errorText) {
  if (!_.isBoolean(validatedObject) || !validatedObject) {
    throw new ValidationError(errorText || "Validated object is not True");
  }
  return validatedObject;
}

/**
 * Checks value to be a boolean or a (case-insensitive) 'true' or 'false' string
 * @param validatedObject
 * @param {String} [errorText] - message for error thrown if validation fails
 * @returns {*} validatedObject
 */
function booleanNonStrict(validatedObject, errorText) {
  if (!_.isBoolean(validatedObject)) {
    if (
      !_.isString(validatedObject) ||
      (validatedObject.toLowerCase() !== "false" &&
        validatedObject.toLowerCase() !== "true")
    ) {
      throw new ValidationError(errorText || "Validated object is not Boolean");
    }
  }
  return validatedObject;
}

/**
 * Checks value to be a False boolean
 * @param validatedObject
 * @param {String} [errorText] - message for error thrown if validation fails
 * @returns {boolean} validatedObject
 */
function booleanFalse(validatedObject, errorText) {
  if (!_.isBoolean(validatedObject) || validatedObject) {
    throw new ValidationError(errorText || "Validated object is not False");
  }
  return validatedObject;
}

/**
 * Checks value to be a truthy entity
 * @param validatedObject
 * @param {String} [errorText] - message for error thrown if validation fails
 * @returns {*} validatedObject
 */
function truthy(validatedObject, errorText) {
  if (!validatedObject) {
    throw new ValidationError(errorText || "Validated object is not truthy");
  }
  return validatedObject;
}

/**
 * Checks value to be a falsy entity
 * @param validatedObject
 * @param {String} [errorText] - message for error thrown if validation fails
 * @returns {*} validatedObject
 */
function falsy(validatedObject, errorText) {
  if (validatedObject) {
    throw new ValidationError(errorText || "Validated object is not falsy");
  }
  return validatedObject;
}

/**
 * Checks object to have at least a given set of properties defined
 * @param validatedObject
 * @param {String[]} validatedProperties - names of properties which existence should be checked
 * @returns {*} validatedObject
 */
function withProperties(validatedObject, validatedProperties) {
  notNil(validatedObject);

  const undefinedProperties = _.filter(validatedProperties, function(property) {
    return !validatedObject.hasOwnProperty(property);
  });

  if (!_.isEmpty(undefinedProperties)) {
    throw new ValidationError(
      "Validated object doesn't have properties: " + undefinedProperties
    );
  }
  return validatedObject;
}

module.exports = {
  booleanFalse,
  booleanNonStrict,
  booleanTrue,
  falsy,
  notEmpty,
  notNil,
  number,
  positiveNumber,
  string,
  truthy,
  withProperties
};
