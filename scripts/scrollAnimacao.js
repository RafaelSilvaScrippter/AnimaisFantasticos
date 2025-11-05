class scrollAnimacao {
  constructor(conteudoSecao) {
    this.conteudoSecao = document.querySelectorAll(conteudoSecao);
    this.distancia;
    this.pegarDistancia = this.pegarDistancia.bind(this);
    this.containerSecao;
  }

  pegarDistancia() {
    this.conteudoSecao.forEach((item) => {
      this.distancia = item.getBoundingClientRect().top;
      this.containerSecao = item;
      this.adicionarClasse();
    });
  }

  adicionarClasse() {
    if (this.distancia <= 400) {
      this.containerSecao.classList.add("ativo");
    } else if (this.containerSecao.classList.contains("ativo")) {
      this.containerSecao.classList.remove("ativo");
    }
  }

  init() {
    window.addEventListener("scroll", this.pegarDistancia);
  }
}

export default scrollAnimacao;
