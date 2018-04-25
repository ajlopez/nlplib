
function stem(token) {
	var l = token.length;
	
	if (l <= 3)
		return token;
	
	if (token[l - 1] === 's') {
		token = token.substring(0, l - 1);
		l--;
	}
	
	if (token.substring(l- 3) === 'ing') {
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