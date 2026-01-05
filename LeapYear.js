function leapYear(yr) {
     if (typeof yr !== "number" || yr <= 0) {
          throw new Error(`only enter valid year`)
     }

     if (yr % 4 === 0) {
          return true;
     }
     else {
          return false;
     }
}


function leapYear2(yr) {
     if (typeof yr !== "number") {
          throw new Error(`only enter valid year`)
     }
     else if (yr % 4 === 0) {
          return true;
     }
     return false;
} 

function leapYear3(yr) {
     if (typeof yr !== "number") {
          throw new Error(`only enter valid year`)
     }
     return yr % 4 === 0;
} 


console.log(leapYear3(2004));