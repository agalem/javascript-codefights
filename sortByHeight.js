function sortByHeight(a) {

    for(var i=0; i<a.length;i++){
        if(a[i]!=-1){
            for(var j=0; j<a.length-1;j++){
                if(a[i]<a[j]){
                    var temp = a[j];
                    a[j]=a[i];
                    a[i]= temp;
                }
            }
        }
    }
    
    return a;
    
}

