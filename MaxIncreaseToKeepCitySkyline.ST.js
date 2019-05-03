// given an array of arrays representing a skyline, figure out the best way to modify the city to gain most possible vertical space without altering the skyline.

// questions? Do buildings from specific angles have to be preserved? such as 1,2,3 where 3 is tallest. Does 1, 2, have to stay based to preserve the skyline? Nope

//example:
/** [
 *  [1, 2, 6, 4], = 13 6
 *  [2, 3, 5, 5], = 15 5
 *  [3, 3, 3, 1], = 10 3
 *  [2, 6, 1, 6]  = 15 6
 *   =  =  =  =       max
 *   9 14 15 16
 *   3  6  6  6 max
 * ]
 */

/**
 * Strategies
 * 1. go through and create a max array for left to right and top to bottom (2) 
 * 2. Each index increased up to a max of the horizontal, with the actual value = vertical
 * solution looks like n^2 (double for)
 * 
 * Possible Preoptimizations: does it really need to be n^2? If we have it as one big array does that help? Not really since it still will total n^2
 */

function skylineReshaper(masterArray) {
    const len = masterArray.length;
    const x_max = x_determineMax(masterArray, len);
    const y_max = y_determineMax(masterArray, len);

    for (let i = 0; i < len; i++) {
        for(let j = 0; j < len; j++) {
            const lesserMaxVal = lesserValue(x_max[j], y_max[i]);
            masterArray[i][j] = abs(masterArray[i][j] - lesserMaxVal);
        }
    }
    return totalSum(masterArray, len);
}

function y_determineMax(masterArray, len) {
    const array = [];
    for (let i = 0; i < len; i++){
        let maxVal = masterArray[i][0];
        for (let j = 1; j < len; j++){
            if (masterArray[i][j] >= maxVal) maxVal = masterArray[i][j];
            if (j === len-1) array.push(maxVal);
        }
    }
    return array;
}

function x_determineMax(masterArray, len) {
    const array = [];
    for (let i = 0; i < len; i++){
        let maxVal = masterArray[0][i];
        for (let j = 1; j < len; j++){
            if (masterArray[j][i] >= maxVal) maxVal = masterArray[j][i];
            if (j === len-1) array.push(maxVal);
        }
    }
    return array;
}

function lesserValue(x, y) {
    if (x <= y) {
        return x;
    } else {
        return y;
    }
}

function totalSum(masterArray, len) {
    let total = 0;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            total += masterArray[i][j];
        }
    }
    return total;
}

function abs(num) {
    if (num < 0) {
        return -num;
    } else {
        return num;
    }
}


const masterArray = [
   [1, 2, 6, 4],
   [2, 3, 5, 5],
   [3, 3, 3, 1],
   [2, 6, 1, 6] 
];

const exampleArray = [ 
    [3, 0, 8, 4], 
    [2, 4, 5, 7],
    [9, 2, 6, 3],
    [0, 3, 1, 0] 
  ]

const reshaped = skylineReshaper(exampleArray);
console.log(reshaped);
