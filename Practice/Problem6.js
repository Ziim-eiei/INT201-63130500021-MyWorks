function dice() {
  return Math.floor(Math.random() * 6) + 1;
}
function play(p1, p2, round) {
  while (0 < round) {
    p1.dice = dice();
    p2.dice = dice();
    check(p1, p2, round);
    round--;
  }
  result(p1, p2);
}
function check(p1, p2, round) {
  if (p1.dice > p2.dice) {
    p1.result.Win++;
    console.log(`Round ${round} : Winner is ${p1.name} , Loser is ${p2.name}`);
  } else if (p1.dice < p2.dice) {
    p2.result.Win++;
    console.log(`Round ${round} : Winner is ${p2.name} , Loser is ${p1.name}`);
  } else console.log(`Round ${round} : Draw`);
}
function result(p1, p2) {
  let winner = "";
  if (p1.result.Win > p2.result.Win) winner = p1.name;
  else if (p1.result.Win < p2.result.Win) winner = p2.name;
  else winner = "";
  console.log(`Result : Winner is ${winner}`);
}
let p1 = { name: "Test1", dice: 0, result: { Win: 0 } };
let p2 = { name: "Test2", dice: 0, result: { Win: 0 } };

play(p1, p2, 3);
