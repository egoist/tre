import test from 'ava'
import tre from '../src'

test('nothing', t => {
  t.snapshot(tre([]))
})

test('flat files', t => {
  t.snapshot(
    tre([
      { type: 'file', name: 'foo.js' },
      { type: 'file', name: 'bar.js' },
      { type: 'file', name: 'baz.js' }
    ])
  )
})

test('simple files and folders', t => {
  t.snapshot(
    tre([
      {
        type: 'file',
        name: 'index.js'
      },
      {
        type: 'folder',
        name: 'lib',
        children: [{ type: 'file', name: 'utils.js' }]
      }
    ])
  )
})

test('nested files and folders', t => {
  const children = [
    { type: 'file', name: 'foo.js' },
    { type: 'file', name: 'bar.js' },
    {
      type: 'folder',
      name: 'baz',
      children: [{ type: 'file', name: 'bax.js' }]
    }
  ]
  const folder = { type: 'folder', name: 'bar', children }
  t.snapshot(
    tre([
      { type: 'file', name: 'foo.js' },
      folder,
      { type: 'file', name: 'baz.js' }
    ])
  )
})
