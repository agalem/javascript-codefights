function almostIncreasingSequence(sequence) {
        
  var mistakes = 0;
    
    function howManyMistakes(sequence) {
        for(var i=0; i<sequence.length; i++){
            if(sequence[i+1]<sequence[i] || sequence[i+1]== sequence[i] || (sequence[i-1]+sequence[i] == sequence[i]+sequence[i+1]) || sequence[i+3] < sequence[i])
            {
                mistakes++;
            }
        }
    }
    
    howManyMistakes(sequence);
    
    if(mistakes > 1){
        return false;
    } else {
        return true;
    }
      
    
}
