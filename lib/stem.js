
function stem(token) {
	var l = token.length;
	
	if (l > 3 && token.substring(l- 3) === 'ing')
		return token.substring(0, l - 3);
	
	return token;
}

module.exports = {
	stem: stem
}