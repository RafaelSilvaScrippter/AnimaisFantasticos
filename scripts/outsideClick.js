function outsideClick(elemento, comparar, classe) {
  function clicqueFora(event) {
    if (
      !!comparar.contains(event.target) &&
      elemento.classList.contains("ativo")
    ) {
    } else {
      elemento.classList.remove("ativo");
    }
  }

  window.addEventListener("click", (event) => {
    clicqueFora(event);
  });
}

export default outsideClick;
