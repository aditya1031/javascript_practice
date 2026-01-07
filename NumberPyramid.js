function pyramid1(num) {
     if (typeof num !== "number" || num < 0) {
          throw new Error(`invalid entry`);
     }

     for (let i = 1; i <= num; i++) {
          let str = "";
          for (let j = 1; j <= num - i; j++) {
               str = str + " ";
          }
          for (let k = 1; k <= i; k++) {
               str = str + k;
          }
          for (let m = i - 1; m >= 1; m--) {
               str = str + m;
          }
          console.log(str);
     }

}

pyramid1(5)