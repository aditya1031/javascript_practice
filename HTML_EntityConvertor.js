// Implement an HTML Entity Converter

// This lab is about converting special characters in a string with their corresponding HTML entities.

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

//     You should have a convertHTML function that accepts a string as an argument.

//     The convertHTML function should return a new string by converting special characters in the argument string to their corresponding HTML entities.
//         & should be converted to &amp;.
//         < should be converted to &lt;.
//         > should be converted to &gt;.
//         " should be converted to &quot;.
//         ' should be converted to &apos;.

function convertHTML(str) {
     let ans = "";
     for (let i = 0; i < str.length; i++) {
          if (str[i] === "&") {
               ans += "&amp;";
          }
          else if (str[i] === "<") {
               ans += "&lt;";
          }
          else if (str[i] === ">") {
               ans += "&gt;";
          }
          else if (str[i] === '"') {
               ans += "&quot;";
          }
          else if (str[i] === "'") {
               ans += "&apos;";
          }
          else { ans += str[i]; }
     }
     return ans;
}


function convertHTML2(str) {
  let map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };

  let result = "";

  for (let i = 0; i < str.length; i++) {
    result += map[str[i]] || str[i];
  }

  return result;
}


console.log(convertHTML('Stuff in "quotation marks"'))