// Bubble Sort

function bubbleSort(arr) {
    isSorted = 0;
    for (let i = 0; i < arr.length; i++){
      console.log('swap')
        for (let j = 0; j < arr.length - 1 - i; j++){
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp; 
                isSorted = 1;
            }
        }
        if (!isSorted) {
            break;
        }
    }
    console.log(arr)
}

// bubbleSort([243, 45, 23, 356, 3, 536, 35, 5]);
// bubbleSort([1,2,3,4,5]);
