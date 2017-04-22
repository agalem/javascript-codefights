function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {

    function myMax(yourLeft, yourRight){
        if(yourLeft > yourRight){
            return yourLeft;
        } else {
            return yourRight;
        }
    }
    
    function friendsMax(friendsLeft, friendsMax){
        if(friendsLeft > friendsRight){
            return friendsLeft;
        } else {
            return friendsRight;
        }
    }
    
    var myMax = myMax(yourLeft, yourRight);
    var friendsMax = friendsMax(friendsLeft, friendsRight);
    
    var mySum = yourLeft + yourRight;
    var friendsSum = friendsLeft + friendsRight;
    
    if(myMax == friendsMax && mySum == friendsSum){
        return true;
    } else {
        return false;
    }
    
}