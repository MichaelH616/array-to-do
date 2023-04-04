// push front

function pushFront(arr, num) {
    for (let i = arr.length; i >= 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = num;
    console.log(arr);
}

pushFront([5,7,2,3], 8)
pushFront([99], 7)

// pop front

function popFront(arr) {
    let value = arr[0];
    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i+1];
    }
    arr.length = arr.length - 1
    console.log(value)
    console.log(arr)
}

popFront([0,5,10,15])
popFront([4,5,7,9]) 

// insert at

function insertAt(arr, i, num) {
    for (let j = arr.length; j >= i; j--) {
        arr[j] = arr[j - 1];
    }
    arr[i] = num;
    console.log(arr);
}

insertAt([100,200,5], 2, 311)
insertAt([9,33,7], 1, 42)

// remove at BONUS

function removeAt(arr, i) {
    let value = arr[i];
    for (let j = i; j < arr.length; j++){
        arr[j] = arr[j+1];
    }
    arr.length--;
    console.log(value);
    console.log(arr)
}
removeAt([1000,3,204,77], 1) 
removeAt([8,20,55,44,98], 3)

// swap pairs BONUS

function insertAt(arr) {
    for (let i = 0; i < arr.length - 1; i+=2) {
        let temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i+1] = temp;
    }
    console.log(arr);
}

insertAt([1,2,3,4])

// remove duplicates BONUS

function removeDupes(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                for (let k = j; k < arr.length - 1; k++) {
                    arr[k] = arr[k + 1];
                    console.log(arr);
                }
            arr.length--;
            j--;
            }
        }
    }
    console.log(arr);
}

removeDupes([-2,-2,3.14,5,5,10])
removeDupes([9,19,19,19,19,19,29])