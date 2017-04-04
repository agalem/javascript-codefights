function matrixElementsSum(matrix) {
    
    function changeNumber(matrix){
        for(var i=0; i<matrix.length; i++){
            for(var j=0; j<matrix[i].length; j++){
                if(matrix[i][j] == 0 && i != matrix.length-1){
                    matrix[i+1][j] = 0;
                }
            }
        }
    }
    
    changeNumber(matrix);
    
    var sum = 0;
    
    for(var i=0; i<matrix.length; i++){
        for (var j=0; j<matrix[i].length; j++){
            if(matrix[i][j] != 0){
                sum = sum + matrix[i][j];
            }
        }
    }
    
    return sum;
}

