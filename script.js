// Dark / Light Mode Toggle

const themeButton = document.getElementById("theme");

const body = document.body;


let darkMode = true;


themeButton.addEventListener("click",()=>{


darkMode = !darkMode;


if(darkMode){

body.style.background="#0F172A";
body.style.color="white";

themeButton.innerHTML=
'<i class="fa-solid fa-sun"></i>';

}

else{

body.style.background="#f8fafc";
body.style.color="#111827";


themeButton.innerHTML=
'<i class="fa-solid fa-moon"></i>';

}


});






// Scroll animation


const sections=document.querySelectorAll("section");


window.addEventListener("scroll",()=>{


sections.forEach(section=>{


const position=section.getBoundingClientRect().top;


const screenHeight=window.innerHeight;


if(position < screenHeight-100){


section.style.opacity="1";
section.style.transform="translateY(0)";


}


});


});






// Initial animation setup


sections.forEach(section=>{


section.style.opacity="0";

section.style.transform="translateY(50px)";

section.style.transition="all 0.8s ease";


});