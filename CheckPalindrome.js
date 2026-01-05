function palindrome(str) {
     if (typeof str !== "string") {
          throw new Error(`only  enter string as input`)
     }

     let temp = [];
     temp = str.split('');
     let flg = 0;

     for (let i = 0; i < str.length; i++) {
          if (str[i] != temp[str.length - i-1]) {
              flg++;
          }
          //  console.log(temp[i] + ":" + str[str.length- i-1]);
          //  console.log(flg)
     }

     if (flg == 0) {
          return true;
     }
     else {
          return false;
     }

}


function palindrome2 (str)
{
    if (typeof str !== "string") {
          throw new Error(`only  enter string as input`)
     }
    
     let i=0
     j=str.length-1;
     while(i<j)
     { //console.log(str[i] + ":" + str[j]);
          if(str[i]!=str[j])
          {
               return false;
          }
          i++;
          j--;
         
     }

     return true;
}

console.log(palindrome2("ABBA"));