class Modal {
  constructor(modalDiv, linkAbrirModal, buttonFecharModal) {
    this.modalDiv = document.querySelector(modalDiv);
    this.linkAbrirModal = document.querySelector(linkAbrirModal);
    this.buttonFecharModal = document.querySelector(buttonFecharModal);
    this.abrirModal = this.abrirModal.bind(this);
    this.fecharModal = this.fecharModal.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  abrirModal() {
    console.log(this.modalDiv);
    this.modalDiv.classList.add("ativo");
  }

  fecharModal(event) {
    event.preventDefault();
    this.modalDiv.classList.remove("ativo");
  }

  handleClick(event) {
    if (this.modalDiv == event.target) {
      this.fecharModal(event);
    }
  }

  eventos() {
    this.modalDiv.addEventListener("click", this.handleClick);

    this.buttonFecharModal.addEventListener("click", this.fecharModal);

    this.linkAbrirModal.addEventListener("click", this.abrirModal);
  }

  init() {
    this.eventos();
  }
}

export default Modal;
