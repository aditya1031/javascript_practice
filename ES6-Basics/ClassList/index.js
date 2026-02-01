//   classList = elements property in javascript used to interact with an 
//               element's list of classes (css classes). 
//               Allows you to make reusable classes for many elements 
//               across you web page

//   add()
//   remove()
//   toggle(remove if present,add if not)
//   replace(oldClass , newClass)
//   contains()

const myBtn = document.getElementById("myBtn");


myBtn.classList.add("enabled");

// myBtn.classList.remove("enabled");


myBtn.addEventListener("mouseover", event => {

     myBtn.classList.toggle("hover");
})
myBtn.addEventListener("mouseout", event => {

     myBtn.classList.toggle("hover");
})


// myBtn.addEventListener("click", event => {
//      event.target.classList.replace("enabled", "disabled");
// })



myBtn.addEventListener("click", event => {
     if (event.target.classList.contains("disabled")) {
          event.target.textContent += "😒";
     }
     else {
          event.target.classList.replace("enabled", "disabled");
     }
})
