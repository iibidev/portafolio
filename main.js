const $ = (el) => document.querySelector(el); 
const $$ = (el) => document.querySelectorAll(el);

const html = document.documentElement;
const changeModeBtn = $("#changeModeBtn");
const modeIcon = $(".lightDarkModeBtn > i");

changeModeBtn.addEventListener("click", ()=>{
    const mode = html.getAttribute("data-theme");
    if(mode === "dark"){
        html.setAttribute("data-theme", "light");
        modeIcon.classList.replace("ri-sun-line", "ri-moon-line");
    }else{
        html.setAttribute("data-theme", "dark");
        modeIcon.classList.replace("ri-moon-line", "ri-sun-line");
    }
});