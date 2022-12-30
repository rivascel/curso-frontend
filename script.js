const menuEmail=document.querySelector('.navbar-email');

const destokMenu=document.querySelector('.desktop-menu');

menuEmail.addEventListener('click',toggleDeskTopMenu);

function toggleDeskTopMenu(){
    destokMenu.classList.toggle('inactive');

}