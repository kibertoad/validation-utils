/**
 * Represent an value validation error
 * @class ValidationError
 * @extends {Error}
 */
export default class ValidationError extends Error {
  public constructor(message: string) {
    super(message)
  }
}
