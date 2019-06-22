/*
Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

You may return any answer array that satisfies this condition.
*/

function sortArrayByParity (arr) {
    const odds = [];
    const results = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            results.push(arr[i])
        } else {
            odds.push(arr[i])
        }
    }

    return results.concat(odds);
}

sortArrayByParity([1,2,5,4,3,76,5,7,2])
