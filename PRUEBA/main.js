"use strict";

function countBy(x, n) {
    let z = [];
    for (let i = x; z.length < n; i = i + x) {
        z.push(i);
    }
    return z;
}


console.log(countBy(2, 5));

function findEvenIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        let suma = 0;
        if (arr[i - 1] === undefined) {
            arr[i - 1] = 0;
        }
        for (let j = i + 1; j < arr.length; j++) {
            suma += arr[j];
        }
        if (suma == arr[i]) {
            return i;
        }
    }
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));