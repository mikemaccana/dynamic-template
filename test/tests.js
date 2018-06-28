const makeTemplate = require('../index.js'),
	assert = require('assert')

suite(`ES6 template literals`, function(){
	test(`work`, function(){
		const greeting = makeTemplate('Hi ${firstName}', {firstName: 'Joe'});
		assert.equal(greeting, 'Hi Joe')
	})
})
