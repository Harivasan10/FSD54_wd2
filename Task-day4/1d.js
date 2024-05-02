let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

let prime = numbers.filter(function (number) {
    if (number > 1) {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }
    else {
        return false;
    }
});

console.log(prime);

//IIFE

let n = 34;
(function (n) {
    for (let i = 2; i <= n; i++) {
        let flag = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
        if (flag == 0) {
            console.log(i);
        }
    }
})(n);