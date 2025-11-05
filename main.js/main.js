/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_scrollAnimacao_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/scrollAnimacao.js */ \"./scripts/scrollAnimacao.js\");\n/* harmony import */ var _scripts_menuMobile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/menuMobile.js */ \"./scripts/menuMobile.js\");\n/* harmony import */ var _scripts_tooltip_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/tooltip.js */ \"./scripts/tooltip.js\");\n/* harmony import */ var _scripts_dropdown_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/dropdown.js */ \"./scripts/dropdown.js\");\n/* harmony import */ var _scripts_funcionamento_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/funcionamento.js */ \"./scripts/funcionamento.js\");\n/* harmony import */ var _scripts_fetcBtc_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/fetcBtc.js */ \"./scripts/fetcBtc.js\");\n/* harmony import */ var _scripts_tabNav_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/tabNav.js */ \"./scripts/tabNav.js\");\n/* harmony import */ var _scripts_scrollClick_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scripts/scrollClick.js */ \"./scripts/scrollClick.js\");\n/* harmony import */ var _scripts_faqClick_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scripts/faqClick.js */ \"./scripts/faqClick.js\");\n/* harmony import */ var _scripts_modal_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scripts/modal.js */ \"./scripts/modal.js\");\n/* harmony import */ var _scripts_numeros_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./scripts/numeros.js */ \"./scripts/numeros.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nconst modal = new _scripts_modal_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"](\n  \"[data-modal]\",\n  \"[data-abrir-modal]\",\n  \"[data-fechar-modal]\"\n);\n\nmodal.init();\n\nconst faqClick = new _scripts_faqClick_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"](\"dt\", \"dd\");\nfaqClick.init();\n\nconst bitcoin = new _scripts_fetcBtc_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](\"[data-btc]\");\nbitcoin.init();\n\nconst funcionamentoInit = new _scripts_funcionamento_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\n  \"[data-semana]\",\n  \".horario-funcionamento\",\n  \"[data-hora]\"\n);\nfuncionamentoInit.init();\n\nconst numeros = new _scripts_numeros_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"](\"[data-numero]\", \"[data-numeros-container]\");\nnumeros.init();\n\n(0,_scripts_tabNav_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_scripts_scrollClick_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_scripts_dropdown_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_scripts_tooltip_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_scripts_menuMobile_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nconst scroll = new _scripts_scrollAnimacao_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"[data-anim-scroll]\");\n\nscroll.init();\n\n\n//# sourceURL=webpack://animaisfantasticos/./script.js?\n}");

/***/ }),

/***/ "./scripts/dropdown.js":
/*!*****************************!*\
  !*** ./scripts/dropdown.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst listaDropDown = document.querySelector(\"[data-lista-dropdown]\");\nconst linkSobreDropdown = document.querySelector(\"[data-link-sobre]\");\nlet clickNoLink = false;\nconst dataHeader = document.querySelector(\"[data-header]\");\n\nfunction dropDownMenu() {\n  function abrirDropDown() {\n    listaDropDown.classList.add(\"ativo\");\n  }\n\n  function fecharDropDown() {\n    if (clickNoLink == false) listaDropDown.classList.remove(\"ativo\");\n  }\n\n  window.addEventListener(\"click\", (event) => {\n    if (\n      event.target !== linkSobreDropdown &&\n      listaDropDown.contains(event.target) == false\n    ) {\n      listaDropDown.classList.remove(\"ativo\");\n      clickNoLink = false;\n    } else {\n      listaDropDown.classList.add(\"ativo\");\n    }\n  });\n\n  linkSobreDropdown.addEventListener(\"click\", () => {\n    clickNoLink = true;\n  });\n\n  if (clickNoLink == false) {\n    linkSobreDropdown.addEventListener(\"mouseenter\", abrirDropDown);\n    dataHeader.addEventListener(\"mouseleave\", fecharDropDown);\n    listaDropDown.addEventListener(\"mouseleave\", fecharDropDown);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dropDownMenu);\n\n\n//# sourceURL=webpack://animaisfantasticos/./scripts/dropdown.js?\n}");

/***/ }),

/***/ "./scripts/faqClick.js":
/*!*****************************!*\
  !*** ./scripts/faqClick.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass initFaqClick {\n  constructor(dtTitulo, ddDescricao) {\n    this.dtTitulo = document.querySelectorAll(dtTitulo);\n    this.ddDescricao = document.querySelectorAll(ddDescricao);\n  }\n\n  clickDt() {\n    this.dtTitulo.forEach((item, index) => {\n      item.addEventListener(\"click\", () => {\n        this.ativarDd(index);\n      });\n    });\n  }\n  ativarDd(index) {\n    this.ddDescricao[index].classList.toggle(\"ativo-dd\");\n  }\n\n  init() {\n    this.clickDt();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initFaqClick);\n\n\n//# sourceURL=webpack://animaisfantasticos/./scripts/faqClick.js?\n}");

/***/ }),

/***/ "./scripts/fetcBtc.js":
/*!****************************!*\
  !*** ./scripts/fetcBtc.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Bitcoin {\n  constructor(spanBtc) {\n    this.spanBtc = document.querySelector(spanBtc);\n  }\n\n  async fetchBtc() {\n    try {\n      const response = await fetch(\"https://blockchain.info/ticker\");\n      const dados = await response.json();\n      const quantidade = 100 / dados.BRL.sell;\n      this.spanBtc.innerText = quantidade.toFixed(4);\n    } catch (err) {\n      console.log(\"Um erro ocorreu\", err);\n    }\n  }\n\n  init() {\n    this.fetchBtc();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bitcoin);\n\n\n//# sourceURL=webpack://animaisfantasticos/./scripts/fetcBtc.js?\n}");

/***/ }),

/***/ "./scripts/funcionamento.js":
/*!**********************************!*\
  !*** ./scripts/funcionamento.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass funcionamento {\n  constructor(dataSemana, conteudoFuncionamento, horaSemana) {\n    this.dataSemana = document.querySelector(dataSemana);\n    this.conteudoFuncionamento = document.querySelector(conteudoFuncionamento);\n    this.horaSemana = document.querySelector(horaSemana);\n    this.horaAtual;\n    this.horario;\n    this.data;\n    this.verificarHorario;\n    this.horaSemana;\n  }\n\n  addClasses() {\n    if (this.verificarHorario != -1 && this.horario) {\n      this.conteudoFuncionamento.classList.add(\"aberto\");\n    } else {\n      this.conteudoFuncionamento.classList.remove(\"aberto\");\n    }\n  }\n\n  verificarDia() {\n    const dataAGora = new Date();\n    this.data = this.horaSemana.dataset.semana.split(\",\").map(Number);\n    this.verificarHorario = this.data.indexOf(dataAGora.getDay());\n  }\n\n  iniciarHorario() {\n    const data = new Date();\n    this.horaSemana = this.dataSemana.dataset.hora.split(\",\").map(Number);\n    this.horaAtual = data.getHours();\n    this.horario =\n      this.horaAtual >= this.horaSemana[0] &&\n      this.horaAtual < this.horaSemana[1];\n  }\n\n  init() {\n    this.verificarDia();\n    this.iniciarHorario();\n    this.addClasses();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (funcionamento);\n\n\n//# sourceURL=webpack://animaisfantasticos/./scripts/funcionamento.js?\n}");

/***/ }),

/***/ "./scripts/menuMobile.js":
/*!*******************************!*\
  !*** ./scripts/menuMobile.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./scripts/outsideClick.js\");\n\nconst btnMenuMobile = document.querySelector(\"[data-btn-menu-mobile]\");\nconst navMenuMobile = document.querySelector(\"[data-container-menu]\");\nconst containerPaiMenu = document.querySelector(\"[data-comparar]\");\n\nfunction menuMobile() {\n  function abrirMenu() {\n    navMenuMobile.classList.toggle(\"ativo\");\n    btnMenuMobile.classList.toggle(\"ativo\");\n  }\n\n  btnMenuMobile.addEventListener(\"click\", () => {\n    abrirMenu();\n  });\n\n  (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(navMenuMobile, containerPaiMenu, \"ativo\");\n  (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(btnMenuMobile, containerPaiMenu, \"ativo\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuMobile);\n\n\n//# sourceURL=webpack://animaisfantasticos/./scripts/menuMobile.js?\n}");

/***/ }),

/***/ "./scripts/modal.js":
/*!**************************!*\
  !*** ./scripts/modal.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Modal {\n  constructor(modalDiv, linkAbrirModal, buttonFecharModal) {\n    this.modalDiv = document.querySelector(modalDiv);\n    this.linkAbrirModal = document.querySelector(linkAbrirModal);\n    this.buttonFecharModal = document.querySelector(buttonFecharModal);\n    this.abrirModal = this.abrirModal.bind(this);\n    this.fecharModal = this.fecharModal.bind(this);\n    this.handleClick = this.handleClick.bind(this);\n  }\n\n  abrirModal() {\n    console.log(this.modalDiv);\n    this.modalDiv.classList.add(\"ativo\");\n  }\n\n  fecharModal(event) {\n    event.preventDefault();\n    this.modalDiv.classList.remove(\"ativo\");\n  }\n\n  handleClick(event) {\n    if (this.modalDiv == event.target) {\n      this.fecharModal(event);\n    }\n  }\n\n  eventos() {\n    this.modalDiv.addEventListener(\"click\", this.handleClick);\n\n    this.buttonFecharModal.addEventListener(\"click\", this.fecharModal);\n\n    this.linkAbrirModal.addEventListener(\"click\", this.abrirModal);\n  }\n\n  init() {\n    this.eventos();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);\n\n\n//# sourceURL=webpack://animaisfantasticos/./scripts/modal.js?\n}");

/***/ }),

/***/ "./scripts/numeros.js":
/*!****************************!*\
  !*** ./scripts/numeros.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst dataNumeros = document.querySelectorAll(\"[data-numero]\");\nconst containerNumeros = document.querySelector(\"[data-numeros-container]\");\nclass AnimNumeros {\n  constructor(dataNumeros, containerNumeros) {\n    this.dataNumeros = document.querySelectorAll(dataNumeros);\n    this.containerNumeros = document.querySelector(containerNumeros);\n    this.Animar = this.Animar.bind(this);\n    this.handleMutation = this.handleMutation.bind(this);\n  }\n\n  async fetchNumeros() {\n    const response = await fetch(\"./json/Animais.json\");\n    const dados = await response.json();\n    dados.forEach(({ numeros }, index) => {\n      this.dataNumeros[index].innerText = numeros;\n    });\n    this.Animar = this.Animar.bind(this);\n    this.handleMutation = this.handleMutation.bind(this);\n  }\n\n  Animar() {\n    this.dataNumeros.forEach((item, index) => {\n      let start = 0;\n      const total = Number(item.innerText);\n\n      const incremento = total / 120;\n      this.dataNumeros[index].innerText = 0;\n      const timer = setInterval(() => {\n        start += incremento;\n        item.innerText = Math.floor(start);\n        if (start >= total) {\n          item.innerText = total;\n          clearInterval(timer);\n        }\n      }, 90 * Math.random());\n    });\n  }\n\n  handleMutation(mutation) {\n    if (mutation[0].target.classList.contains(\"ativo\")) {\n      this.Animar();\n      this.observer.disconnect();\n    }\n  }\n\n  observador() {\n    this.observer = new MutationObserver(this.handleMutation);\n    this.observer.observe(this.containerNumeros, {\n      attributes: true,\n    });\n  }\n\n  async init() {\n    await this.fetchNumeros();\n    this.observador();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnimNumeros);\n\n\n//# sourceURL=webpack://animaisfantasticos/./scripts/numeros.js?\n}");

/***/ }),

/***/ "./scripts/outsideClick.js":
/*!*********************************!*\
  !*** ./scripts/outsideClick.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction outsideClick(elemento, comparar, classe) {\n  function clicqueFora(event) {\n    if (\n      !!comparar.contains(event.target) &&\n      elemento.classList.contains(\"ativo\")\n    ) {\n    } else {\n      elemento.classList.remove(\"ativo\");\n    }\n  }\n\n  window.addEventListener(\"click\", (event) => {\n    clicqueFora(event);\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (outsideClick);\n\n\n//# sourceURL=webpack://animaisfantasticos/./scripts/outsideClick.js?\n}");

/***/ }),

/***/ "./scripts/scrollAnimacao.js":
/*!***********************************!*\
  !*** ./scripts/scrollAnimacao.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass scrollAnimacao {\n  constructor(conteudoSecao) {\n    this.conteudoSecao = document.querySelectorAll(conteudoSecao);\n    this.distancia;\n    this.pegarDistancia = this.pegarDistancia.bind(this);\n    this.containerSecao;\n  }\n\n  pegarDistancia() {\n    this.conteudoSecao.forEach((item) => {\n      this.distancia = item.getBoundingClientRect().top;\n      this.containerSecao = item;\n      this.adicionarClasse();\n    });\n  }\n\n  adicionarClasse() {\n    if (this.distancia <= 400) {\n      this.containerSecao.classList.add(\"ativo\");\n    } else if (this.containerSecao.classList.contains(\"ativo\")) {\n      this.containerSecao.classList.remove(\"ativo\");\n    }\n  }\n\n  init() {\n    window.addEventListener(\"scroll\", this.pegarDistancia);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollAnimacao);\n\n\n//# sourceURL=webpack://animaisfantasticos/./scripts/scrollAnimacao.js?\n}");

/***/ }),

/***/ "./scripts/scrollClick.js":
/*!********************************!*\
  !*** ./scripts/scrollClick.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst linksNavegacao = document.querySelectorAll(\"[data-link]\");\nconst conteudoLink = document.querySelectorAll(\"[data-conteudo]\");\n\nfunction scrollClick() {\n  function handleClick(event, index) {\n    event.preventDefault();\n    const distanciaScroll = conteudoLink[index].offsetTop;\n    console.log(distanciaScroll);\n    window.scrollTo({\n      top: distanciaScroll,\n      behavior: \"smooth\",\n    });\n  }\n\n  linksNavegacao.forEach((item, index) => {\n    item.addEventListener(\"click\", (event) => {\n      handleClick(event, index);\n    });\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollClick);\n\n\n//# sourceURL=webpack://animaisfantasticos/./scripts/scrollClick.js?\n}");

/***/ }),

/***/ "./scripts/tabNav.js":
/*!***************************!*\
  !*** ./scripts/tabNav.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst imgTab = document.querySelectorAll(\"[data-img-tab]\");\nconst conteudoTabNav = document.querySelectorAll(\"[data-tab-conteudo]\");\n\nfunction navegacaoPorTab() {\n  function navPorTab(item, index) {\n    if (index !== undefined) {\n      conteudoTabNav.forEach((item) => {\n        item.classList.remove(\"ativo\");\n      });\n      conteudoTabNav[index].classList.add(\"ativo\");\n    }\n  }\n\n  imgTab.forEach((itemImg, index) => {\n    itemImg.addEventListener(\"click\", () => {\n      navPorTab(itemImg, index);\n    });\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navegacaoPorTab);\n\n\n//# sourceURL=webpack://animaisfantasticos/./scripts/tabNav.js?\n}");

/***/ }),

/***/ "./scripts/tooltip.js":
/*!****************************!*\
  !*** ./scripts/tooltip.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet divToolTip;\nconst imagemToolTip = document.querySelector(\"[data-image]\");\nconst containerContato = document.querySelector(\"[data-container-contato]\");\n\nfunction toolTip() {\n  function postionToolTip(event) {\n    const posicao = {\n      x: event.layerX,\n      y: event.layerY,\n    };\n\n    divToolTip.style.top = `${posicao.y}px`;\n    divToolTip.style.left = `${posicao.x + 10}px`;\n\n    return () => {\n      imagemToolTip.removeEventListener(\"mousemove\", postionToolTip);\n    };\n  }\n\n  function criarToolTip() {\n    const element = document.createElement(\"div\");\n    element.innerText = \"Endereço proximo ao estacionamento\";\n    element.classList.add(\"tooltip\");\n    containerContato.appendChild(element);\n    divToolTip = element;\n    return () => {\n      imagemToolTip.removeEventListener(\"mousenter\", criarToolTip);\n    };\n  }\n\n  imagemToolTip.addEventListener(\"mouseenter\", () => {\n    criarToolTip();\n  });\n\n  imagemToolTip.addEventListener(\"mousemove\", (event) => {\n    postionToolTip(event);\n  });\n\n  imagemToolTip.addEventListener(\"mouseleave\", () => {\n    containerContato.removeChild(divToolTip);\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toolTip);\n\n\n//# sourceURL=webpack://animaisfantasticos/./scripts/tooltip.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./script.js");
/******/ 	
/******/ })()
;