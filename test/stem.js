
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

exports['eed to eed if stem has measure 0'] = function (test) {
	var result = stem.stem('feed');	
	
	test.equal(result, 'feed');
}

exports['remove ed'] = function (test) {
	var result = stem.stem('plastered');	
	
	test.equal(result, 'plaster');
}

exports['no ed removal if no vowel in stem'] = function (test) {
	var result = stem.stem('bled');	
	
	test.equal(result, 'bled');
}

exports['ated to ate then remove ate'] = function (test) {
	var result = stem.stem('conflated');	
	
	test.equal(result, 'confl');
}

exports['bled to ble'] = function (test) {
	var result = stem.stem('troubled');	
	
	test.equal(result, 'trouble');
}

exports['ized to ize'] = function (test) {
	var result = stem.stem('sized');	
	
	test.equal(result, 'size');
}

exports['ational to e then remove ate'] = function (test) {
	var result = stem.stem('relational');	
	
	test.equal(result, 'rel');
}

exports['ational to ational if stem has no vowel'] = function (test) {
	var result = stem.stem('rational');	
	
	test.equal(result, 'rational');
}

exports['fulness to ful'] = function (test) {
	var result = stem.stem('hopefulness');	
	
	test.equal(result, 'hope');
}

exports['ousness to ous'] = function (test) {
	var result = stem.stem('callousness');	
	
	test.equal(result, 'callous');
}

exports['remove ful suffix'] = function (test) {
	var result = stem.stem('hopeful');	
	
	test.equal(result, 'hope');
}

exports['remove ness suffix'] = function (test) {
	var result = stem.stem('goodness');	
	
	test.equal(result, 'good');
}

exports['remove ance suffix'] = function (test) {
	var result = stem.stem('allowance');	
	
	test.equal(result, 'allow');
}

exports['remove ence suffix'] = function (test) {
	var result = stem.stem('inference');	
	
	test.equal(result, 'infer');
}

exports['remove able suffix'] = function (test) {
	var result = stem.stem('adjustable');	
	
	test.equal(result, 'adjust');
}

exports['remove ible suffix'] = function (test) {
	var result = stem.stem('defensible');	
	
	test.equal(result, 'defens');
}

exports['remove ant suffix'] = function (test) {
	var result = stem.stem('irritant');	
	
	test.equal(result, 'irrit');
}

exports['remove ement suffix'] = function (test) {
	var result = stem.stem('replacement');	
	
	test.equal(result, 'replac');
}

exports['remove ment suffix'] = function (test) {
	var result = stem.stem('adjustment');	
	
	test.equal(result, 'adjust');
}

exports['remove ent suffix'] = function (test) {
	var result = stem.stem('dependent');	
	
	test.equal(result, 'depend');
}

exports['remove ou suffix'] = function (test) {
	var result = stem.stem('homologou');	
	
	test.equal(result, 'homolog');
}

exports['remove ous suffix'] = function (test) {
	var result = stem.stem('homologous');	
	
	test.equal(result, 'homolog');
}

exports['remove ive suffix'] = function (test) {
	var result = stem.stem('effective');	
	
	test.equal(result, 'effect');
}

exports['remove ive suffix from sensitive'] = function (test) {
	var result = stem.stem('sensitive');	
	
	test.equal(result, 'sensit');
}

exports['replace aliti suffix by al'] = function (test) {
	var result = stem.stem('formaliti');	
	
	test.equal(result, 'formal');
}

exports['replace iviti suffix by ive and then remove ive'] = function (test) {
	var result = stem.stem('sensitiviti');	
	
	test.equal(result, 'sensit');
}

exports['remove ate suffix'] = function (test) {
	var result = stem.stem('activate');	
	
	test.equal(result, 'activ');
}

exports['remove iti suffix'] = function (test) {
	var result = stem.stem('angulariti');	
	
	test.equal(result, 'angular');
}

exports['remove ize suffix'] = function (test) {
	var result = stem.stem('bowdlerize');	
	
	test.equal(result, 'bowdler');
}
