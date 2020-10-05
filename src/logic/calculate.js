import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  const result = {
    total,
    next,
    operation,
  };

  const operations = ['÷', 'x', '-', '+', '%'];

  if (operations.includes(buttonName)) {
    result.total = operate(result.total, result.next, buttonName);
  }

  if (buttonName === '+/-') {
    result.total *= -1;
    result.next *= -1;
  }

  return result;
};

export default calculate;
