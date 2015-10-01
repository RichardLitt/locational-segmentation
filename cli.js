#!/usr/bin/env node
'use strict';
var meow = require('meow');
var locationalSegmentation = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ locational-segmentation [input]',
		'',
		'Options',
		'  --foo  Lorem ipsum. [Default: false]',
		'',
		'Examples',
		'  $ locational-segmentation',
		'  unicorns & rainbows',
		'  $ locational-segmentation ponies',
		'  ponies & rainbows'
	]
});

console.log(locationalSegmentation(cli.input[0] || 'unicorns'));
