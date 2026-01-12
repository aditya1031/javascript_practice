// Build the Largest Number Finder

//     You should create a function largestOfAll that takes an array of arrays as an argument.
//     The function should return an array containing the largest number from each sub-array.

function largestOfAll(arr) {
     let max = [];
     if (arr.length === 0 || !arr) {
          throw new Error(`no array given`)
     }

     for (let i = 0; i < arr.length; i++) {
          let largest = arr[i][0]
          for (let j = 0; j < arr[0].length; j++) {

               if (largest < arr[i][j]) {
                    largest = arr[i][j];
               }

          }
          max[i]=largest;
     }

     return max;
}


console.log(largestOfAll([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))

