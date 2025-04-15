"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = Math.pow(b, 2) - 4 * a * c;
  if (discriminant === 0) {
    const root = -b / (2 * a);
    arr.push(root);
  } else if (discriminant > 0) {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(root1, root2);
  }
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyRate = percent / 100 / 12;
  let loanAmount = amount - contribution;
  if (loanAmount <= 0) {
    return 0;
  }
  let monthlyPayment = loanAmount * (monthlyRate + (monthlyRate / (Math.pow(1 + monthlyRate, countMonths) - 1)));
  let totalAmount = monthlyPayment * countMonths;
  return parseFloat(totalAmount.toFixed(2));
}