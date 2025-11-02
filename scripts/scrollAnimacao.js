function scrollAnimacao() {
  const conteudoSecao = document.querySelectorAll("[data-anim-scroll]");

  function animarScroll() {
    conteudoSecao.forEach((item) => {
      if (item.getBoundingClientRect().top <= 400) {
        item.classList.add("ativo");
      } else if (item.classList.contains("ativo")) {
        item.classList.remove("ativo");
      }
    });
  }

  window.addEventListener("scroll", animarScroll);
}

export default scrollAnimacao;
