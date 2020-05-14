const bubbleSort = (arr) => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                const tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
}

// Driver Code
const arr = [64, 34, 25, 12, 22, 11, 90];

console.log("Sorted array is:", bubbleSort(arr));
