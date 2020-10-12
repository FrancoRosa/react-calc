import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  const result = {
    total,
    next,
    operation,
  };

  const operations = ['÷', 'x', '-', '+', '%', '='];
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  if (operations.includes(buttonName)) {
    if (result.operation == null) result.next = result.total;
    else result.total = String(operate(result));
    result.operation = buttonName;
  }

  if (numbers.includes(buttonName)) {
    if (result.total != null && result.total !== '0') result.total += buttonName;
    else result.total = buttonName;
  }

  if (buttonName === '+/-') {
    result.total = String(-1 * parseFloat(result.total));
  }

  if (buttonName === 'AC') {
    result.total = '0';
  }

  if (buttonName === '.') {
    if (result.total == null) result.total = '0.';
    if (!result.total.includes('.')) result.total += '.';
  }

  return result;
};

export default calculate;
