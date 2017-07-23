// eslint-disable-next-line no-unused-vars
import assign from 'nano-assign'

const CHARS = {
  continue: '├──',
  end: '└──',
  line: '│'
}

function flatten(arr, depth = 0) {
  let res = []
  for (const item of arr) {
    res.push({ type: item.type, name: item.name, depth })
    if (item.children) {
      res = res.concat(flatten(item.children, depth + 1))
    }
  }
  return res
}

function repeat(char, count) {
  let res = ''
  while (count--) {
    res += char
  }
  return res
}

function tre(files = [], opts = {}) {
  const rootName = opts.root || '.'
  const dot = opts.dot
  const chars = { ...CHARS, ...opts.chars }

  files = flatten(files)
  const actualFiles = files.filter(item => {
    return dot || item.type !== 'file' ? true : !/^\.[^.]+$/.test(item.name)
  })

  return (
    `${rootName}\n` +
    actualFiles
      .map((item, index) => {
        const isLast = index === actualFiles.length - 1
        const next = actualFiles[index + 1]
        const char =
          next && next.depth === item.depth ? chars.continue : chars.end
        const childPrefix = item.depth > 0 && !isLast ? chars.line : ''
        const prefix = `${childPrefix}${repeat(' ', item.depth * 2)}${char}`

        return `${prefix} ${item.name}`
      })
      .join('\n')
  )
}

export default tre
