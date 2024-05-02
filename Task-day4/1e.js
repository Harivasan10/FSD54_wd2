function (arr, n) {

    for (let i = 0; i < n; i++) {
        let ans = isPalindrome(arr[i]);
        if (ans == false)
            return false;
    }
    return true;
} (arr, n)

    //IIFE:

    (function (arr, n) {

        for (let i = 0; i < n; i++) {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    })([1, 2, 3], 3)