function minesweeper(matrix) {
    
    var sol = new Array([matrix.length][matrix.length]);
    
    for(var i=0; i<matrix.length; i++){
        for(var j=0; j<matrix[0].length; j++){
            for(var ii = Math.max(0, i-1); ii <= Math.min(i+1, matrix.length-1); ii++){
                for(var jj=Math.max(0, j-1); jj<= Math.min(j+1, matrix[0].length-1); jj++) {
                    if(matrix[ii][jj] && (i!=ii || jj !=j)) {
                        sol[i][j]++;
                    }
                }
            }
        }
        return sol;
    }