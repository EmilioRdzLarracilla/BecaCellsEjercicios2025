console.log("calculadora");

const d = document;
const buttonBox = d.querySelector(".calc-buttons");
const expresionCont = d.querySelector(".calc-expresion");
const resultCont = d.querySelector(".calc-result");

let expresion = "";
let result = "";

const addValue = (value) => {
  expresion += value;
};

const updateDisplay = (expresion, result) => {
  expresionCont.textContent = expresion;
  resultCont.textContent = result;
};

const clear = () => {
  expresion = "";
  result = "";
};

const backspace = () => {
  expresion = expresion.slice(0, -1);
};

const isLastCharOperator = () => {
  return isNaN(parseInt(expresion.slice(0, -1)));
};

const startFromResult = (value) => {
  expresion += result + value;
};

const evaluateExpresion = () => {
  const evalResul = eval(expresion);

  return isNaN(evalResul) || !isFinite(evalResul)
    ? " "
    : evalResul < 1
    ? parseFloat(evalResul.toFixed(20))
    : parseFloat(evalResul.toFixed(2));
};

const submit = () => {
  result = evaluateExpresion();
  expresion = "";
};
const buttonClick = (e) => {
  const action = e.target.dataset.action;
  const value = e.target.dataset.value;

  switch (action) {
    case "number":
      addValue(value);
      break;
    case "clear":
      clear();
      break;
    case "backspace":
      backspace();
      break;
    case "addition":
    case "substraction":
    case "multiplication":
    case "division":
      if (expresion === "" && result !== "") {
        startFromResult(value);
      } else if (expresion !== "" && !isLastCharOperator()) {
        addValue(value);
      }
      break;
    case "submit":
      submit();
    default:
      break;
  }

  updateDisplay(expresion, result);
};

buttonBox.addEventListener("click", buttonClick);
