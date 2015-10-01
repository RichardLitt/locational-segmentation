'use strict'

var fs = require('fs')
var xmlNodes = require('xml-nodes')
var xmlObjects = require('xml-objects')
var through2 = require('through2')
var splitStyle = require('inline-style-2-json')

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
      console.log(all)
    })
}

exports.pdftk2json = module.exports.pdftk2json = pdftk2json
