# validation-utils

Validation utils for Javascript that provide convenient way to throw a typed error if some expected condition is not satisfied

  [![NPM Version][npm-image]][npm-url]
  [![NPM Downloads][downloads-image]][downloads-url]
  [![Linux Build][travis-image]][travis-url]

### Server-side usage

Install the library with `npm install validation-utils`

```javascript
const validate = require('validation-utils').validationHelper;

function init (email) {
  this.email = validate.notEmpty(email); //will throw an error if email is not provided
}
```

#### TypeScript

```javascript
import validationHelper from 'validation-utils';
```

### Validators

- **array(entity [, errorText])** - check if entity is an array.
- **boolean_(entity [, errorText])** - check if entity is a boolean.
- **booleanNonStrict(entity [, errorText])** - check if entity is a boolean or a (case-insensitive) 'true' or 'false' string.
- **booleanFalse(entity [, errorText])** - check if entity is a boolean with value False.
- **booleanTrue(entity [, errorText])** - check if entity is a boolean with value True.
- **date(entity [, errorText])** - check if entity is an instance of Date.
- **equal(entity, expectedEqualEntity [, errorText])** - check if entity is equal to the expected one (compared with ===).
- **falsy(entity [, errorText])** - check if entity is falsy.
- **function_(entity [, errorText])** - check if entity is a function.
- **inheritsFrom(entityClass, expectedParentClass [, errorText])** - check if class inherits from a given class.
- **instanceOf(entity, expectedClass [, errorText])** - check if entity is an instance of a given class.
- **notEmpty(entity [, errorText])** - check if entity is not an empty Object, String or Array.
- **notNil(entity [, errorText])** - check if entity is not null or undefined.
- **nil(entity [, errorText])** - check if entity is null or undefined.
- **number(entity [, errorText])** - check if entity is a number.
- **positiveNumber(entity [, errorText])** - check if entity is a positive number.
- **negativeNumber(entity [, errorText])** - check if entity is a negative number.
- **greaterThan(number, threshold [, errorText])** - check if entity is a number than is greater than the specified threshold.
- **lessThan(number, threshold [, errorText])** - check if entity is a number than is less than the specified threshold.
- **string(entity [, errorText])** - check if entity is a string.
- **object_(entity [, errorText])** - check if entity is an object.
- **truthy(entity [, errorText])** - check if entity is truthy.
- **withProperties(entity, expectedProperties)** - check if entity has at least a given set of properties defined.

All validators return validated value as a result.

### Tests

```sh
$ npm test
```

### License (MIT)

```
Copyright (c) 2017-2019 Igor Savin <kibertoad@gmail.com>

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
[travis-image]: https://img.shields.io/travis/kibertoad/validation-utils/master.svg?label=linux
[travis-url]: https://travis-ci.org/kibertoad/validation-utils
