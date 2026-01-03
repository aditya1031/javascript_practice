function facto(num) {

     if (num !=="number"&&num <0) {
          throw new Error(`give positive numbers only`);
     }
     let result = 1;
     for (let i = num; i > 0; i--) {
          result *= i;
     }
     return result;
}

function factorecur(num){
     let result=1;
     if (num>0) {
       result=num*factorecur(num-1);
    }
return result;
}

console.log(factorecur(2));