const dataNumeros = document.querySelectorAll("[data-numero]");
const containerNumeros = document.querySelector("[data-numeros-container]");

function initNum() {
  async function numeros() {
    const response = await fetch("./json/Animais.json");
    const dados = await response.json();

    dados.forEach((item, index) => {
      const total = Number(item.numeros);
      const incremento = total / 120;
      dataNumeros[index].innerText = 0;
      let start = 0;
      const timer = setInterval(() => {
        item.numeros = Math.floor(start);
        start += incremento;
        dataNumeros[index].innerText = Math.floor(start);
        if (start > total) {
          clearInterval();
          dataNumeros[index].innerText = total;
        }
      }, 90 * Math.random());
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      numeros();
      observer.disconnect();
    }
  }

  const observer = new MutationObserver(handleMutation);
  observer.observe(containerNumeros, {
    attributes: true,
  });
}
export default initNum;
