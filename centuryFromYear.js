function centuryFromYear(year) {
    
    
    if((year % 100) == 0) {
        var century = year/100;
    }
    else {
        century = Math.floor(year/100) + 1;
    } 
    return century;
}

