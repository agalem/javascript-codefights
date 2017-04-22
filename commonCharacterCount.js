function commonCharacterCount(s1, s2) {

    return Array.from(s1).filter(function(v){
        if(s2.indexOf(v)>-1){
            s2=s2.substr(0, s2.indexOf(v))+s2.substr(s2.indexOf(v)+1);
            return true;
        }
    }).length;
    
}