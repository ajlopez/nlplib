
function isVowel(ch) {
	return "aeiou".indexOf(ch) >= 0;
}

function hasVowel(token, ignore) {
	var l = token.length - ignore;
	
	for (var k = 0; k < l; k++)
		if (isVowel(token[k]))
			return true;
		
	return false;
}

function hasMeasure(token, ignore) {
	var l = token.length - ignore;
	
	for (var k = 0; k < l - 1; k++)
		if (isVowel(token[k]) && !isVowel(token[k + 1]))
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
		if (hasMeasure(token, 3)) {
			token = token.substring(0, l - 1);
			l--;
		}
	}
	else if (token.substring(l - 2) === 'ed' && hasVowel(token, 2)) {
		token = token.substring(0, l - 2);
		l -= 2;
		
		var ending = token.substring(l - 2);
		
		if (ending === 'at' || ending === 'bl' || ending === 'iz') {
			token += 'e';
			l++;
		}
	}
	
	if (token.substring(l - 3) === 'ing' && hasVowel(token, 3)) {
		var token = token.substring(0, l - 3);
		
		l -= 3;
		
		if (l > 2 && token[l - 2] === token[l - 1]) {
			var ch = token[l - 1];
			
			if (ch !== 's' && ch !== 'z' && ch !== 'l') {
				token = token.substring(0, l - 1);
                l--;
            }
		}
		
		return token;
	}
	
	if (l > 7 && token.substring(l - 7) === 'ational' && hasVowel(token, 7)) {
		token = token.substring(0, l - 5) + 'e';
		
		l = l - 4;
	}

	if (l > 7 && token.substring(l - 7) === 'fulness' && hasVowel(token, 7)) {
		token = token.substring(0, l - 4);
		
		l = l - 4;
	}

	if (l > 7 && token.substring(l - 7) === 'ousness') {
		token = token.substring(0, l - 4);
		
		l = l - 4;
	}

	if (l > 3 && token.substring(l - 3) === 'ful') {
		token = token.substring(0, l - 3);
		
		l = l - 3;
	}

	if (l > 4 && token.substring(l - 4) === 'ness' && hasMeasure(token, 4)) {
		token = token.substring(0, l - 4);
		
		l = l - 4;
	}

	return token;
}

module.exports = {
	stem: stem
}