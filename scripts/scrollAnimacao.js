function scrollAnimacao() {
  const conteudoSecao = document.querySelectorAll("[data-anim-scroll]");

  function animarScroll() {
    conteudoSecao.forEach((item) => {
      if (item.getBoundingClientRect().top <= 140) {
        item.classList.add("ativo");
      } else {
        item.classList.remove("ativo");
      }
    });
  }

  window.addEventListener("scroll", animarScroll);
}

export default scrollAnimacao;
