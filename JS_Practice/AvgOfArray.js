function Avg(num) {
     let sum = 0;
     for (n of num) {
          if (typeof n != "number" || n < 0) {
               throw new Error(`only enter positive numbers`)
          }
          sum += n;
          //    console.log(n)
     }

     return sum / num.length;

}


let arr = [1, 2, 4]
let arr2 = [1, 2, -7, 14]
console.log(Avg(arr2));