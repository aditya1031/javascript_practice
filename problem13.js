function power(num, pow) {
     if (typeof num != "number" || typeof pow != "number" || num < 0 || pow < 0) {
          throw new Error(`enter valid input`);
     }

     let res = 1;
     for (let i = 1; i <= pow; i++) {
          res = res * num;
     }

     return res;

}
function power2(num, pow) {
     if (typeof num != "number" || typeof pow != "number" || num < 0 || pow < 0) {
          throw new Error(`enter valid input`);
     }


     return num ** pow;

}


console.log(power2(2, 6));