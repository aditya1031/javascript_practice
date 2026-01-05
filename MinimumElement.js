function mini(a, b, c) {
     let m;
     if (a < b) {
          if (a < c) {
               m = a;
          }
          else {
               m = c;
          }
     }
     else {
          if (b < c) {
               m = b;
          }
          else {
               m = c;
          }
     }

     console.log(`smallest value is:- ${m}`);
}


function mini2(a, b, c) {
     if (typeof (a) === "string" || typeof (b) === "string" || typeof (c) === "string") {
          throw new Error('only meter number');
     }
     else if (a < b && a < c) {
          console.log(`smallest value is:- ${a}`);
     }
     else if (b < a && b < c) {
          console.log(`smallest value is:- ${b}`);
     }
     else if (c < a && c < b) {
          console.log(`smallest value is:- ${c}`);
     }
}


function mini3(a, b, c) {
     let minis = a;
     if (b < minis) {
          minis = b;
     }
     if (c < minis) {
          minis = c;
     }

     console.log(`smallest value is:- ${minis}`);
}


function mini4(a,b,c)
{
     let arr=[a,b,c];
     arr.sort();
       console.log(`smallest value is:- ${arr[0]}`);
}


mini3(2, 900, -1);