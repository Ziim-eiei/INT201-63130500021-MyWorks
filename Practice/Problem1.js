function rand(guess) {
  let text = ["Too High", "Too Low", "You WIN!"];
  let ran = Math.floor(Math.random() * 10) + 1;
  if (guess >= 1 && guess <= 10) {
    if (guess > ran) console.log(text[0]);
    else if (guess == ran) console.log(text[2]);
    else console.log(text[1]);
    return ran;
  }
  return null;
}

console.log(rand(10));
