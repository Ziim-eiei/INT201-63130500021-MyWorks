const Stocks = [
  {
    name: "TV",
    price: 50000,
  },
  {
    name: "Iron",
    price: 4500,
  },
  {
    name: "Air Conditioner",
    price: 20000,
  },
];

function Checkprice(name){
    for (let index in Stocks) {
        if(Stocks[index].name.toLowerCase() == name.toLowerCase()){
            console.log(Stocks[index].price);
        }
    }
}
