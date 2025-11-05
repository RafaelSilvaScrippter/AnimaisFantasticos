import scrollAnimacao from "./scripts/scrollAnimacao.js";
import menuMobile from "./scripts/menuMobile.js";
import toolTip from "./scripts/tooltip.js";
import dropDownMenu from "./scripts/dropdown.js";
import funcionamento from "./scripts/funcionamento.js";
import Bitcoin from "./scripts/fetcBtc.js";
import navegacaoPorTab from "./scripts/tabNav.js";
import scrollClick from "./scripts/scrollClick.js";
import initFaqClick from "./scripts/faqClick.js";
import Modal from "./scripts/modal.js";
import AnimNumeros from "./scripts/numeros.js";

const modal = new Modal(
  "[data-modal]",
  "[data-abrir-modal]",
  "[data-fechar-modal]"
);

modal.init();

const faqClick = new initFaqClick("dt", "dd");
faqClick.init();

const bitcoin = new Bitcoin("[data-btc]");
bitcoin.init();

const funcionamentoInit = new funcionamento(
  "[data-semana]",
  ".horario-funcionamento",
  "[data-hora]"
);
funcionamentoInit.init();

const numeros = new AnimNumeros("[data-numero]", "[data-numeros-container]");
numeros.init();

navegacaoPorTab();
scrollClick();
dropDownMenu();
toolTip();
menuMobile();
const scroll = new scrollAnimacao("[data-anim-scroll]");

scroll.init();
