class scrollSuave {
  constructor(linksNavegacao, conteudoLink) {
    this.linksNavegacao = document.querySelectorAll(linksNavegacao);
    this.conteudoLink = document.querySelectorAll(conteudoLink);
  }

  handleClick(event, index) {
    event.preventDefault();
    const distanciaScroll = this.conteudoLink[index].offsetTop;
    window.scrollTo({
      top: distanciaScroll,
      behavior: "smooth",
    });
  }

  clickLink() {
    this.linksNavegacao.forEach((item, index) => {
      item.addEventListener("click", (event) => {
        this.handleClick(event, index);
      });
    });
  }

  init() {
    this.clickLink();
  }
}

export default scrollSuave;
