import { NegociacaoController } from "./controllers/negociacao-controller.js";

const crontroller = new NegociacaoController();

const form = document.querySelector(".form")

form.addEventListener('submit', event => {
  event.preventDefault();
  crontroller.adiciona();
  crontroller.limparFormulario();
})