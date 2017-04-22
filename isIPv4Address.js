function isIPv4Address(inputString) {
    
    var arr = inputString.split('.');
    var mistakes = 0;
    var length = 4;
    
    if(arr.length!=length){
        return false;
    } else {
        for(var i=0; i<length; i++){
            if(arr[i] < 0 || arr[i] > 255 || isNaN(arr[i]) || arr[i] == '') {
                mistakes ++;
            }
        }
    }
	
    if(mistakes == 0){
        return true;
    } else {
        return false;
    }
}

