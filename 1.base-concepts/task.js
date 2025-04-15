"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;
  if (discriminant > 0) {
    arr[0] = (-b + Math.sqrt(discriminant)) / (2 * a);
    arr[1] = (-b - Math.sqrt(discriminant)) / (2 * a);
  } else if (discriminant == 0) {
    arr[0] = -b / (2 * a);
  }
  return arr;
}
solveEquation(1, 5, 4)

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthPercent = percent / 100 / 12;
  let change = amount - contribution;
  let monthPay = change * (monthPercent + monthPercent / ((1 + monthPercent) ** countMonths - 1));
  let AllPayments = Number((monthPay * countMonths).toFixed(2));
  return AllPayments;
}
calculateTotalMortgage(10, 0, 10000, 36)