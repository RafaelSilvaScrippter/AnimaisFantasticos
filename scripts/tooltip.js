const divToolTip = document.querySelector("[data-tooltip]");
const imagemToolTip = document.querySelector("[data-image]");

function toolTip() {
  function postionToolTip(event) {
    const posicao = {
      x: event.layerX,
      y: event.layerY,
    };

    divToolTip.style.top = `${posicao.y}px`;
    divToolTip.style.left = `${posicao.x + 10}px`;

    return () => {
      window.removeEventListener("mousemove", postionToolTip);
    };
  }

  imagemToolTip.addEventListener("mousemove", (event) => {
    divToolTip.style.display = "block";
    postionToolTip(event);
  });
  imagemToolTip.addEventListener("mouseleave", () => {
    divToolTip.style.display = "none";
  });
}

export default toolTip;
