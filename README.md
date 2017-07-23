# tre

[![NPM version](https://img.shields.io/npm/v/tre.svg?style=flat)](https://npmjs.com/package/tre) [![NPM downloads](https://img.shields.io/npm/dm/tre.svg?style=flat)](https://npmjs.com/package/tre) [![CircleCI](https://circleci.com/gh/egoist/tre/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/tre/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

## Install

```bash
npm i --save tre
```

## Usage

```js
const tre = require('tre')

tre([
  { 
    type: 'file', name: 'index.js' 
  },
  { 
    type: 'folder', name: 'lib', children: [
      { type: 'file', name: 'utils.js' }
    ] 
  }
])
//=> ⇣⇣⇣
.
├── index.js
└── lib 
  └── utils.js
```

## API

### tre(files, [opts])

#### files

Type: `Array`<br>
Default: `[]`

An array of File/Folder.

File: `{ type: 'file', name: 'file name' }`<br>
Folder: `{ type: 'folder', name: 'folder name' }`

#### opts

##### root

Type: `string`<br>
Default: `.`

The root folder name which will be shown at the top the generated file tree.

##### chars

Type: `object`<br>
Default:

```js
{
  continue: '├──',
  end: '└──',
  line: '│'
}
```

##### dot

Type: `boolean`<br>
Default: `undefined`

Whether to include dot files. Excluding by default.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**tre** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/tre/contributors)).

> [egoist.moe](https://egoist.moe) · GitHub [@egoist](https://github.com/egoist) · Twitter [@rem_rin_rin](https://twitter.com/rem_rin_rin)
