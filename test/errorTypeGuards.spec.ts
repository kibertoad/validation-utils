import { describe, expect, it } from 'vitest'
import { ValidationError } from '../lib/ValidationError'
import { isValidationError } from '../lib/errorTypeGuards'

describe('errorTypeGuards', () => {
  describe('isResponseStatusError', () => {
    it('Returns true for ResponseStatusError', () => {
      const error = new ValidationError('error')

      expect(isValidationError(error)).toBe(true)
    })

    it('Returns false for not a ResponseStatusError', () => {
      const error = new Error('error')

      expect(isValidationError(error)).toBe(false)
    })
  })
})
