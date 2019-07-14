function waterCatcher(arr) {
    let left = arr[0];
    let totalWater = 0;

    let numberOfInnerSlots = 0;
    let totalOfInnerSlots = 0;

    for(let i = 1; i < arr.length; i++) {
        if (arr[i] >= left || i === arr.length - 1) {
            totalWater += left*numberOfInnerSlots - totalOfInnerSlots

            numberOfInnerSlots = 0;
            totalOfInnerSlots = 0;
            left = arr[i]
        } else {
            numberOfInnerSlots++;
            totalOfInnerSlots += arr[i]
        }
    }
    return totalWater;
}

waterCatcher([2,1,2])


