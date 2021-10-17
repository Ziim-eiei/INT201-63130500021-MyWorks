let st1 = {
  id: 1,
  name: "T",
};

let st2 = {
  id: 3,
  name: "S",
};

function isEqualid(val1, val2) {
  return Object.values(val1)[0] === Object.values(val2)[0];
}

// console.log(isEqualid(st1,st2));

// console.log(Object.values(st1));

// [a,b] = [1,2];

// ({a,b} = {a:'test' , b:10});

// console.log(a , b);

// let test = a => a+1;
// console.log(test(5));

const helloSomeone = (name) => `Hello, ${name}`;

const area = (width, height) => width * height;

const evenNum = (num) => num % 2 === 0;

console.log(evenNum(6));
