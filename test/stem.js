
var stem = require('../lib/stem');

exports['stem short word'] = function (test) {
	var result = stem.stem('eat');
	
	test.equal(result, 'eat');
}

exports['remove s'] = function (test) {
	var result = stem.stem('cats');
	
	test.equal(result, 'cat');
}

exports['remove sses to ss'] = function (test) {
	var result = stem.stem('caresses');
	
	test.equal(result, 'caress');
}

exports['ss to ss'] = function (test) {
	var result = stem.stem('caress');
	
	test.equal(result, 'caress');
}

exports['ies to i'] = function (test) {
	var result = stem.stem('ponies');
	
	test.equal(result, 'poni');
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


