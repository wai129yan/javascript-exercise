
function myFunction(){
    console.log ('click me');
}


const button = document.querySelector('.btn');

// button.onclick = () => {
//     console.log("button clicked");
// }


// EventListener
// button.addEventListener("click",()=>{
//     console.log("first click 1");
// });

// button.addEventListener("click",()=>{
//     console.log("first click 2");
// });


// EventHandler
button.onclick = () => {
    console.log('click 1');
}

button.onclick = () => {
    console.log('click 2');
}