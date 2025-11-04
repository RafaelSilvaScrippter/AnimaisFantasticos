class funcionamento {
  constructor(dataSemana, conteudoFuncionamento, horaSemana) {
    this.dataSemana = document.querySelector(dataSemana);
    this.conteudoFuncionamento = document.querySelector(conteudoFuncionamento);
    this.horaSemana = document.querySelector(horaSemana);
    this.horaAtual;
    this.horario;
    this.data;
    this.verificarHorario;
    this.horaSemana;
  }

  addClasses() {
    if (this.verificarHorario != -1 && this.horario) {
      this.conteudoFuncionamento.classList.add("aberto");
    } else {
      this.conteudoFuncionamento.classList.remove("aberto");
    }
  }

  verificarDia() {
    const dataAGora = new Date();
    this.data = this.horaSemana.dataset.semana.split(",").map(Number);
    this.verificarHorario = this.data.indexOf(dataAGora.getDay());
  }

  iniciarHorario() {
    const data = new Date();
    this.horaSemana = this.dataSemana.dataset.hora.split(",").map(Number);
    this.horaAtual = data.getHours();
    this.horario =
      this.horaAtual >= this.horaSemana[0] &&
      this.horaAtual < this.horaSemana[1];
  }

  init() {
    this.verificarDia();
    this.iniciarHorario();
    this.addClasses();
  }
}

export default funcionamento;
