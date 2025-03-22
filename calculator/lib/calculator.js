'use strict';

window.calculator = window.calculator || {};

// ------------------------
// Pure Logic Functions
// ------------------------
function addNumber(a, b) {
  return a + b;
}

function subtractNumber(a, b) {
  return a - b;
}

function toggleSign(value) {
  if (value.startsWith('-')) {
    return value.substring(1);
  } else {
    return '-' + value;
  }
}

function getSquareRoot(num) {
  if (num < 0) {
    return 'Error';
  }
  return Math.sqrt(num).toString();
}

function toPercent(value) {
  const num = parseFloat(value) || 0;
  return (num / 100).toString();
}

// Memory logic
let memory = 0;
function memoryPlus(val) {
  memory += val;
}
function memoryMinus(val) {
  memory -= val;
}
function getMemory() {
  return memory;
}
function clearMemory() {
  memory = 0;
}

// ------------------------
// UI Interaction Functions
// ------------------------
let currentInput = '';
let operand = '';
let operator = '';
let displayElement = null;
let overwrite = false; 


function init() {
  displayElement = document.getElementById('display');
}

function updateDisplay(value) {
  if (displayElement) {
    displayElement.value = value;
  }
}

function appendNumber(num) {
  if (overwrite) {
    currentInput = '';   
    overwrite = false;   
  }
  currentInput += num.toString();
  updateDisplay(currentInput);
}


function clearDisplay() {
  currentInput = '';
  operand = '';
  operator = '';
  updateDisplay('');
}

function changeSign() {
  if (currentInput === '') return;
  currentInput = toggleSign(currentInput);
  updateDisplay(currentInput);
}

function squareRoot() {
  if (currentInput === '') return;
  currentInput = getSquareRoot(parseFloat(currentInput));
  updateDisplay(currentInput);
}

function percent() {
  if (currentInput === '') return;
  currentInput = toPercent(currentInput);
  updateDisplay(currentInput);
}

function setOperator(op) {
  if (currentInput === '' && operand === '') return;
  if (operand === '') {
    operand = currentInput;
    currentInput = '';
  }
  operator = op;
}

function add() {
  setOperator('+');
}

function subtract() {
  setOperator('-');
}

function multiply() {
  setOperator('*');
}

function divide() {
  setOperator('/');
}

function calculate() {
  if (operator === '' || currentInput === '') return;
  const num1 = parseFloat(operand);
  const num2 = parseFloat(currentInput);
  let result = 0;
  switch (operator) {
    case '+':
      result = addNumber(num1, num2);
      break;
    case '-':
      result = subtractNumber(num1, num2);
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
  }
  updateDisplay(result);
  operand = result.toString();
  currentInput = '';
  operator = '';
  overwrite = true; // next number should start fresh
}


function memoryRecall() {
  currentInput = getMemory().toString();
  updateDisplay(currentInput);
  overwrite = true; // next number should clear this recall
}


// --- These two UI functions read the currentInput and call the pure logic. ---
function memoryPlusUI() {
  memoryPlus(parseFloat(currentInput) || 0);
  currentInput = '';
  updateDisplay('');
  overwrite = true;
}

function memoryMinusUI() {
  memoryMinus(parseFloat(currentInput) || 0);
  currentInput = '';
  updateDisplay('');
  overwrite = true;
}


// ------------------------
// Expose Functions for Testing & UI
// ------------------------
window.calculator.addNumber = addNumber;
window.calculator.subtractNumber = subtractNumber;
window.calculator.toggleSign = toggleSign;
window.calculator.getSquareRoot = getSquareRoot;
window.calculator.toPercent = toPercent;
window.calculator.memoryPlus = memoryPlus;
window.calculator.memoryMinus = memoryMinus;
window.calculator.getMemory = getMemory;
window.calculator.clearMemory = clearMemory;

window.calculator.init = init;
window.calculator.appendNumber = appendNumber;
window.calculator.clearDisplay = clearDisplay;
window.calculator.changeSign = changeSign;
window.calculator.squareRoot = squareRoot;
window.calculator.percent = percent;
window.calculator.add = add;
window.calculator.subtract = subtract;
window.calculator.multiply = multiply;
window.calculator.divide = divide;
window.calculator.calculate = calculate;
window.calculator.memoryRecall = memoryRecall;
window.calculator.memoryPlusUI = memoryPlusUI;
window.calculator.memoryMinusUI = memoryMinusUI;
