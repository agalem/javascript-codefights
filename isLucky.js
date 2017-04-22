function isLucky(n) {

    var str1, str2, sum1, sum2, pos
pos = String(n).length/2
str1 = String(n).substr(0,pos).split('')
str2 = String(n).substr(pos).split('')
sum1 = str1.reduce(function(a,b){
return Number(a) + Number(b);
})
sum2 = str2.reduce(function(a,b){
return Number(a) + Number(b);
})
if(sum1 == sum2) {
return true;
} else {
return false;
}
    
    
}

