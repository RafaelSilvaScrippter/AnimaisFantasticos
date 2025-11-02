const dataNumeros = document.querySelectorAll("[data-numero]");
const containerNumeros = document.querySelector("[data-numeros-container]");

function initNum() {
  function numeros() {
    dataNumeros.forEach((item, index) => {
      const total = Number(item.innerText);
      const incremento = total / 120;

      let start = 0;
      const timer = setInterval(() => {
        item.innerText = Math.floor(start);
        start += incremento;
        if (start > total) {
          item.innerText = total;
          clearInterval();
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
