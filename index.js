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
 * @param {String} otp - The password to hash with SHA-512 algorithm.
 * @param {String} [key] - Optional key for HMAC.
 * @returns {String} - The hashed password in base64 format.
 * @throws {Error} - In case of invalid input.
 * @public
 */

function hmac(otp, key = generateKey()) {
  if (!otp) {
    throw new TypeError('The "otp" argument is required.')
  }

  if (typeof otp !== 'string') {
    throw new TypeError('The "otp" argument must be a string.')
  }

  // generate HMAC
  return crypto
    .createHmac('sha512', key)
    .update(otp)
    .digest('base64')
    .replace(/=+$/, '')
}

/**
 * Function to generate a key for HMAC.
 *
 * @returns {String} - The generated key in hexadecimal format.
 * @private
 */

function generateKey() {
  // generate HMAC key
  return crypto
    .generateKeySync('hmac', {
      length: 512
    })
    .export()
    .toString('hex')
}
