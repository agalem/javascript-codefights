function avoidObstacles(inputArray) {

    
    var distance = 2;
    
    for(var j=0; j<inputArray.length; j++){
        for(var i=0; i<inputArray.length; i++){
            if(inputArray[i] % distance == 0){
                distance++;
            }
        }
    }
    return distance;
}

