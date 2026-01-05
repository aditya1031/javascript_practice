function isPrime(num) {
     if (typeof num !== "number" || num < 0) {
          throw new Error(`only positive number will be taken`)
     }

     let flg = 0;
     for (let i = 1; i < num; i++) {


          if (num % i === 0) {
               flg++;
          }
          console.log(i + " : " + num % i);
          if (flg > 0) {
               return false;
          }

     }

     return true;
}




function isPrime2(num) {
     if (typeof num !== "number" || num < 0) {
          throw new Error(`only positive number will be taken`)
     }

     if (num === 2) {
          return true;
     }
     if (num % 2 === 0) {
          return false
     }

     for (let i = 3; i < num; i += 2) {
          if (num % i === 0) {
               return false;
          }
     }

     return true;
}

console.log(isPrime2(13))