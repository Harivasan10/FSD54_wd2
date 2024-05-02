//Anonymous:
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sum = 0;
function (a) {
    for (let i = 0; i < a.length; i++) {
        sum = sum + a[i];
    }
    return sum;
} (a);


var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sum = 0;
let ghi = function (a) {
    for (let i = 0; i < a.length; i++) {
        sum = sum + a[i];
    }
    return sum;
}
ghi(a);

//IIFE:
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sum = 0;
(function (a) {
    for (let i = 0; i < a.length; i++) {
        sum = sum + a[i];
    }
    return sum;
})(a);