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

let options={
    threshold:0,
    rootMargin:"0px 0px -250px 0px"
   
}

const destinationCard=document.querySelectorAll(".fade-in");
const bookingSlide=document.querySelectorAll(".slide-in");

const observer =new IntersectionObserver((entries,observer)=>{
     entries.forEach(entry=>{
        if(!entry.isIntersecting){
           return;
        }
        else{
            
            entry.target.classList.add('appear')
            observer.unobserve(entry.target)
        }
         
     })
},options)



destinationCard.forEach(card=>{
    observer.observe(card);
})



bookingSlide.forEach(booking=>{
     observer.observe(booking)
})