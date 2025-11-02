const dataSemana = document
  .querySelector("[data-semana")
  .dataset.semana.split(",")
  .map(Number);

const conteudoFuncionamento = document.querySelector(".horario-funcionamento");

const horaSemana = document
  .querySelector("[data-hora]")
  .dataset.hora.split(",")
  .map(Number);

const data = new Date();
const diaSemana = data.getDay();
const horaAtual = data.getHours();

const verificaHora = horaAtual > horaSemana[0] && horaAtual < horaSemana[1];

if (dataSemana.indexOf(diaSemana) !== -1 && verificaHora)
  conteudoFuncionamento.classList.add("aberto");
else {
  conteudoFuncionamento.classList.remove("aberto");
}
function funcionamento() {}

export default funcionamento;
