let hamBtn = document.querySelector('.hamburger-custom')
let ham1 = document.querySelector('.ham1')
let ham2 = document.querySelector('.ham2')
let ham3 = document.querySelector('.ham3')
let navUlBg = document.querySelector('.navigation-right-side')
let navUl = document.querySelector('.navigation-ul')

let clicked = false;

hamBtn.addEventListener('click', function() {
    if (clicked === false) {
        ham3.style.display = "none"
        ham1.style.transform = "rotate(45deg)"
        ham2.style.transform = "rotate(-45deg)"
        ham2.style.marginTop = "-7px"

        navUlBg.style.left = "0"
        
        clicked = true;
    } else if (clicked === true) {
        ham3.style.display = "block"
        ham1.style.transform = "rotate(0)"
        ham2.style.transform = "rotate(0)"
        ham2.style.marginTop = "0"

        navUlBg.style.left = "-200px"
        
        clicked = false;
    }
})