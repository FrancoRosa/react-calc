import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  if (numberOne === 'Error') return 'Error';

  let result = new Big(numberOne);
  const value = numberTwo == null ? result : new Big(numberTwo);

  switch (operation) {
    case '÷':
      result = value !== 0 ? result.div(value) : 'Error';
      break;
    case 'x':
      result = result.times(value).prec(20);
      break;
    case '-':
      result = result.minus(value);
      break;
    case '+':
      result = result.plus(value);
      break;
    default:
      break;
  }
  return result;
};

export default operate;
