// Implement the Slice and Splice Algorithm

// In this lab, you will need to create an algorithm to merge two arrays.

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

//     Create a frankenSplice function that accepts two arrays and an index.
//     Copy each element of the first array into the second array, in order, beginning at the given index, and return the resulting array.
//     The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, index) {

     let ans=[];
     for (let i = 0; i < index; i++) {
    ans.push(arr2[i])
     }

     for (let i = 0; i < arr1.length; i++) {
    ans.push(arr1[i])
     }

      for (let i = index; i < arr2.length; i++) {
     ans.push(arr2[i])
     }


     return ans;
}


console.log(frankenSplice([1, 2, 3], [4, 5], 1));