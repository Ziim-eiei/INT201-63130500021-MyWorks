function Change(price, money) {
  let change = money - price;
  if (change < 0) {
    return "not enough money";
  } else {
    const cash = {};
    let change_money = [500, 100, 50, 20, 10, 5, 2, 1];
    change_money.map((num) => {
      cash[num] = Math.floor(change / num);
      change -= num * cash[num];
    });
    return cash;
  }
}

console.log(Change(200, 2152));
