const listaDropDown = document.querySelector("[data-lista-dropdown]");
const linkSobreDropdown = document.querySelector("[data-link-sobre]");
let clickNoLink = false;
const dataHeader = document.querySelector("[data-header]");

function dropDownMenu() {
  function abrirDropDown() {
    listaDropDown.classList.add("ativo");
  }

  function fecharDropDown() {
    if (clickNoLink == false) listaDropDown.classList.remove("ativo");
  }

  window.addEventListener("click", (event) => {
    if (
      event.target !== linkSobreDropdown &&
      listaDropDown.contains(event.target) == false
    ) {
      listaDropDown.classList.remove("ativo");
      clickNoLink = false;
    } else {
      listaDropDown.classList.add("ativo");
    }
  });

  linkSobreDropdown.addEventListener("click", () => {
    clickNoLink = true;
  });

  if (clickNoLink == false) {
    linkSobreDropdown.addEventListener("mouseenter", abrirDropDown);
    dataHeader.addEventListener("mouseleave", fecharDropDown);
    listaDropDown.addEventListener("mouseleave", fecharDropDown);
  }
}

export default dropDownMenu;
