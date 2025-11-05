class NavTab {
  constructor(imgTab, conteudoTabNav) {
    this.imgTab = document.querySelectorAll(imgTab);
    this.conteudoTabNav = document.querySelectorAll(conteudoTabNav);
  }

  navPorTab(item, index) {
    if (index !== undefined) {
      this.conteudoTabNav.forEach((item) => {
        item.classList.remove("ativo");
      });
      this.conteudoTabNav[index].classList.add("ativo");
    }
  }

  clickImg() {
    this.imgTab.forEach((itemImg, index) => {
      itemImg.addEventListener("click", () => {
        this.navPorTab(itemImg, index);
      });
    });
  }

  init() {
    this.clickImg();
  }
}

export default NavTab;
