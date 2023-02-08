const nav=document.querySelector('.nav');
const menu=document.getElementById('menu');
const buttonLeft=document.getElementById('left');
const buttonRight=document.getElementById('right');
const specialContainer=document.getElementById("special-container")

const input=document.getElementById("input");
const inputButton=document.getElementById("input-button");

menu.addEventListener("click",function(){
     nav.classList.toggle('open-nav');
     menu.classList.toggle("change-menu")
});


buttonRight.addEventListener("click",()=>{
     
    specialContainer.scrollLeft +=200
    console.log(specialContainer.scrollLeft)
});
buttonLeft.addEventListener("click",()=>{
    specialContainer.scrollLeft -= 200
});


inputButton.addEventListener("click",function(){
    console.log('torch')
      input.value=""
});