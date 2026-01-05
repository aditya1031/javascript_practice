function largest(arr) {
     if (arr.length === 0 || !arr) {
          throw new Error(`no array given`)
     }

     let largest = arr[0];
     for (let i = 1; i < arr.length; i++) {
          if (largest < arr[i]) {
               largest = arr[i];
          }
     }
     return largest;
}


function largest2(arr) {
     return Math.max(...arr);  // <...> speard opretor will pick each element form the arr and put in the max function;  
}

let arr = [2, 3, 4, 5, 2, 34, -67, 8, null];
// let arr=[];
console.log(largest2(arr));