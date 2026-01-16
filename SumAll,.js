// Design a Sum All Numbers Algorithm

// In this lab, you will need to design a sum all numbers algorithm.

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

//     You should have a function named sumAll that accepts an array of two numbers.
//     sumAll([n, m]) should return the sum of n and m plus the sum of all the numbers between them. The lowest number will not always come first. For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
     let left, right;
     if (arr[0] > arr[1]) {
          left = arr[1];
          right = arr[0]
     }
     else {
          right = arr[1]
          left = arr[0];
     }

     let sum = 0;
     for (let i = left; i <= right; i++) {
          sum += i

     }
     return sum;
}

function sumAll2(arr) {
     let left = Math.min(arr[0], arr[1]);
     let right = Math.max(arr[0], arr[1]);
     let n = right - left + 1;
     return (n * (left + right)) / 2;
}



console.log(sumAll([1, 4]))