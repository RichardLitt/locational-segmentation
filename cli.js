#!/usr/bin/env node
'use strict';
var meow = require('meow');
var locationalSegmentation = require('./');
var args = require('minimist')(process.argv.slice(2))

var first = args._[0]
var second = args._[1]

var usage = 'Usage' +
'\n  $ locational-segmentation [input]' +
'\n' +
'\nOptions' +
'\n  --foo  Lorem ipsum. [Default: false]' +
'\n' +
'\nExamples' +
'\n  $ locational-segmentation' +
'\n  unicorns & rainbows' +
'\n  $ locational-segmentation ponies' +
'\n  ponies & rainbows'

run()

function run() {
  // if (!first || first === 'help')
    // return console.error(usage)

  if (args.sort) {
  	locationalSegmentation.sortByLine()
  }

  if (args.parse) {
  	locationalSegmentation.pdftk2json()
  }
  // var input = getStream(first)
  // var converter = convert(second, args)
  // input.pipe(converter).pipe(ldj.serialize()).pipe(process.stdout)
}

// function getStream(uri) {
//   if (fs.existsSync(uri)) {
//     return fs.createReadStream(uri)
//   } else {
//     // shift args
//     second = first
//     return process.stdin
//   }
// }


// console.log(locationalSegmentation(cli.input[0] || 'unicorns'));
