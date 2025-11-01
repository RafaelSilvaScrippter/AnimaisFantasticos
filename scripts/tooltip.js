let divToolTip;
const imagemToolTip = document.querySelector("[data-image]");
const containerContato = document.querySelector("[data-container-contato]");

function toolTip() {
  function postionToolTip(event) {
    const posicao = {
      x: event.layerX,
      y: event.layerY,
    };

    divToolTip.style.top = `${posicao.y}px`;
    divToolTip.style.left = `${posicao.x + 10}px`;

    return () => {
      imagemToolTip.removeEventListener("mousemove", postionToolTip);
    };
  }

  function criarToolTip() {
    const element = document.createElement("div");
    element.innerText = "Endereço proximo ao estacionamento";
    element.classList.add("tooltip");
    containerContato.appendChild(element);
    divToolTip = element;
    return () => {
      imagemToolTip.removeEventListener("mousenter", criarToolTip);
    };
  }

  imagemToolTip.addEventListener("mouseenter", () => {
    criarToolTip();
  });

  imagemToolTip.addEventListener("mousemove", (event) => {
    postionToolTip(event);
  });

  imagemToolTip.addEventListener("mouseleave", () => {
    containerContato.removeChild(divToolTip);
  });
}

export default toolTip;
