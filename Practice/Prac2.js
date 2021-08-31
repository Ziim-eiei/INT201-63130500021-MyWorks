// array -> test for/of
// let num = [1,2,3,50];
// for(let x of num){
//     console.log(x);
// }

// let product = {
//   id: 1001,
//   name: 'TV',
//   price: 499,
// };
// console.log(product); // show all elements
// object -> test for/in
// for (let key in product) {
//   console.log(`${key} : ${product[key]}`);
// }

// console.log(typeof product); //  check type
// console.log(typeof num);

// prototype chaining
// let goods = Object.create(product);
// goods.weight = 35;

let book = {
  isbn: 12345678,
  title: "JavaScript",
  author: {
    firstname: "Test",
    lastname: "eiei",
  },
};

console.log(book.author.lastname);
