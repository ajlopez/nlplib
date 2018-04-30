
function hasVowel(token, ignore) {
	var l = token.length - ignore;
	
	for (var k = 0; k < l; k++)
		if ("aeiou".indexOf(token[k]) >= 0)
			return true;
		
	return false;
}

function stem(token) {
	var l = token.length;
	
	if (l <= 3)
		return token;
	
	if (l >= 4 && token.substring(l - 4) === 'sses') {
		token = token.substring(0, l - 2);
		l -= 2;
	}
	else if (l >= 4 && token.substring(l - 3) === 'ies') {
		token = token.substring(0, l - 2);
		l -= 2;
	}
	else if (token.substring(l - 2) === 'ss')
		;
	else if (token[l - 1] === 's') {
		token = token.substring(0, l - 1);
		l--;
	}
	
	if (token.substring(l - 3) === 'eed') {
		token = token.substring(0, l - 1);
		l--;
	}
	else if (token.substring(l - 2) === 'ed' && hasVowel(token, 2)) {
		token = token.substring(0, l - 2);
		l -= 2;
	}
	
	if (token.substring(l - 3) === 'ing' && hasVowel(token, 3)) {
		var result = token.substring(0, l - 3);
		
		l = result.length;
		
		if (l > 2 && result[l - 2] === result[l - 1])
			result = result.substring(0, l - 1);
		
		return result;
	}
	
	return token;
}

module.exports = {
	stem: stem
}