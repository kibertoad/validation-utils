/**
 * Represent an value validation error
 * @class ValidationError
 * @extends {Error}
 */
export class ValidationError extends Error {
  public isValidationError = 'true'

  public constructor(message: string) {
    super(message)
  }
}
