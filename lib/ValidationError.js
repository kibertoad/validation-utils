/**
 * Represent an value validation error
 * @class ValidationError
 * @extends {Error}
 */
class ValidationError extends Error {
  constructor(message) {
    super(message);
  }
}

module.exports = ValidationError;
