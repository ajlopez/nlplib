
var words = require('../lib/words');

exports['tokenize simple word'] = function (test) {
	var tokens = words.tokenize('foo');
	
	test.ok(tokens);
	test.ok(Array.isArray(tokens));
	test.equal(tokens.length, 1);
	test.equal(tokens[0], 'foo');
}

exports['tokenize two words'] = function (test) {
	var tokens = words.tokenize('foo bar');
	
	test.ok(tokens);
	test.ok(Array.isArray(tokens));
	test.equal(tokens.length, 2);
	test.equal(tokens[0], 'foo');
	test.equal(tokens[1], 'bar');
}

exports['tokenize two words with spaces'] = function (test) {
	var tokens = words.tokenize('    foo  bar    ');
	
	test.ok(tokens);
	test.ok(Array.isArray(tokens));
	test.equal(tokens.length, 2);
	test.equal(tokens[0], 'foo');
	test.equal(tokens[1], 'bar');
}

