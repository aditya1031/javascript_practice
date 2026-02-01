//   NodeList = Static collection of html elements by (id, class,elements)
//              Can be created by using querySelectorAll()
//              Similar to an array, but no(map,filter,reduce)
//              NodeList won't update to automatically reflect changes 


let buttons= document.querySelectorAll(".myBtns");

console.log(buttons)


// ADD HTML/CSS PROPERTIES
// buttons.forEach(button=>{
//      button.style.backgroundColor="hsl(2, 100%, 80%)";
//      button.textContent+="❤️"
// })




// CLICK event listener
buttons.forEach(button=>{
     button.addEventListener("click",event=>{
          event.target.style.backgroundColor="hsl(2, 100%, 80%)";
     });
});




//ADD AN ELEMENT
const newButton=document.createElement("button");

newButton.textContent="Button 5";
newButton.classList="myBtns";

document.body.appendChild(newButton);

buttons=document.querySelectorAll(".myBtns")

console.log(buttons)





//MOUSEOVER+MOUSEOUT  event listener
buttons.forEach(button=>{
     button.addEventListener("mouseover",event=>{
          event.target.style.backgroundColor="hsl(220, 100%, 40%)";
     });
        
});

buttons.forEach(button=>{
     button.addEventListener("mouseout",event=>{
          event.target.style.backgroundColor="hsl(220, 100%, 65%)";
     });
});




//REMOVE AN ELEMENT
buttons.forEach(button=>{
     button.addEventListener("click",event=>{
          event.target.remove();
        buttons=document.querySelectorAll(".myBtns");
        console.log(buttons)
     })
})