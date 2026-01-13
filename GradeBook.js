// Build a Gradebook App

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

//     You should have a function named getAverage that takes an array of test scores as a parameter and returns the average score.

//     You should have a function named getGrade that takes a student score as a parameter and returns a string representing a letter grade based on the score. Here are the scores and their corresponding letter grades:
//     Score Range 	Grade
//     100 	"A+"
//     90 - 99 	"A"
//     80 - 89 	"B"
//     70 - 79 	"C"
//     60 - 69 	"D"
//     0 - 59 	"F"

//     You should have a function named hasPassingGrade that takes a score as a parameter and returns either true or false depending on if the score corresponds to a passing grade.

//     The hasPassingGrade function should use the getGrade function to get the letter grade, and use it to determine if the grade is passing. A passing grade is anything different from "F".

//     You should have a function named studentMsg that takes an array of scores and a student score as the parameters. The function should return a string with the format:
//         "Class average: average-goes-here. Your grade: grade-goes-here. You passed the course.", if the student passed the course.
//         "Class average: average-goes-here. Your grade: grade-goes-here. You failed the course.", if the student failed the course.

//     Replace average-goes-here with the average of total scores and grade-goes-here with the student's grade. Use getAverage to get the average score and getGrade to get the student's grade.



function getAverage(arrScore) {
     let res = 0;
     for (const scr of arrScore) {
          res += scr
     }
     return res = res / arrScore.length;
}



function getGrade(score) {
     if (score === 100) {
          return "A+";
     }
     else if (score >= 90) {
          return "A";
     }
     else if (score >= 80) {
          return "B";
     }
     else if (score >= 70) {
          return "C";
     }
     else if (score >= 60) {
          return "D";
     }
     else {
          return "F";
     }
}

function hasPassingGrade(arrScore) {
     const score = getGrade(arrScore);

     if (score === 'F') {
          return false;
     }
     return true;
}


function studentMsg(arrScore, sduScore) {
     const avg = getAverage(arrScore);
     const grade = getGrade(sduScore);
     const result = hasPassingGrade(sduScore);

     if (!result) {
          return `Class average: ${avg}. Your grade: ${grade}. You failed the course.`;
     }
     
          return `Class average: ${avg}. Your grade: ${grade}. You passed the course.`;


}

console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100))