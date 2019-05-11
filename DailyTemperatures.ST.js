/*

 Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].

Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100]. 

Its Left Child is at [2*i] if available.
Its Right Child is at [2*i+1] if available.
Its Parent Node is at [i/2] if available.
*/

class MinHeap {
    constructor() {
        this.heap = [null];
    }

    peek() {
        if (this.heap.length > 1) return this.heap[1];
        else throw new Error('Can\'t peek');
    }

    insert(obj) {
        this.heap.push(obj);
        let cont = true;
        let currentIdx = this.heap.length-1;
        while (cont) {
            if(
                Math.floor(currentIdx/2) > 0
                && this.heap[currentIdx].val < this.heap[Math.floor(currentIdx/2)].val 
            ) {
                this.swapIndex(currentIdx, Math.floor(currentIdx/2));
                currentIdx = Math.floor(currentIdx/2);
            } else {
                cont = false;
            }
        }
    }

    removeHead() {
        this.swapIndex(1, this.heap.length-1);
        const popped = this.heap.pop();
        this.rebalanceHeap();
        return popped;
    }

    swapIndex(index1, index2) {
        if (index1 > this.heap.length - 1 || index2 > this.heap.length-1) {
            return;
        }
        let temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    rebalanceHeap() {
        let currentIdx = 1;
        let cont = true;
        while(cont) {
            if (
                (2*currentIdx + 1) < this.heap.length
                && (this.heap[currentIdx].val > this.heap[2*currentIdx].val
                || this.heap[currentIdx].val > this.heap[2*currentIdx+1].val)
            ) {
                if (this.heap[2*currentIdx].val <= this.heap[2*currentIdx + 1].val) {
                    this.swapIndex(currentIdx, 2*currentIdx)
                    currentIdx = 2*currentIdx;
                } else {
                    this.swapIndex(currentIdx, 2*currentIdx + 1)
                    currentIdx = 2*currentIdx + 1;
                }
            } else {
                cont = false;
            }
        }
    }

    length() {
        if (!this.heap.length) return 0;
        return this.heap.length - 1;
    }
}

function dailyTemperatures (T) {
    const minHeap = new MinHeap();
    const toNextHighestArray = [];
    for (let i = 0; i < T.length; i++) {
        if (!minHeap.length()) {
            minHeap.insert({
                val: T[i],
                idx: i
            });
        } else {
            let cont = true;
            while (cont) {
                if (minHeap.length() && minHeap.peek().val < T[i]) {
                    const head = minHeap.removeHead();
                    const tempIdx = head.idx
                    toNextHighestArray[tempIdx] = i-tempIdx;
                } else {
                    minHeap.insert({
                        val: T[i],
                        idx: i
                    });
                    cont = false;
                }
            }
        }
    }
    while(minHeap.length()) {
        toNextHighestArray[minHeap.removeHead().idx] = 0;
    }
    return toNextHighestArray;
}

//[8,1,5,4,3,2,1,1,0,0]
// [3,1,1,2,1,1,0,1,1,0]
//[0,4,3,2,1,0,1,0,0,0]
dailyTemperatures([77,41,41,41,41,77,41,77,77,77])
// dailyTemperatures([55,38,53,81,61,93,97,32,43,78]);
// dailyTemperatures([89,62,70,58,47,47,46,76,100,70]);
// dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])  