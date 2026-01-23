function factors(num) {
     if (typeof num != "number" || num < 0) {
          throw new Error(`enter only valid number`);
     }

     let factor = [];

     const numSq = Math.floor(Math.sqrt(num));

     for (let i = 1; i <= num; i++) { 

          if(num%i===0)
          {
               factor.push(i);
            
          }

     }

     console.log(`the factors of the given number is ${factor}`);
}


factors(21);