function adjacentElementsProduct(inputArray) {
 
    var largest = inputArray[0]*inputArray[1];
    
    for(var i=1; i<inputArray.length; i++){
        var pair = inputArray[i]*inputArray[i+1];
        if(pair > largest){
            largest = pair;
        } 
    }
    
    
    return largest;
}


