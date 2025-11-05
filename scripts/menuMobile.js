import outsideClick from "./outsideClick.js";

class menuMobile {
  constructor(btnMenuMobile, navMenuMobile, containerPaiMenu) {
    this.btnMenuMobile = document.querySelector(btnMenuMobile);
    this.navMenuMobile = document.querySelector(navMenuMobile);
    this.containerPaiMenu = document.querySelector(containerPaiMenu);
    this.clickMenuMobile = this.clickMenuMobile.bind(this);
  }

  abrir(menu) {
    this.navMenuMobile.classList.toggle("ativo");
    this.btnMenuMobile.classList.toggle("ativo");
  }

  clickMenuMobile() {
    this.btnMenuMobile.addEventListener("click", () => {
      this.abrir();
    });
  }

  init() {
    this.clickMenuMobile();
    new outsideClick(this.navMenuMobile, this.containerPaiMenu, "ativo").init();
    new outsideClick(this.btnMenuMobile, this.containerPaiMenu, "ativo").init();
  }
}

export default menuMobile;
