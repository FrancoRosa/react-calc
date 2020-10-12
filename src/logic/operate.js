import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result = new Big(numberOne);
  const value = new Big(numberTwo);
  switch (operation) {
    case '÷':
      result /= value;
      break;
    case 'x':
      result *= value;
      break;
    case '-':
      result -= value;
      break;
    case '+':
      result += value;
      break;
    case '%':
      result *= 0.01;
      break;
    default:
      break;
  }
  return result;
};

export default operate;
