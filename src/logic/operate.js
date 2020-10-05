import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  switch (operation) {
    case '÷':
      return Big(numberOne) / Big(numberTwo);
    case 'x':
      return Big(numberOne) * Big(numberTwo);
    case '-':
      return Big(numberOne) - Big(numberTwo);
    case '+':
      return Big(numberOne) + Big(numberTwo);
    case '%':
      return Big(numberOne) * Big(numberTwo) * 0.01;
    default:
      return Big(numberTwo);
  }
};

export default operate;
