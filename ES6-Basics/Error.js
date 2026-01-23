//   Error = An objects that is created to represent a problem that occurs
//           Occurs often with user input or establishing a connection

//   try {} = encloses code that might potentially cause an error
//   catch {} = Catch and handle any thrown error from try { }
//finally {} = (optional) Always executes. Used mostly for clean up
// ex. close files ,close connections ,release resources



// console.log(x);
// // NETWORK ERRORS
// // PROMISE REJECTION
// // SECURITY ERRORS

// console.log(`you have  reached the end!`);


// try{

// console.log(x);
// // NETWORK ERRORS
// // PROMISE REJECTION
// // SECURITY ERRORS
// }

// catch(error)
// {
//      console.error(error);
// }

// finally{
// console.log(`you have  reached the end!`);
// // CLOSE FILES
// // CLOSE CONNECTIONS
// // RELEASE RESOURCES
// }

try {
     const dividend = window.prompt("enter a dividend:");
     const divisor = window.prompt("enter the divisor:");

     if (isNaN(dividend) || isNaN(divisor)) {
          throw new Error("values must be numbers")
     }
     if (divisor == 0) {
          throw new Error("only enter number greater then 0")
     }

     const result = dividend / divisor;


     console.log(result);
}

catch (error) {
     console.error(error);
}

console.log("you have reached the end")