class toolTip {
  constructor(imagemToolTip, containerContato) {
    this.imagemToolTip = document.querySelector(imagemToolTip);
    this.containerContato = document.querySelector(containerContato);
    this.divToolTip;
    this.posicao;
  }

  pegarPosicao(event) {
    this.posicao = {
      x: event.layerX,
      y: event.layerY,
    };
  }

  postionToolTip(event) {
    this.divToolTip.style.top = `${this.posicao.y}px`;
    this.divToolTip.style.left = `${this.posicao.x + 10}px`;

    return () => {
      this.imagemToolTip.removeEventListener("mousemove", this.postionToolTip);
    };
  }

  criarToolTip() {
    const element = document.createElement("div");
    element.innerText = "Endereço proximo ao estacionamento";
    element.classList.add("tooltip");
    this.containerContato.appendChild(element);
    this.divToolTip = element;
    return () => {
      this.imagemToolTip.removeEventListener("mousenter", this.criarToolTip);
    };
  }

  eventoMouse() {
    this.imagemToolTip.addEventListener("mouseenter", () => {
      this.criarToolTip();
    });

    this.imagemToolTip.addEventListener("mousemove", (event) => {
      this.postionToolTip(event);
    });
    this.imagemToolTip.addEventListener("mousemove", (event) => {
      this.pegarPosicao(event);
    });

    this.imagemToolTip.addEventListener("mouseleave", () => {
      this.containerContato.removeChild(this.divToolTip);
    });
  }

  init() {
    this.eventoMouse();
  }
}

export default toolTip;
