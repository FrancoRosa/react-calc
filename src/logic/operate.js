import Big from 'big.js';
import { number } from 'prop-types';

const operate = (numberOne, numberTwo, operation) => {
  
  if (numberOne == 'Error') return 'Error';
  if (numberTwo == null) numberTwo = numberOne;

  let result = new Big(numberOne);
  const value = new Big(numberTwo);
  console.log(value);
  console.log(result);

  switch (operation) {
    case '÷':
      result = value != 0 ? result.div(value) : 'Error';
      break;
    case 'x':
      result = result.times(value);
      break;
    case '-':
      result = result.minus(value);
      break;
    case '+':
      result = result.plus(value);
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
