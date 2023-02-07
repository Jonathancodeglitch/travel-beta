const nav=document.querySelector('.nav');
const menu=document.getElementById('menu');
const buttonLeft=document.getElementById('left');
const buttonRight=document.getElementById('right');
const specialContainer=document.getElementById("special-container")

menu.addEventListener("click",function(){
     nav.classList.toggle('open-nav');
     menu.classList.toggle("change-menu")
});


buttonRight.addEventListener("click",()=>{
     
    specialContainer.scrollLeft +=100
    console.log(specialContainer.scrollLeft)
});
buttonLeft.addEventListener("click",()=>{
    specialContainer.scrollLeft -= 100
});

