function arrayChange(inputArray) {

    var count = 0;
    
    for(var i=1; i<inputArray.length; i++){
        if(inputArray[i-1] >= inputArray[i]){
            count += inputArray[i-1]+1-inputArray[i];
            inputArray[i] = inputArray[i-1]+1;
        }
    }
    
    return count;
    
}

