function loanInterest(PA, I, T) {
     if (typeof PA !== "number" || PA < 0 || typeof I !== "number" || I < 0 || typeof T !== "number" || T < 0) {
          throw new Error(`only enter valid positive values`)

     }

     console.log(PA, I, T)
     let result = (PA * I * T) / 100;
     result=result.toFixed(3);
     console.log(`the interest for ${PA} with ${I}% interest for ${T} time is: ${result}`);
}




loanInterest(20000.88, 8.755, 5);

