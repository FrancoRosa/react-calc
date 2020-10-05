const calculate = ({ total, next, operation }, buttonName) => {
  const result = {
    total,
    next,
    operation,
  };

  switch (buttonName) {
    case '+/-':
      result.total *= -1;
      result.next *= -1;
      break;

    default:
      break;
  }

  return result;
};

export default calculate;