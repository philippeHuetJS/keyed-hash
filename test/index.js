'use strict'

var hmac = require('..')
var assert = require('assert')

describe('hmac', function () {
  it('should require an argument', function () {
    var hashed = hmac.bind(null)

    assert.throws(hashed, /The "pwd" argument.*required./)
  })

  it('should be of type string', function () {
    var hashed = hmac.bind(null, { prop: 'foo' })

    assert.throws(hashed, /The "pwd" argument.*string./)
  })

  it('should generate a hmac', function () {
    var hashed = hmac('foo')

    assert.ok(typeof hashed === 'string')
    assert.ok(hashed.length > 0)
    assert.ok(/^[a-zA-Z0-9+/]+={0,2}$/.test(hashed))
  })

  it('should generate many hmac', function () {
    var hashed1 = hmac('foo')
    var hashed2 = hmac('foo')

    assert.notStrictEqual(hashed1, hashed2)
  })
})
