//Script para menus -----------------------------------------------------------
const nav = () => {
    const menu =  document.querySelector('.main-menu__icon');
    const navMenu = document.querySelector('.main-menu__nav ul');


    menu.addEventListener('click', ()=>{
        navMenu.classList.toggle('active');
    });

    navMenu.addEventListener('click', ()=>{
      navMenu.classList.toggle('active');
  });
  
}
nav();


//Script para paralax steps ---------------------------------------------------
var items = document.querySelectorAll(".list__item")
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      items[i].classList.add("in-view");
    }
  }
}
// listen for events
window.addEventListener("load", callbackFunc);
window.addEventListener("resize", callbackFunc);
window.addEventListener("scroll", callbackFunc)

//Script para proyectos -----------------------------------------------------
const buttonFinalizados = document.querySelector("#buttonFinalizados");
let buttonActual = document.querySelector("#buttonActual");
let buttonFuturos = document.querySelector("#buttonFuturos");

buttonFinalizados.addEventListener("click", mostrarFinalizados);
buttonActual.addEventListener("click", mostrarActual);
buttonFuturos.addEventListener("click", mostrarFuturos);
function mostrarFinalizados() {
    document.getElementById("sectionFinalizados").style.display = "flex";
    document.getElementById("sectionActual").style.display = "none";
    document.getElementById("sectionFuturos").style.display = "none";
}

function mostrarActual() {
    document.getElementById("sectionFinalizados").style.display = "none";
    document.getElementById("sectionActual").style.display = "flex";
    document.getElementById("sectionFuturos").style.display = "none";
}

function mostrarFuturos() {
    document.getElementById("sectionFinalizados").style.display = "none";
    document.getElementById("sectionActual").style.display = "none";
    document.getElementById("sectionFuturos").style.display = "flex";
}
  
//Script para galería -----------------------------------------------------
var slides=document.querySelector('.gallery__imgs').children;
var nextSlide=document.querySelector(".gallery__next");
var prevSlide=document.querySelector(".gallery__back");
var totalSlides=slides.length;
var index=0;

nextSlide.onclick=function () {
     next("next");
}
prevSlide.onclick=function () {
     next("prev");
}

function next(direction){

   if(direction=="next"){
      index++;
       if(index==totalSlides){
        index=0;
       }
   } 
   else{
           if(index==0){
            index=totalSlides-1;
           }
           else{
            index--;
           }
    }

  for(i=0;i<slides.length;i++){
          slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");     

}
