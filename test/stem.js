
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

exports['remove ing'] = function (test) {
	var result = stem.stem('eating');
	
	test.equal(result, 'eat');
}

exports['not remove ing if stem has no vowel'] = function (test) {
	var result = stem.stem('sing');
	
	test.equal(result, 'sing');
}

exports['remove ing with double consonant'] = function (test) {
	var result = stem.stem('shopping');	
	test.equal(result, 'shop');
	var result = stem.stem('stemming');	
	test.equal(result, 'stem');
}

exports['remove ing with double l, s, z'] = function (test) {
	var result = stem.stem('falling');	
	test.equal(result, 'fall');
	var result = stem.stem('kissing');	
	test.equal(result, 'kiss');
	var result = stem.stem('fizzed');	
	test.equal(result, 'fizz');
}

exports['eed to ee'] = function (test) {
	var result = stem.stem('agreed');	
	
	test.equal(result, 'agree');
}

exports['remove ed'] = function (test) {
	var result = stem.stem('plastered');	
	
	test.equal(result, 'plaster');
}

exports['no ed removal if no vowel in stem'] = function (test) {
	var result = stem.stem('bled');	
	
	test.equal(result, 'bled');
}

exports['ated to ate'] = function (test) {
	var result = stem.stem('conflated');	
	
	test.equal(result, 'conflate');
}

exports['bled to ble'] = function (test) {
	var result = stem.stem('troubled');	
	
	test.equal(result, 'trouble');
}

exports['ized to ize'] = function (test) {
	var result = stem.stem('sized');	
	
	test.equal(result, 'size');
}

exports['ational to e'] = function (test) {
	var result = stem.stem('relational');	
	
	test.equal(result, 'relate');
}

exports['ational to ational if stem has no vowel'] = function (test) {
	var result = stem.stem('rational');	
	
	test.equal(result, 'rational');
}

exports['fulness to ful'] = function (test) {
	var result = stem.stem('hopefulness');	
	
	test.equal(result, 'hopeful');
}

