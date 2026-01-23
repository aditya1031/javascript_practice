function vowelAndConsonants(str) {
     if (typeof str != "string") {
          throw new Error(`invalid input`);
     }

     const vowels = ["a", "e", "i", "o", "u"];
     const GStr = str.toLowerCase().replace(" ", "").split('');

     console.log(vowels, GStr);

     let cnt = 0;
     for (let i = 0; i < vowels.length; i++) {
          for (let j = 0; j < GStr.length; j++) {
               if (vowels[i] == GStr[j]) {
                    cnt++;
               }
          }
     }

     let consonant = 0;
     consonant = GStr.length - cnt;

     console.log(`the given string has ${cnt} Vowels & ${consonant} consonant`)
}


function vowelAndConsonants2(str) {
     if (typeof str != "string") {
          throw new Error(`invalid input`);
     }

     const vowels = "aeiou";
     const consonant = "qwertyuiopasdfghjklzxcvbnm";
     const number = "1234567890"
     const GStr = str.toLowerCase().split('');

     console.log(vowels, GStr);

     let cntV = 0;
     let cntC = 0;
     let cntN = 0
     let cntS = 0;
     for (let i = 0; i < GStr.length; i++) {
          if (vowels.includes(GStr[i])) {
               cntV++;
          }
          else if (consonant.includes(GStr[i])) {
               cntC++;
          }
          else if (number.includes(GStr[i])) {
               cntN++;
          }
          else {
               cntS++;
          }
     }


     console.log(`the given string has ${cntV} Vowels , ${cntC} consonant , ${cntS} special chatrector,${cntN} numbers`)
}


vowelAndConsonants2("adity1234@gmail.com")