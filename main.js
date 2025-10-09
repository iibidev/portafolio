const $ = (el) => document.querySelector(el); 
const $$ = (el) => document.querySelectorAll(el);

const html = document.documentElement;
const changeModeBtn = $("#changeModeBtn");
const modeIcon = $(".lightDarkModeBtn > i");

const welcome = $(".welcome");
const welcomeAnimation = $(".welcome__animation");
const welcomePic = $(".welcome__pic");
const welcomeBtn = $(".welcome__enter");
const backgroundMask = $(".backgroundMask");

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

welcomeBtn.addEventListener("click", ()=>{
    const anim = welcomeAnimation.animate(
        [
            { transform: 'translate(-50%, 80px)', opacity: 1 },
            { transform: 'translate(-50%, 200px)', opacity: 0 },
        ],
        {
            duration: 800,
            easing: 'ease',
            fill: "forwards"
        }
    );
    
    setTimeout(()=>{
        const anim2 = welcomePic.animate(
            [
                { width: '150px', opacity: 1 },
                { opacity: 0 },
                { width: '1000vw', opacity: 0 }
            ],
            {
                duration: 6000,
                fill: "forwards",
                easing: "ease",
            }
        )

        backgroundMask.classList.add("masked");
        setTimeout(()=>{
            backgroundMask.style.height = "auto";
            backgroundMask.style.overflow = "auto"; 
            backgroundMask.style.maskImage = "none"; 
            welcome.style.display = "none";           
        }, 2100);
    }, 300);
});