const dataNumeros = document.querySelectorAll("[data-numero]");
const containerNumeros = document.querySelector("[data-numeros-container]");
class AnimNumeros {
  constructor(dataNumeros, containerNumeros) {
    this.dataNumeros = document.querySelectorAll(dataNumeros);
    this.containerNumeros = document.querySelector(containerNumeros);
    this.Animar = this.Animar.bind(this);
    this.handleMutation = this.handleMutation.bind(this);
  }

  async fetchNumeros() {
    const response = await fetch("./json/Animais.json");
    const dados = await response.json();
    dados.forEach(({ numeros }, index) => {
      this.dataNumeros[index].innerText = numeros;
    });
    this.Animar = this.Animar.bind(this);
    this.handleMutation = this.handleMutation.bind(this);
  }

  Animar() {
    this.dataNumeros.forEach((item, index) => {
      let start = 0;
      const total = Number(item.innerText);

      const incremento = total / 120;
      this.dataNumeros[index].innerText = 0;
      const timer = setInterval(() => {
        start += incremento;
        item.innerText = Math.floor(start);
        if (start >= total) {
          item.innerText = total;
          clearInterval(timer);
        }
      }, 90 * Math.random());
    });
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      this.Animar();
      this.observer.disconnect();
    }
  }

  observador() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.containerNumeros, {
      attributes: true,
    });
  }

  async init() {
    await this.fetchNumeros();
    this.observador();
  }
}

export default AnimNumeros;
