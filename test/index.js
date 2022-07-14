'use strict'

var hmac = require('..')
var assert = require('assert')

describe('hmac(pwd)', function () {
  it('should require an argument', function () {
    var hashed = hmac.bind(null)
    assert.throws(hashed, /The "pwd" argument.*required./)
  })
  it('should be of type string', function () {
    var hashed = hmac.bind(null, Buffer.from('foo'))
    assert.throws(hashed, /The "pwd" argument.*string./)
  })
  it('should generate a hmac', function () {
    var hashed = hmac('foo')
    assert.ok(typeof hashed === 'string')
    assert.deepStrictEqual(hashed.length, 86)
  })
})
