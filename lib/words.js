
function isSpace(ch) {
	return ch <= ' ';
}

function isLetter(ch) {
	return ch >= 'a' && ch <= 'z';
}

function tokenize(text) {
	var p = 0;
	var l = text.length;
	var tokens = [];
	var token = '';
	
	while (p < l) {
		while (p < l && isSpace(text[p]))
			p++;
		
		if (p < l && !isLetter(text[p])) {
			tokens.push(text[p++]);
			token = '';
		}
		
		while (p < l && isLetter(text[p]))
			token += text[p++];
		
		if (token.length)
			tokens.push(token);
		
		token = '';
	}
	
	return tokens;
}

module.exports = {
	tokenize: tokenize
}

