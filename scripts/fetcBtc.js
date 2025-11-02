function Bitcoin() {
  const spanBtc = document.querySelector("[data-btc]");
  async function fetchBtc() {
    try {
      const response = await fetch("https://blockchain.info/ticker");
      const dados = await response.json();
      const quantidade = 100 / dados.BRL.sell;
      spanBtc.innerText = quantidade.toFixed(4);
    } catch (err) {
      console.log("Um erro ocorreu", err);
    }
  }
  fetchBtc();
}

export default Bitcoin;
