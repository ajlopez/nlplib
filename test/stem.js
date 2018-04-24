
var stem = require('../lib/stem');

exports['stem short word'] = function (test) {
	var result = stem.stem('eat');
	
	test.equal(result, 'eat');
}

exports['stem gerund'] = function (test) {
	var result = stem.stem('eating');
	
	test.equal(result, 'eat');
}

exports['stem gerund with double consonant'] = function (test) {
	var result = stem.stem('shopping');	
	test.equal(result, 'shop');
	var result = stem.stem('stemming');	
	test.equal(result, 'stem');
}


