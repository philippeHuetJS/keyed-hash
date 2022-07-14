# keyed-hash

[![CI status](https://img.shields.io/github/workflow/status/philippeHuetJS/keyed-hash/GitHub%20CI)](https://github.com/philippeHuetJS/keyed-hash/actions)
[![MIT license](https://img.shields.io/github/license/philippeHuetJS/keyed-hash)](https://github.com/philippeHuetJS/keyed-hash/blob/master/LICENSE)
[![GitHub release](https://img.shields.io/github/v/release/philippeHuetJS/keyed-hash)](https://github.com/philippeHuetJS/keyed-hash/releases)

Helper to hash a password

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the [npm](https://www.npmjs.com/) registry.

```sh
$ npm install keyed-hash
```

## API

```js
var hmac = require('keyed-hash')
```

TypeScript:

```typescript
import hmac from 'keyed-hash'
```

### hmac(pwd)

```js
var hashed = hmac('foo')
console.log(hashed) // "HKNjGAlT8SEpJuPqmml2ujIE6yZ2DIsXnlchguz6xDQVzTZ3ZhbkfOoAvLy4uZIzj/DmmX89e41XknbQ2kq1nA"
```

Hashes a password with SHA-3 algorithm. Returns a string with base64 encoding.

## Testing

```sh
$ npm run test
```

## Documentation

Find [here](https://nodejs.org/en/docs/) the official documentation.

## License

[MIT](LICENSE)
