const linksNavegacao = document.querySelectorAll("[data-link]");
const conteudoLink = document.querySelectorAll("[data-conteudo]");

function scrollSuave() {
  function handleClick(index) {
    const distanciaScroll = conteudoLink[index].getBoundingClientRect().top;
    const somarDistancia = distanciaScroll - window.scrollY;
    window.scrollTo({
      top: somarDistancia,
      behavior: "smooth",
    });
  }

  linksNavegacao.forEach((item, index) => {
    item.addEventListener("click", () => {
      handleClick(index);
    });
  });
}

export default scrollSuave;
