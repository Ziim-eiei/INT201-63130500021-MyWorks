function ReverseString(string) {
  let arr = string.split("");
  return arr.reverse().join("");
}

function ReplaceVowels(string) {
  let vowels = ["a", "e", "i", "o", "u"];
  let str = string.toLowerCase().split("");
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      str[i] = "*";
    }
  }
  return str.join("");
}

function CountVowels(string) {
  let vowels = ["a", "e", "i", "o", "u"];
  let str = string.toLowerCase().split("");
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

function Menu(input) {
  switch (input) {
    case 1:
      console.log(ReverseString(test));
      break;
    case 2:
      console.log(ReplaceVowels(test));
      break;
    case 3:
      console.log(CountVowels(test));
      break;
  }
}

let test = "chinnapak";

Menu(3);
