var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
 "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function stackLetters() {
  var abcs = ' ';
  var counter = 1;
  for (var i = 0; i <= alphabet.length; i++) {
    abcs += alphabet[i];
    if (counter === 5) {
      abcs += ' ';
      counter = 0;
    }
    counter++;
    console.log(abcs);
  }
}
stackLetters();