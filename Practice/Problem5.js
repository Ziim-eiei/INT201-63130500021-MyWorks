let q1 = {
  question: "1+1?",
  chioce: [1, 2, 3],
  correct: 1,
};
let q2 = {
  question: "5-1?",
  chioce: [4, 5, 6],
  answer: 0,
};

function play(player, round) {
  const questions = [q1, q2];
  for (let i = 0; i < round; i++) {
    let ranq = Math.floor(Math.random() * 2);
    console.log(`Question #${i + 1}`);
    player.choose[i] = questions[ranq];
    console.log(questions[ranq]);
    let randUserAnswer = Math.floor(Math.random() * 4) + 1;
    console.log(`User answer: ${randUserAnswer}`);
    player.answer = randUserAnswer;
    if (player.choose[i].answer === player.answer[i]) {
      console.log(`correct!`);
      player.score += 1;
    } else console.log(`incorrect!`);
  }
}
let p1 = {
  name: "Sim",
  choose: [q1, q2],
  answer: [1, 2],
  score: 0,
};
play(p1, 3);
console.log(p1.score);
