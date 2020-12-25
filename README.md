# validation-utils

Validation utils for Javascript that provide convenient way to throw a typed error if some expected condition is not satisfied

  [![NPM Version][npm-image]][npm-url]
  [![NPM Downloads][downloads-image]][downloads-url]
  [![Linux Build][circleci-image]][circleci-url]

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
- **validateHasProperties(entity, expectedProperties)** - check if entity has at least a given set of properties defined.

All validators return validated value as a result.

### License (MIT)

```
Copyright (c) 2017-2020 Igor Savin <kibertoad@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

[npm-image]: https://img.shields.io/npm/v/validation-utils.svg
[npm-url]: https://npmjs.org/package/validation-utils
[downloads-image]: https://img.shields.io/npm/dm/validation-utils.svg
[downloads-url]: https://npmjs.org/package/validation-utils
[circleci-image]: https://circleci.com/gh/kibertoad/validation-utils.svg?style=svg
[circleci-url]: https://circleci.com/gh/kibertoad/validation-utils
