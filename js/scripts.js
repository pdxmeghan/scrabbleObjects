function scrabble(letter) {
  var input = letter.toLowerCase().split("");
  var dictionary ={"b": 3, "c":3, "m":3, "p":3, "a":1, "e":1, "i":1, "o":1, "u":1, "l":1, "n":1, "r":1, "s":1, "t":1, "d":2, "g":2, "f":4, "h":4, "v":4, "w":4, "y":4, "k":5, "j":8, "x":8, "q":10, "z":10};
  var value = 0;

  for (var i = 0; i < input.length; i++)  {
    value += dictionary[input[i]];
  }

   return value;
};
