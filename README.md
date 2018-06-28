# ES6 Dynamic Templates 

[![Build Status](https://secure.travis-ci.org/mikemaccana/dynamic-template.png?branch=master)](https://travis-ci.org/mikemaccana/dynamic-template)

## Simple dynamic ES6 templates

Actual real ES6 templates. Just dynamic.

### Usage

Load the module:

	const makeTemplate = require('es6-dynamic-template');

Use it (use regular quotes, not backticks, for template string):

	const greeting = makeTemplate('Hi ${firstName}', {firstName: 'Joe'});
	
Returns:

	'Hi Joe'

### Tests

	mocha

### Issues

Everything works, AFAIK, if it doesn't, send a PR rather than complaining otherwise I will mock you.
