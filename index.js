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
 * Module variables.
 * @private
 */

var key = crypto.randomBytes(32)

/**
 * Function to generate a hmac.
 *
 * @param {String} pwd
 * @returns {String}
 * @public
 */

function hmac (pwd) {
  if (!pwd) {
    throw new TypeError('The "pwd" argument is required.')
  }
  if (typeof pwd !== 'string') {
    throw new TypeError('The "pwd" argument must be a string.')
  }
  // generate hmac
  return crypto
    .createHmac('sha512', key)
    .update(pwd)
    .digest('base64')
    .replace(/=+$/, '')
}
