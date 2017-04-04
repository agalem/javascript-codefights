function allLongestStrings(inputArray) {

    var longest=0;
    var newArray = new Array();
    
    function longestInput(inputArray){
        for(var i=0; i<inputArray.length; i++){
            if(inputArray[i].length > longest){
                longest = inputArray[i].length;
            }
        }
        return longest;
    }
    
    longestInput(inputArray);
    
    for(var i=0; i<inputArray.length; i++){
        if(inputArray[i].length == longest){
            newArray.push(inputArray[i]);
        }
    }
    
    return newArray;
}

