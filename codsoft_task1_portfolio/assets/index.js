const openMenu = document.querySelector("#mobile");
const closeMenu = document.querySelector("#close");
const navBar = document.querySelector("body > div.header");
const listMenu = document.querySelector("body > div.header.open.open-menu > div.menu > ul");

// Responsive header
// if (openMenu) {
//     openMenu.addEventListener("click", ()=>{
//         navBar.classList.add("open");
//         listMenu.classList.add("open-menu");
//     });
// }



//footer year
year=document.querySelector("#year").innerHTML = new Date().getFullYear();