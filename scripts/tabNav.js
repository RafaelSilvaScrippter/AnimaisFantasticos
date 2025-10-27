const imgTab = document.querySelectorAll("[data-img-tab]");
const conteudoTabNav = document.querySelectorAll("[data-tab-conteudo]");

function navegacaoPorTab() {
  function navPorTab(item, index) {
    if (index !== undefined) {
      conteudoTabNav.forEach((item) => {
        item.classList.remove("ativo");
      });
      conteudoTabNav[index].classList.add("ativo");
    }
  }

  imgTab.forEach((itemImg, index) => {
    itemImg.addEventListener("click", () => {
      navPorTab(itemImg, index);
    });
  });
}

export default navegacaoPorTab;
