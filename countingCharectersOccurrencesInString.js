function countChar(str) {
     if (typeof str !== "string") {
          throw new Error(`invalid entry`);
     }

     str = str.toLocaleLowerCase();

     for (let i = 0; i < str.length; i++) {
          let cnt = 0;
          for (let j = 0; j < str.length; j++) {
               if (str[i] === str[j]) {
                    cnt++;
               }
                // console.log(`${str[i]}:${str[j]}`); 

          }
        //  console.log("\n")
         console.log(`'${str[i]}' : ${cnt}`);
     }
}


countChar("Aditya kumar");