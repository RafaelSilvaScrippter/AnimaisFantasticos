const modalDiv = document.querySelector("[data-modal]");
const linkAbrirModal = document.querySelector("[data-abrir-modal]");
const buttonFecharModal = document.querySelector("[data-fechar-modal]");

function modal() {
  function abrirModal() {
    modalDiv.classList.add("ativo");
  }

  function fecharModal(event) {
    event.preventDefault();
    modalDiv.classList.remove("ativo");
  }

  function handleClick(event) {
    if (modalDiv == event.target) {
      fecharModal(event);
    }
  }

  modalDiv.addEventListener("click", handleClick);

  buttonFecharModal.addEventListener("click", fecharModal);

  linkAbrirModal.addEventListener("click", abrirModal);
}

export default modal;
