
var stem = require('../lib/stem');

exports['stem short word'] = function (test) {
	var result = stem.stem('eat');
	
	test.equal(result, 'eat');
}

exports['stem gerund'] = function (test) {
	var result = stem.stem('eating');
	
	test.equal(result, 'eat');
}



