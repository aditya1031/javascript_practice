function swap(num1, num2) {
     if (typeof num1 !== "number" || typeof num2 !== "number") {
          throw new Error(`only numbers accepted`);
     }

     console.log(num1, num2);


     let temp;
     temp = num1;
     num1 = num2;
     num2 = temp;

     console.log(num1, num2);
}


function swap2(num1, num2) {
     if (typeof num1 !== "number" || typeof num2 !== "number") {
          throw new Error(`only numbers accepted`);
     }

     console.log(num1, num2);


     num1 = num1 + num2;
     num2 = num1 - num2;
     num1 = num1 - num2;



     console.log(num1, num2);
}

swap2(2, 4);