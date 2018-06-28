# ES6 Dynamic Templates 

[![Build Status](https://secure.travis-ci.org/mikemaccana/dynamic-template.png?branch=master)](https://travis-ci.org/mikemaccana/dynamic-template)

## Simple dynamic ES6 templates

Actual real ES6 templates. Just dynamic. 

## Why would I want to make ES6 templates dynamically?

Because you have a whole bunch of templates, and don't want to write a function for every possible template string. The purpose of the module is that variables are resolved later, which makes it easier to do dynamic templating. This is surprisingly tricky as `this` for TemplateStrings is a bit weird.

### Usage

Load the module:

	const fillTemplate = require('es6-dynamic-template');

Use it (use regular quotes, not backticks, for template string):

	const greeting = fillTemplate('Hi ${firstName}', {firstName: 'Joe'});
	
Returns:

	'Hi Joe'

### Tests

	mocha

### Issues

Everything works, AFAIK, if it doesn't, send a PR rather than complaining otherwise I will mock you.
