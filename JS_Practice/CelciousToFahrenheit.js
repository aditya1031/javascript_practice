function tempConvert(temp){

     if(typeof temp !== "number")
     {
          throw new Error(`temprature shoul be is numbers`);
     }

      return Math.round( (temp*(9/5))+32);
     


}


console.log(tempConvert(27)+" 'C")