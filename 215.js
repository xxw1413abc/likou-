class MinHeap {
    constructor() {
        this.heap = [];
    }

    buildHeap(arr) {
        this.heap = [];
        for(let i = 0; i < arr.length; i++){
            this.insert(arr[i])
        }
    }

    #siftDown(index) {
        let leftIndex = index * 2 + 1;  
        let rightIndex = index * 2 + 2; 
        let swapIndex = index;


        if (leftIndex < this.heap.length && this.heap[leftIndex] < this.heap[swapIndex]) {
            swapIndex = leftIndex;
        }

        if (rightIndex < this.heap.length && this.heap[rightIndex] < this.heap[swapIndex]) {
            swapIndex = rightIndex;
        }

        if (swapIndex !== index) {
            this.#swap(swapIndex, index);
            this.#siftDown(swapIndex);
        }
    }

    #siftUp(index) {
        let parentIndex = Math.floor((index - 1) / 2); 
        let swapIndex = index;

        if (parentIndex >= 0 && this.heap[parentIndex] > this.heap[index]) {
            swapIndex = parentIndex;
        }

        if (swapIndex !== index) {
            this.#swap(swapIndex, index);
            this.#siftUp(swapIndex);
        }
    }

    #swap(i, j) {
        let tmp = this.heap[j];
        this.heap[j] = this.heap[i];
        this.heap[i] = tmp;
    }

    pop() {
        if (this.heap.length === 0) return null; 
        let val = this.heap[0];
        let n = this.heap.length;

        this.#swap(0, n - 1);
        this.heap.length = n - 1; 

        this.#siftDown(0);
        return val;
    }

    insert(val) {
        this.heap.push(val);
        this.#siftUp(this.heap.length - 1);
    }
};

var findKthLargest = function(nums, k) {
    let h = new MinHeap();
    h.buildHeap(nums);

    for (let i = 0; i < nums.length - k; i++) {
        h.pop();  
    }

    return h.pop(); 
};

