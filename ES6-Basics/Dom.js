// DOM = DOCUMENT OBJECT MODEL
//       Object{} that represent the page you see in web Browser
//       and provides you with an API to interact with it.
//       Web browser construct the DOM when it loads an HTML document,
//       and structures all the element in a tree like representation.
//       JavaScript can access the DOM to dynamically change the content,
//       structure and style odf the web page.




// const username=" aditya"
// const welcomingMsg=document.getElementById("message");

// welcomingMsg.textContent+=username===""?`guest`:username;

// console.log(navigator.userAgent);
// console.log(navigator.language)
// console.log(window.location);
// console.log(location);
// console.log(document.children)

// document.title="title changed";
// document.body.style.backgroundColor="hsl(0, 2%, 50%)";


















// element selectors = Methods used to target and manipulate HTML elements 
//                     They allow you to select one or multiple HTML elements 
//                     from the DOM (DOCUMENT Object Model)

//1. document.getElementById();         //element or null
//2. document.getElementClassName();    //HTML COLLECTION
//3. document.getElementByTagName();    //HTML COLLEcTION
//4. document.querySelector()           //ELEMENT Or NULL
//5. document.querySelectorAll();        //NODELIST &Static





// // document.getElementById();         //element or null
// const myHeading=document.getElementById("my-heading");

// myHeading.style.backgroundColor="yellow";
// myHeading.style.textAlign="center";
// console.log(myHeading);


// // document.getElementClassName();    //HTML COLLECTION
// const fruits=document.getElementsByClassName("fruits");
// console.log(fruits)

// fruits[0].style.backgroundColor="red";

// for(let fruit of fruits)
// {
//      fruit.style.backgroundColor="pink";
// }


// Array.from(fruits).forEach(fruit=>{
//      fruit.style.backgroundColor="blue";
// })



// // document.getElementByTagName();    //HTML COLLEcTION
// const h4Ele=document.getElementsByTagName("h4");

// const liEle=document.getElementsByTagName("li");

// // for(li of liEle){
// //      li.style.backgroundColor="lightblue"
// // }

// // for(let h4 of h4Ele){
// //      h4.style.backgroundColor="red"
// // }

// Array.from(h4Ele).forEach(h4=>{
//      h4.style.backgroundColor="red"
// })

// Array.from(liEle).forEach(li=>{
//      li.style.backgroundColor="lightblue"
// })



// // document.querySelector()           //ELEMENT Or NULL
// const element=document.querySelector("li");

// element.style.backgroundColor="purple";




// // document.querySelectorAll();        //NODELIST
// const foods=document.querySelectorAll("li");

// foods[0].style.backgroundColor="brown";

// foods.forEach(food=>{
// food.style.backgroundColor="orange";
// })












//   DOM Navigation = the process of navigating though the structure of an html document using javascript.

//   .firstElementChild
//   .lastElementChild
//   .nextElementSibling
//   .previousElementSibling
//   .parentElement
//   .children

// ------------------ .firstElementChild --------------------

// const element = document.getElementById("plants");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor="yellow";

// const ulEle=document.querySelectorAll("ul");

// ulEle.forEach(ul=>{
//      const firstChild=ul.firstElementChild;
//      firstChild.style.backgroundColor="red";
// })





// ------------------ .lastElementChild --------------------

// const element = document.getElementById("fruits");
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor="yellow";

// const ulEle=document.querySelectorAll("ul");

// ulEle.forEach(ul=>{
//      const lastChild=ul.lastElementChild;
//      lastChild.style.backgroundColor="red";
// });




// ------------------ .nextElementSibling --------------------

// const element =document.getElementById("vegetable");

// const nextSibling=element.nextElementSibling;
// nextSibling.style.backgroundColor="yellow";





// ------------------ .previousElementSibling --------------------


// const element = document.getElementById("vegetable");
// const prevSibling = element.previousElementSibling;
// prevSibling.style.backgroundColor = "yellow";





// ------------------ .parentElement --------------------


// const element = document.getElementById("banana");

// const nextSibling = element.parentElement;
// nextSibling.style.backgroundColor = "yellow"





// ------------------ .children --------------------

// const element = document.getElementById("vegetable");

// const childs=element.children;

// Array.from(childs).forEach(child=>{
//      child.style.backgroundColor="yellow"; 
// })



