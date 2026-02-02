"use strict";
function solveEquation(a, b, c) {
  const discriminant = b ** 2 - 4 * a * c; 
  const result = [];

  if (discriminant < 0) {
    return result;
  } else if (discriminant === 0) {
    const root = -b / (2 * a);
    result.push(root);
    return result;
  } else {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    result.push(root1, root2);
    return result;
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (contribution >= amount) {
    return 0;
  }

  const monthlyPercent = percent / 100 / 12;

  const loanBody = amount - contribution;

  const monthlyPayment = loanBody * (
    monthlyPercent +
    (monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1))
  );

  const totalPayment = monthlyPayment * countMonths + contribution;

  return Number(totalPayment.toFixed(2));
}