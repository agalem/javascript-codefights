function alphabeticShift(inputString) {
    var chars = inputString.split("");
	
    for (var i = 0; i < chars.length; i++) {
		
        var number = chars[i].charCodeAt() - 'a'.charCodeAt();
		
        number = (number + 1) % 26; 
		
        chars[i] = String.fromCharCode(number + 'a'.charCodeAt());
    }
	
    return chars.join("");
}