import scrollAnimacao from "./scripts/scrollAnimacao.js";
import menuMobile from "./scripts/menuMobile.js";
import toolTip from "./scripts/tooltip.js";
import dropDownMenu from "./scripts/dropdown.js";
import initNum from "./scripts/numeros.js";
import funcionamento from "./scripts/funcionamento.js";
import Bitcoin from "./scripts/fetcBtc.js";
import navegacaoPorTab from "./scripts/tabNav.js";
import scrollClick from "./scripts/scrollClick.js";
import initFaqClick from "./scripts/faqClick.js";
import Modal from "./scripts/modal.js";

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

navegacaoPorTab();
scrollClick();
initNum();
dropDownMenu();
toolTip();
menuMobile();
scrollAnimacao();
