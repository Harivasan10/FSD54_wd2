
var nums = [89654];
var rotate = function (nums, k) {
    for (let i = 0; i < k; i++)
        nums.unshift(nums.pop())
}
return nums;

//IIFE:

var Array = [1, 2, 3, 4, 5];
var N = Array.length;
var K = 2;
(function (a, n, k) {
    k = k % n;

    for (let i = 0; i < n; i++) {
        if (i < k) {


            console.log(a[n + i - k] + " ");
        }
        else {


            console.log((a[i - k]) + " ");
        }
    }

})
    (Array, N, K);