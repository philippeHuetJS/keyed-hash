/*!
 * keyed-hash
 * Copyright(c) 2022 Philippe Huet
 * MIT Licensed
 */

'use strict'

/**
 * Module dependencies.
 * @private
 */

var crypto = require('crypto')

/**
 * Module exports.
 * @public
 */

module.exports = hmac

/**
 * Function to generate a HMAC.
 *
 * @param {String} pwd - The password to hash with SHA-512 algorithm.
 * @param {String} [key] - Optional key for HMAC.
 * @returns {String} - The hashed password in base64 format.
 * @throws {TypeError} - In case of invalid input.
 * @public
 */

function hmac(pwd, key = generateKey()) {
  if (arguments.length === 0) {
    throw new TypeError('The "pwd" argument is required.')
  }

  if (!pwd || typeof pwd !== 'string') {
    throw new TypeError('The "pwd" argument must be a string.')
  }

  return crypto
    .createHmac('sha512', key)
    .update(pwd)
    .digest('base64')
    .replace(/=+$/, '')
}

/**
 * Function to generate a key when no key is provided.
 *
 * @returns {String} - The generated key in hexadecimal format.
 * @private
 */

function generateKey() {
  return crypto
    .generateKeySync('hmac', {
      length: 512
    })
    .export()
    .toString('hex')
}
