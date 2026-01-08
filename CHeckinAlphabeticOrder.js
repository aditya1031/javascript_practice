function OrderCheck(str) {
     if (typeof str !== "string") {
          throw new Error(`invalid input`)
     }

     str = str.toLocaleLowerCase();  //to handle capital charectars
     str=str.replace(/ /g,"");  //to handle spaces in between
     for (let i = 1; i < str.length; i++) {
          if (str.charCodeAt(i) < str.charCodeAt(i - 1)) {
               return false;
          }

     }
return true;
}
console.log(OrderCheck("ab c"));