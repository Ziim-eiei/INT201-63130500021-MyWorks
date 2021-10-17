function rand() {
  return Math.floor(Math.random() * 100) + 1;
}

let test = [rand(), rand(), rand()];

function Menu(input) {
  switch (input) {
    case 1:
      console.log(Sum(test));
      break;
    case 2:
      console.log(FindMin(test));
      break;
    case 3:
      console.log(FindMax(test));
      break;
  }
}

function Sum(num) {
  let sum = 0;
  num.forEach((el) => {
    sum += el;
  });
  return sum;
}

function FindMin(num) {
  let min = num[0];
  num.forEach((el) => {
    if (el < min) min = el;
  });
  return min;
}

function FindMax(num) {
  let max = num[0];
  num.forEach((el) => {
    if (el > max) max = el;
  });
  return max;
}

console.log(test);
Menu(3);
