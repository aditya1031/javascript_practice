function wordCount(str) {
     if (typeof str !== "string") {
          throw new Error(`only enter string sentenses`)
     }

     str = str.trim();
     if (str === "") {
          console.log(`the given string is empty`);
          return;
     }

     const sentence = str.split("");
     console.log(sentence)

     let count = 1;
     for (s of sentence) {
          if (s === " ") {
               count++;
          }
     }
     return count
}


function wordCount2(str) {
     if (typeof str !== "string") {
          throw new Error(`only enter string sentenses`)
     }

     str = str.trim();
     if (str === "") {
          console.log(`the given string is empty`);
          return;
     }

     const sentence = str.split(" ");
     console.log(sentence)

     return sentence.length;
}


function wordCount3(str) {
     if (typeof str !== "string") {
          throw new Error(`only enter string sentenses`)
     }

     str = str.trim();
     if (str === "") {
          console.log(`the given string is empty`);
          return;
     }

     const sentence = str.split(/\s+/);
     console.log(sentence)

     return sentence.length;
}



function wordCount4(str) {
     if (typeof str !== "string") {
          throw new Error(`only enter string sentenses`)
     }

     str = str.trim();
     if (str === "") {
          console.log(`the given string is empty`);
          return;
     }

     const sentence=str.split(" ").filter((ele)=>ele!='');

     console.log(sentence);


     return sentence.length;
}





let sentence = " this      a   sting  ";

console.log(wordCount4(sentence));