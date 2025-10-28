function faqClick() {
  const dtTitulo = document.querySelectorAll("dt");
  const ddDescricao = document.querySelectorAll("dd");

  function ativarDd(index) {
    ddDescricao[index].classList.toggle("ativo-dd");
  }

  dtTitulo.forEach((item, index) => {
    item.addEventListener("click", () => {
      ativarDd(index);
    });
  });
}

export default faqClick;
