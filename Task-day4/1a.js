var array = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
{
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            console.log(array[i]);
        }
    }
} (array);
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
let abc = function (array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            console.log(array[i]);
        }
    }
};
abc(array); output =>
    1
3
5
7
9

//IMMEDIATELY INVOKED FUNCTION Expression(IIFE)

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
(function (array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            console.log(array[i]);
        }
    }
})(array);