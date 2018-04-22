
function tokenize(text) {
	var p = 0;
	var l = text.length;
	var tokens = [];
	var token = '';
	
	while (p < l) {
		while (p < l && text[p] <= ' ')
			p++;
		
		while (p < l && text[p] >= 'a' && text[p] <= 'z')
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

