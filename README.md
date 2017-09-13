# locational-segmentation [![Build Status](https://travis-ci.org/RichardLitt/locational-segmentation.svg?branch=master)](https://travis-ci.org/RichardLitt/locational-segmentation)

[![Greenkeeper badge](https://badges.greenkeeper.io/RichardLitt/locational-segmentation.svg)](https://greenkeeper.io/)

> Naïvely isolate semantically and locationally similar text


## Install

```
$ npm install --save locational-segmentation
```


## Usage

```js
var locationalSegmentation = require('locational-segmentation');

locationalSegmentation('unicorns');
//=> 'unicorns & rainbows'
```


## API

### locationalSegmentation(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global locational-segmentation
```

```
$ locational-segmentation --help

  Usage
    locational-segmentation [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ locational-segmentation
    unicorns & rainbows
    $ locational-segmentation ponies
    ponies & rainbows
```


## License

MIT © [Richard Littauer](http://burntfen.com)
