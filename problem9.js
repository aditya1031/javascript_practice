function digitSum(num) {
     if (typeof num !== "number"||num<0) {
          throw new Error(`only enter positive integer numbers`);
     }

     let sum = 0;
     while (num) {
          sum = sum+num % 10;
          num=Math.floor( num/10);
     
     }
     return sum;
}

function digitSum(num) {
     if (typeof num !== "number"||num<0) {
          throw new Error(`only enter positive integer numbers`);
     }

     let sum = 0;

     const stringNum=num.toString();   //convert to string
     const arrNum=stringNum.split('');   //convetr to arr
     for (let i = 0; i < arrNum.length; i++) {
        sum+= parseInt(arrNum[i]); // use parse iont to add as an integer values
          
     }
     return sum;
}


console.log(digitSum(546))


