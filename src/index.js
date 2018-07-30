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

  files = flatten(files)
  const actualFiles = files.filter(item => {
    return dot ? true : !/^\.[^.]+$/.test(item.name)
  })

  return (
    `${rootName}\n` +
    actualFiles
      .map((item, index) => {
        const isLast = index === actualFiles.length - 1
        const next = actualFiles[index + 1]
        const char =
          next && next.depth === item.depth ? CHARS.continue : CHARS.end
        const linePrefix = item.depth > 0 && !isLast ? CHARS.line : ''
        const prefix = `${linePrefix}${repeat(
          ' ',
          item.depth === 0 ? 0 : 3 + (item.depth - 1) * 4 + (linePrefix ? 0 : 1)
        )}${char}`

        return `${prefix} ${item.name}`
      })
      .join('\n')
  )
}

export default tre
