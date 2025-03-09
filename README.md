# keyed-hash

[![CI status](https://img.shields.io/github/actions/workflow/status/philippeHuetJS/keyed-hash/ci.yml)](https://github.com/philippeHuetJS/keyed-hash/actions)
[![MIT license](https://img.shields.io/github/license/philippeHuetJS/keyed-hash)](https://github.com/philippeHuetJS/keyed-hash/blob/master/LICENSE)
[![GitHub release](https://img.shields.io/github/v/release/philippeHuetJS/keyed-hash)](https://github.com/philippeHuetJS/keyed-hash/releases)

Module to hash a password

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
console.log(hashed) // "jdGW1Lk2O4RfpS5eQl35/C6FLWSoaYxb2DZhnoerF1dCVapmkGNELA++2pZDRpe0cLiF5+Q5BVb6kIdmCFAgCA"
```

## Description

Hashes a password with SHA-512 algorithm. Returns a string in base64 format.

## Test

```sh
$ npm run test
```

## Documentation

Find [here](https://nodejs.org/en/docs/) the official documentation.

## License

[MIT](LICENSE)
