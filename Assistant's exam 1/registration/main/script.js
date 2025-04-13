let more = document.querySelector("#menu-burger");
let nav = document.querySelector("#nav");


more.addEventListener("click", function () {
    if(nav.style.opacity == 0) {
        nav.style.opacity = 1;
        nav.style.visibility = "visible";
    } else {
        nav.style.opacity = 0;
        nav.style.visibility = "hidden";
    }})

let addToCart = document.querySelectorAll(".add-to-cart");
let cartlength = document.querySelector("#cartlength");

addToCart.forEach(button => {
    button.addEventListener("click", function () {
        let currentLength = parseInt(cartlength.textContent) || 0;
        cartlength.textContent = currentLength + 1;
        cartlength.style.visibility = "visible";
    });
});