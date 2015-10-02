'use strict'

var fs = require('fs')
var xmlNodes = require('xml-nodes')
var xmlObjects = require('xml-objects')
var through2 = require('through2')
var splitStyle = require('inline-style-2-json')
var _ = require('lodash')

var pdftk2json = function () {
  var all = []

  fs.createReadStream(__dirname + '/examples/test.html')
    .pipe(xmlNodes('span'))
    .pipe(xmlObjects({explicitRoot: false, explicitArray: false, mergeAttrs: true}))
    .pipe(through2.obj(function (chunk, enc, callback) {
      chunk.style = splitStyle(chunk.style)
      this.push(chunk)
      callback()
    }))
    .on('data', function (data) {
      all.push(data)
    })
    .on('end', function (data) {
      console.log(JSON.stringify(all))
    })
}

var sortByLine = function () {
  // console.log('Hi!')
  fs.readFile(__dirname + '/examples/data.json', 'utf8', function (err, data) {
    if (err) {
      console.log('err', err)
    }
    var doc = []

    // Group them by horizontal line
    var hLineArr = _.groupBy(JSON.parse(data), function (obj) {
      return Math.floor(obj.style.top)
    })

    var findCharWidth = function (hLineArr) {
      // Find average gap of characters by looking at average amount of chars
      // For the longest lines.
      // Find longest groupings
      console.log(hLineArr)
    }

    findCharWidth(hLineArr)

    // To be used if the preceding line is the same paragraph as the
    // current line
    var recentLine = ''

    // Flatten and join the lines
    _.forEach(hLineArr, function (item) {
      var line = ''

      // Assume all lines on the same horizontal plane are the same
      // Unless there is a gap wider than three characters.
      // Join without ambiguity
      item.forEach(function (char) {
        // If there are no gaps between lines
        line = line + char._
        // If there are gaps between lines larger than findCharWidth x3
      })

      // If item[0] is at the same place as the previous hLineArr item[0]
      // Assume they are in the same place
      // if the last item is at the same place
      // Assume they are in the same paragraph

      doc.push(line)
    })

    console.log(doc)
  })
}

exports.sortByLine = module.exports.sortByLine = sortByLine
exports.pdftk2json = module.exports.pdftk2json = pdftk2json

