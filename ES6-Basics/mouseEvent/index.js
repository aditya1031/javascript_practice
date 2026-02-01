//   eventListener = Listen for a specific events interactive web pages 
//                   events : click,mouseover,mouseout

//                  .addEventListener("event",callback);


const myBox = document.getElementById("mybox");

//  --------------  CALLBACK FUNCTION  --------------------
// function changerColor(event) {
//      event.target.style.backgroundColor = "tomato";
//      event.target.textContent="click again 👎";
// }

// myBox.addEventListener("click", changerColor);

//  --------------  ANONYMOUS FUNCTION  --------------------
// myBox.addEventListener("click", function (event) {
//      event.target.style.backgroundColor = "tomato";
//      event.target.textContent = "click again 👎";
// });

//  --------------  ARROW FUNCTION  --------------------
// myBox.addEventListener("click", event => {
//      event.target.style.backgroundColor = "tomato";
//      event.target.textContent = "click again 👎";
// });





// //  --------------  MOUSEOVER  --------------------
// myBox.addEventListener("mouseover", event => {
//      event.target.style.backgroundColor = "green";
//      event.target.textContent = "click here ✌️";
// })


// //  --------------  MOUSEOUT  --------------------
// myBox.addEventListener("mouseout", event => {
//      event.target.style.backgroundColor = "green";
//      event.target.textContent = "come back 🫴";
// })







const myButton = document.getElementById("myBnt");

// myButton.addEventListener("click", event => {

//      event.target.style.backgroundColor = "green";
//      event.target.textContent = "come back 🫴";

// });


myButton.addEventListener("click", event => {

     myBox.style.backgroundColor = "green";
     myBox.textContent = "come back 🫴";

});