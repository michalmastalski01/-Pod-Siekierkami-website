const hamburger = document.querySelector("#hamburger");
const table = document.querySelector("ul");

const nav = document.querySelector("nav");
let v = 0;
let navPosition = nav.offsetTop;
let x = false;

hamburger.addEventListener("click", function hamNav() {
    v = 1 - v;
    if(v === 1 && window.innerWidth <= 768 && x == false){
        table.style.display = "block"; 
        nav.style.position = "absolute";
    }else if(v === 1 && window.innerWidth <= 768 && x == true) {
        table.style.display = "block"; 
    } else {
        table.style.display = "none"; 
        table.removeAttribute("display");
    }
});

window.addEventListener("scroll", function stickyNav(){
    console.log(nav.offsetTop);
    console.log(window.pageYOffset);
    if(window.pageYOffset >= navPosition){
        x = true;
        nav.classList.add("sticky");
        nav.removeAttribute("style");
    } else{
        x = false;
        nav.classList.remove("sticky");
        nav.style.position = "absolute";
    }
});