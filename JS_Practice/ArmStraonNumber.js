function armstrong(num) {
     if (typeof num !== "number"||num<0) {
          throw new Error(`invalid entry`);
     }

     let sum = 0;
     const ogNum = num;

     while (num) {

          sum += (num % 10) ** 3;
          num = Math.floor(num / 10);

     }

     if (sum === ogNum) {
          return true;
     }

     return false;
}

console.log(armstrong(-153));