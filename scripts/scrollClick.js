const linksNavegacao = document.querySelectorAll("[data-link]");
const conteudoLink = document.querySelectorAll("[data-conteudo]");

function scrollClick() {
  function handleClick(event, index) {
    event.preventDefault();
    const distanciaScroll = conteudoLink[index].offsetTop;
    console.log(distanciaScroll);
    window.scrollTo({
      top: distanciaScroll,
      behavior: "smooth",
    });
  }

  linksNavegacao.forEach((item, index) => {
    item.addEventListener("click", (event) => {
      handleClick(event, index);
    });
  });
}

export default scrollClick;
