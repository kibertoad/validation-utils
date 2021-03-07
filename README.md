# validation-utils

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
![](https://github.com/kibertoad/validation-utils/workflows/unit-tests/badge.svg)
[![Coverage Status](https://coveralls.io/repos/kibertoad/validation-utils/badge.svg?branch=master)](https://coveralls.io/r/kibertoad/validation-utils?branch=master)


Validation utils for Javascript that provide convenient way to throw a typed error if some expected condition is not satisfied.  

Node.JS 6+ is supported.

### Getting started

Install the library with `npm install validation-utils`

```javascript
const { validateNotEmpty } = require('validation-utils');

function init (email) {
  this.email = validateNotEmpty(email); //will throw an error if email is not provided
}
```

#### TypeScript

```javascript
import { validateNotEmpty } from 'validation-utils';
```

### Validators

- **validateArray(entity [, errorText])** - check if entity is an array.
- **validateBoolean(entity [, errorText])** - check if entity is a boolean.
- **validateBooleanNonStrict(entity [, errorText])** - check if entity is a boolean or a (case-insensitive) 'true' or 'false' string.
- **validateBooleanFalse(entity [, errorText])** - check if entity is a boolean with value False.
- **validateBooleanTrue(entity [, errorText])** - check if entity is a boolean with value True.
- **validateDate(entity [, errorText])** - check if entity is an instance of Date.
- **validateEqual(entity, expectedEqualEntity [, errorText])** - check if entity is equal to the expected one (compared with ===).
- **validateOneOf(entity, expectedOneOfEntities [, errorText])** - check if entity is equal to one of the expected ones (indexOf !== -1).
- **validateSomeNotNil(entities [, errorText])** - check if at least one of the given entities are not null or undefined.
- **validateFalsy(entity [, errorText])** - check if entity is falsy.
- **validateFunction(entity [, errorText])** - check if entity is a function.
- **validateInheritsFrom(entityClass, expectedParentClass [, errorText])** - check if class inherits from a given class.
- **validateInstanceOf(entity, expectedClass [, errorText])** - check if entity is an instance of a given class.
- **validateNotEmpty(entity [, errorText])** - check if entity is not an empty Object, String or Array.
- **validateNotNil(entity [, errorText])** - check if entity is not null or undefined.
- **validateNil(entity [, errorText])** - check if entity is null or undefined.
- **validateNumber(entity [, errorText])** - check if entity is a number.
- **validatePositiveNumber(entity [, errorText])** - check if entity is a positive number.
- **validateNegativeNumber(entity [, errorText])** - check if entity is a negative number.
- **validateGreaterThan(number, threshold [, errorText])** - check if entity is a number than is greater than the specified threshold.
- **validateLessThan(number, threshold [, errorText])** - check if entity is a number than is less than the specified threshold.
- **validateString(entity [, errorText])** - check if entity is a string.
- **validateObject(entity [, errorText])** - check if entity is an object.
- **validateTruthy(entity [, errorText])** - check if entity is truthy.
- **validateHasProperties(entity, expectedProperties[, errorText])** - check if entity has at least a given set of properties defined.
- **validateNotNilProperties(entity, expectedProperties[, errorText])** - check if none of specified properties are null or undefined for the entity.

All validators return validated value as a result.

[npm-image]: https://img.shields.io/npm/v/validation-utils.svg
[npm-url]: https://npmjs.org/package/validation-utils
[downloads-image]: https://img.shields.io/npm/dm/validation-utils.svg
[downloads-url]: https://npmjs.org/package/validation-utils
