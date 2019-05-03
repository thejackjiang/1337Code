/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxIncreaseKeepingSkyline = function(masterArray) {
    const x_len = masterArray[0].length;
    const y_len = masterArray.length;
		
    const x_max = x_determineMax(masterArray, x_len);
    const y_max = y_determineMax(masterArray, y_len);

    let totalCount = 0;

    for (let i = 0; i < x_len; i++) {
        for(let j = 0; j < y_len; j++) {
            const lesserMaxVal = x_max[j] < y_max[i] ? x_max[j] : y_max[i];
            totalCount += lesserMaxVal - masterArray[i][j];
        }
    }
    return totalCount;
};

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

// alternatively you could flip the master array i,j before passing it in.
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
