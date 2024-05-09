let bar = document.getElementById("hamburger");
let nav = document.getElementsById("nav");


if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}