function table(num, range) {
     if (typeof num !== "number" || num <1 || range<1){
          throw new Error(`only enter positive integer numbers`);
     }

     for (let i = 1; i <= range; i+=5) {
          console.log(`${num} X ${i} = ${num * i}`);

     }
}

table(2, 120);