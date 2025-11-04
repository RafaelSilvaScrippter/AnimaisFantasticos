class initFaqClick {
  constructor(dtTitulo, ddDescricao) {
    this.dtTitulo = document.querySelectorAll(dtTitulo);
    this.ddDescricao = document.querySelectorAll(ddDescricao);
  }

  clickDt() {
    this.dtTitulo.forEach((item, index) => {
      item.addEventListener("click", () => {
        this.ativarDd(index);
      });
    });
  }
  ativarDd(index) {
    this.ddDescricao[index].classList.toggle("ativo-dd");
  }

  init() {
    this.clickDt();
  }
}

export default initFaqClick;
