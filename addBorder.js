function addBorder(picture) {

   var first = [];
    var last = [];
    var arr = [];
    var word = picture[0];
    
    if (word.length == 1){
        for(var i=0; i<word.length + 2; i++){
            first.push('*');
            last.push('*');
        }
    } else if (word.length > 1){
        for(var i=0; i<word.length + 2; i++){
            first.push('*');
            last.push('*');
        }
    }
    
    var firstRow = first.join('');
    var lastRow = last.join('');
    
    for(i=1; i<picture.length + 2; i++){
        arr[i] = '*'+picture[i-1]+'*';
    }
    
    arr[0] = firstRow;
    arr[picture.length+1] = lastRow;
    
    return arr;
    
    
}

