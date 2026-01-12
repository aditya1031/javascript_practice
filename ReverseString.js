function reversString(str) {
    if (typeof str !=="string") {
     throw new Error("only string!!")
    }
    
     let arr = [];
     let n = str.length;
     for (let i = 0; i < n; i++) {
          arr[n-i] = str[i]

     }
     str="";
     for (let i = 0; i < n; i++) {
          str += arr[i+1];
     
     }
     return str;
}


function reversString2(str)
{
  
  
     str=str.split('').reverse().join("");
     console.log(str);
}


// let str=reversString("aditya");
// let str=reversString(12);
// console.log(str);
console.log(reversString2("aditya kumar"))