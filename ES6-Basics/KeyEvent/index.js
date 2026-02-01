//   eventListener = Listen for specific events to create interactive web pages
//                   Events: keydown, keyup, keypress(avoid keypress)
//    document.addEventListener(event,callback);

// document.addEventListener("keydown",event=>{
//      console.log(`key down=${event.key}`);
// });

// document.addEventListener("keyup",event=>{
//      console.log(`key up=${event.key}`);
// });



const myBox = document.querySelector(".myBox");


document.addEventListener("keydown",event=>{
     myBox.textContent="😍";
     myBox.style.backgroundColor="tomato";
});


document.addEventListener("keyup",event=>{
     myBox.textContent="😊";
     myBox.style.backgroundColor="lightblue";
});

const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {

     event.preventDefault();

     if (event.key.startsWith("Arrow")) {
          switch (event.key) {
               case "ArrowUp":
                    y -= moveAmount;
                    break;
               case "ArrowDown":
                    y += moveAmount;
                    break;
               case "ArrowLeft":
                    x -= moveAmount;
                    break;
               case "ArrowRight":
                    x += moveAmount;
                    break;
          }

     myBox.style.top=`${y}px`;
     myBox.style.left=`${x}px`;
     
     }
});