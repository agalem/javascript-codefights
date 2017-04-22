function areSimilar(A, B) {
var n = A.length;
if (B.length !== n) {
return false;
}

var diff = [], i;
for (i = 0; i < n; i++) {
    if (A[i] !== B[i]) {
        diff.push(i);   
    }
}

n = diff.length;
if (n === 0) {
    return true;
}
if (n === 2) {
    return A[diff[0]] === B[diff[1]] && A[diff[1]] === B[diff[0]];
}

return false;
}