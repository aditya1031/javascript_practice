function Anagrams(str1, str2) {
     if (typeof str1 !== "string" || typeof str2 !== "string") {
          throw new Error(`invalid input`)
     }

     str1 = str1.toLocaleLowerCase();

     str2 = str2.toLocaleLowerCase();

     if (str1.length !== str2.length) {
          return false;
     }

     for (let i = 0; i < str1.length; i++) {
          for (let j = 0; j < str2.length; j++) {
               if (!str1.includes(str2[i])) {
                    return false;
               }
          }
     }

     return true;
}


function Anagrams2(str1, str2) {
     if (typeof str1 !== "string" || typeof str2 !== "string") {
          throw new Error(`invalid input`)
     }

     str1 = str1.toLocaleLowerCase();

     str2 = str2.toLocaleLowerCase();

     if (str1.length !== str2.length) {
          return false;
     }

     const list1 = {}
     for (let char of str1) {
          if (!list1[char]) {
               list1[char] = 0
          }
          list1[char]++;
     }
     const list2 = {}
     for (let char of str2) {
          if (!list2[char]) {
               list2[char] = 0
          }
          list2[char]++;
     }
     for (let key in list1) {
          if (list1[key] !== list2[key]) {
               return false;
          }
     }

     return true
}

console.log(Anagrams2("abd", "bda"));
console.log(Anagrams("catx","act"));