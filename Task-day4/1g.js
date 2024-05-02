let numbers = [8, 6, 1, 3, 1, 8, 3, 2, 4, 7]

let duplicateno = [...new Set(numbers)]

console.dir(duplicateno);

//IIFE:

var array = [1, 1, 2, 3, 4, 5];
(function (array) {
    let dup = [...new Set(array)];
    return (dup);
})
    (array);
