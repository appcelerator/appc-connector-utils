const test = require('tap').test
const modelMetadata = require('../data/modelMetadata1')
const metadataSchema = require('../../lib/model/metadataSchema')

const dataValidator = require('../../lib/tools/dataValidator')

test('validate - ok', function (t) {
  const metadata = modelMetadata['GoodMetadata']
  const result = dataValidator.validate(metadata, metadataSchema)
  t.same(result.value, metadata)
  t.end()
})

test('validate - ko', function (t) {
  const metadata = modelMetadata['BadMetadata']
  const result = dataValidator.validate(metadata, metadataSchema)
  t.ok(result.error)
  t.equal(result.error.name, 'ValidationError')
  t.end()
})

test('validate - missing metadata and schema', function (t) {
  t.throws(dataValidator.validate)
  t.end()
})

test('validate - missing schema', function (t) {
  t.throws(validate)
  t.end()
  function validate () {
    const metadata = modelMetadata['GoodMetadata']
    dataValidator.validate(metadata)
  }
})
