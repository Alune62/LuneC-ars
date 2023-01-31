"use script"

let rec = document.querySelector('.search-box');
document.querySelector('#icon-recherche').onclick = () =>{
    //ouverture de la barre de recherche
    rec.classList.toggle('active');//active lier avec notre css
    menu.classList.remove('active')//Fermeture du menu si la Barre de recherche est ouvert.
}


let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () =>{
    //ouverture Menu 
   
    menu.classList.toggle('active');//active lier avec notre css
    rec.classList.remove('active')// fermeture de la barre de recherche si le menu est ouvert
}
