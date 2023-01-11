const menuBtn = document.querySelector('.m-menu');
const menu = document.querySelector('.menu-sidebar');

menuBtn.addEventListener('click', function (event){
    event.preventDefault();
    menu.classList.toggle('active');
});