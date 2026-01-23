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


function countChar2(str) {
     if (typeof str !== "string") {
          throw new Error(`invalid entry`);
     }

     str = str.toLocaleLowerCase();

     const result={};
     for (let i = 0; i < str.length; i++) {
          
          if (!result[str[i]]) {
               result[str[i]]=0;
          }
          result[str[i]]++;
     }
   
console.log(`the charter accrued `,result);

}


function countChar(str) {
     if (typeof str !== "string") {
          throw new Error(`invalid entry`);
     }

     str = str.toLocaleLowerCase();


}



countChar2("Aditya kumar");