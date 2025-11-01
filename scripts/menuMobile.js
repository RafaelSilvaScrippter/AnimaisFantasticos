import outsideClick from "./outsideClick.js";
const btnMenuMobile = document.querySelector("[data-btn-menu-mobile]");
const navMenuMobile = document.querySelector("[data-container-menu]");
const containerPaiMenu = document.querySelector("[data-comparar]");

function menuMobile() {
  function abrirMenu() {
    navMenuMobile.classList.toggle("ativo");
    btnMenuMobile.classList.toggle("ativo");
  }

  btnMenuMobile.addEventListener("click", () => {
    abrirMenu();
  });

  outsideClick(navMenuMobile, containerPaiMenu, "ativo");
  outsideClick(btnMenuMobile, containerPaiMenu, "ativo");
}

export default menuMobile;
