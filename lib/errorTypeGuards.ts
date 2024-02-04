import type { ValidationError } from './ValidationError'

export function isValidationError(entity: unknown): entity is ValidationError {
  return 'isValidationError' in (entity as ValidationError)
}
