const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const players = [
  {
    name: "",
    cards: [],
    isShown: [false, false, false, false],
  },
  {
    name: "",
    cards: [],
    isShown: [false, false, false, false],
  },
];

rl.question(`First player's name: `, (name) => {
  players[0].name = name;
  rl.question("Second player's name: ", (name) => {
    players[1].name = name;
  });
});
