class Bitcoin {
  constructor(spanBtc) {
    this.spanBtc = document.querySelector(spanBtc);
  }

  async fetchBtc() {
    try {
      const response = await fetch("https://blockchain.info/ticker");
      const dados = await response.json();
      const quantidade = 100 / dados.BRL.sell;
      this.spanBtc.innerText = quantidade.toFixed(4);
    } catch (err) {
      console.log("Um erro ocorreu", err);
    }
  }

  init() {
    this.fetchBtc();
  }
}

export default Bitcoin;
