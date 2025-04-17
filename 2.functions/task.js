function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let elem of arr) {
    sum += elem;
    if (elem < min) {
      min = elem
    }
    if (elem > max) {
      max = elem
    }
  }
  let avg = Math.round(100 * sum / arr.length) / 100;
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = arr.reduce((acc, current) => acc + current, 0);
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length == 0) {
    return 0
  }
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  let difference = 0;
  for (let elem of arr) {
    difference += elem * ((-1) ** (elem % 2));
  }
  return difference;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
  let maxWork = -Infinity;
  for (let arr of arrOfArr) {
    let currRes = func(...arr);
    if (currRes > maxWork) {
      maxWork = currRes;
    }
  }
  return maxWork;
}
