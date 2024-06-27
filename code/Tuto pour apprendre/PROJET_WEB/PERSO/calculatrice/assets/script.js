const buttons = document.querySelectorAll('button');
const formulaInput = document.getElementById('formule');
const resultDisplay = document.getElementById('resultat');
const clearButton = document.getElementById('effacer');
const equalButton = document.getElementById('egal');
const operators = ['+', '*', '/'];
let calculationResult = false;

function appendFormula(value) {
  if (calculationResult === true) {
    clearFormula();
    calculationResult = false;
  }
  formulaInput.value += value;
}

function clearFormula() {
  formulaInput.value = "";
  resultDisplay.textContent = "";
}

function calculateResult() {
  var formula = formulaInput.value;
  if (operators.includes(formula[0])) {
    formula = 'erreur';
  }
  if (formula === 'erreur') {
    resultDisplay.textContent = "Erreur : operateur";
  } else {
    resultDisplay.textContent = eval(formula);
  }
  calculationResult = true;
}

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    appendFormula(button.value);
  });
});

clearButton.addEventListener('click', (e) => {
  e.preventDefault();
  clearFormula();
});

equalButton.addEventListener('click', (e) => {
  e.preventDefault();
  calculateResult();
});