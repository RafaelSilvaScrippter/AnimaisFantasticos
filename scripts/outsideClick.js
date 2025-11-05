class outsideClick {
  constructor(elemento, comparar) {
    this.elemento = elemento;
    this.comparar = comparar;
  }

  clicqueFora(event) {
    if (
      !!this.comparar.contains(event.target) &&
      this.elemento.classList.contains("ativo")
    ) {
    } else {
      this.elemento.classList.remove("ativo");
    }
  }

  windowClick() {
    window.addEventListener("click", (event) => {
      this.clicqueFora(event);
    });
  }

  init() {
    this.windowClick();
  }
}

export default outsideClick;
