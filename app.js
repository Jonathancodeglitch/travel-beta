let navbar=document.querySelector('.nav-settings');
let floatChat=document.querySelector('.fixed-icon')
let text=floatChat.querySelector('p');
let floatingIcon=floatChat.querySelector('i')
function  myScrollFunction(){
    let y= window.scrollY
  
  if(y>590){
    floatChat.classList.add('floating-chat-visible')
  }
  if(y<590){
    floatChat.classList.remove('floating-chat-visible')
  }
};



window.addEventListener("scroll", myScrollFunction);

floatingIcon.addEventListener('click',()=>{
    text.textContent='Sorry we cant really help you this is just a simple landing page LOL!!'
    let orignalText='Hello,how can we help you?!!';
    let textCont=text.textContent
    if(orignalText!==textCont){
      setTimeout(function(){text.textContent=orignalText},4500)
    }

});

const hamburgerMenu=document.querySelector('.menu');
const navLInks=document.querySelector('.nav-links');
const closeNav=document.querySelector('.fa-xmark');
const links=document.querySelector('ul')
hamburgerMenu.addEventListener('click',()=>{
    navLInks.classList.toggle('open-links');

   if(navLInks.classList.contains('open-links')){
    hamburgerMenu.classList.add('change');
   }else{
    hamburgerMenu.classList.remove('change');
   }
   
   

});
