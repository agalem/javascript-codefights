function alternatingSums(a) {

    var firstTeam = [];
    var secondTeam = [];
    
    for(var i=0; i<a.length; i++){
        if(i%2 != 0){
            secondTeam.push(a[i]);
        } else {
            firstTeam.push(a[i]);
        }
    }
    
    for(i=0; i<firstTeam.length; i++){
        var firstSum = firstTeam.reduce(function(a,b){
            return a+b;
        });
    }
    
    for(i=0; i<secondTeam.length; i++){
        var secondSum = secondTeam.reduce(function(a,b){
            return a+b;
        });
    }
    
    var array = [];
    if(a.length > 1){
        array = [firstSum, secondSum];
    } else {
        array = [firstSum, 0];
    }

    return array;
    
}

