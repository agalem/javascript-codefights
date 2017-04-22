function reverseParentheses(s) {

    var pos = 0;
    var sArray = s.split("");
    for(var i = pos; i < sArray.length; i++) {
        if(sArray[i] == '('){
            pos = i;
        }
        else if(sArray[i] == ')') {
            var reverseArray = s.substring(pos + 1, i).split("").reverse(); 
            var subParenRe = reverseArray.join(""); 
            s = s.substring(0, pos) + subParenRe + s.substring(i + 1, s.length);
            sArray = s.split("");
            i=-1;
        }
    }
    return s;
    
}

