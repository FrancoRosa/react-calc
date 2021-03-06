import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  const result = {
    total,
    next,
    operation,
  };

  const operations = ['÷', 'x', '-', '+', '='];
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  if (operations.includes(buttonName)) {
    if (result.operation == null) {
      if (result.next != null) {
        result.total = result.next;
        result.next = null;
      }
    } else {
      result.total = String(operate(result.total, result.next, result.operation));
      result.next = null;
    }
    result.operation = buttonName !== '=' ? buttonName : null;
  }

  if (numbers.includes(buttonName)) {
    if (result.next != null && result.next !== '0') result.next += buttonName;
    else result.next = buttonName;
  }

  if (buttonName === '+/-') {
    result.next = String(-1 * parseFloat(result.next));
  }

  if (buttonName === '%') {
    if (result.next == null) result.next = String(0.01 * parseFloat(result.total));
    else result.next = String(0.01 * parseFloat(result.next));
  }

  if (buttonName === 'AC') {
    result.next = '0';
    if (result.total === 'Error') result.total = null;
  }

  if (buttonName === '.') {
    if (result.next == null) result.next = '0.';
    if (!result.next.includes('.')) result.next += '.';
  }
  return result;
};

export default calculate;
