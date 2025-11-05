class dropDown {
  constructor(listaDropDown, linkSobreDropdown, dataHeader) {
    this.listaDropDown = document.querySelector(listaDropDown);
    this.linkSobreDropdown = document.querySelector(linkSobreDropdown);
    this.dataHeader = document.querySelector(dataHeader);
    this.clickNoLink = false;
    this.abrirDropDown = this.abrirDropDown.bind(this);
    this.fecharDropDown = this.fecharDropDown.bind(this);
    this.windowEvents = this.windowEvents.bind(this);
  }

  fecharDropDown() {
    if (this.clickNoLink == false) this.listaDropDown.classList.remove("ativo");
  }

  abrirDropDown() {
    this.listaDropDown.classList.add("ativo");
  }

  eventos() {
    if (this.clickNoLink == false) {
      this.linkSobreDropdown.addEventListener("mouseenter", this.abrirDropDown);
      this.dataHeader.addEventListener("mouseleave", this.fecharDropDown);
      this.listaDropDown.addEventListener("mouseleave", this.fecharDropDown);
    }
    this.linkSobreDropdown.addEventListener("click", () => {
      this.clickNoLink = true;
    });
  }

  windowEvents() {
    window.addEventListener("click", (event) => {
      if (
        event.target !== this.linkSobreDropdown &&
        this.listaDropDown.contains(event.target) == false
      ) {
        this.listaDropDown.classList.remove("ativo");
        this.clickNoLink = false;
      } else {
        this.listaDropDown.classList.add("ativo");
      }
    });
  }

  init() {
    this.eventos();
    this.windowEvents();
  }
}

export default dropDown;
