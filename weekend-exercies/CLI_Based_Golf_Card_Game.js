const readline = require("readline");

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

const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];

const cards = [
  { rank: "Ace", value: 1 },
  { rank: "2", value: 2 },
  { rank: "3", value: 3 },
  { rank: "4", value: 4 },
  { rank: "5", value: 5 },
  { rank: "6", value: 6 },
  { rank: "7", value: 0 },
  { rank: "8", value: 8 },
  { rank: "9", value: 9 },
  { rank: "10", value: 10 },
  { rank: "Jack", value: -1 },
  { rank: "Queen", value: 12 },
  { rank: "King", value: 13 },
];

function createDeck() {
  let deck = [];
  suits.forEach((suit) => {
    cards.forEach((card) => {
      deck.push({ suit, rank: card.rank, value: card.value });
    });
  });
  return deck;
}

const deck = createDeck();

function shuffleDeck(deck) {
  for (let i = 0; i < deck.length; i++) {
    const j = Math.floor(Math.random() * deck.length);
    const temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
}

shuffleDeck(deck);
let discardPile = [];

function startGame() {
  players.forEach((player) => {
    for (let i = 0; i < 4; i++) {
      player.cards.push(deck.pop());
    }
  });
  discardPile.push(deck.pop());
  taketurn(0);
}

function board() {
  console.log("------ Board ------");

  for (const player of players) {
    let msg = [];
    player.cards.forEach((card, index) => {
      if (player.isShown[index]) {
        msg.push(`[${card.rank} of ${card.suit}]`);
      } else {
        msg.push("[Face Down]");
      }
    });
    console.log(`Hand of ${player.name}: `, msg.join(", "));
  }
  console.log(
    `Discard Pile Top Card: ${
      discardPile.length > 0
        ? `${discardPile[discardPile.length - 1].rank} of ${
            discardPile.length > 0 && discardPile[discardPile.length - 1].suit
          }`
        : "Empty"
    } `
  );
  console.log("--------------------");
}

function takeAction(playerNumber) {
  rl.question(
    "Take an action: 1) Draw from Deck 2) Take from dicard pile: ",
    (answer) => {
      if (answer !== "1" && answer !== "2") takeAction();
      if (answer === "1") {
        const drawnCard = deck.pop();
        console.log(`Card drawn is ${drawnCard.rank} of ${drawnCard.suit}`);
        rl.question(
          "Take an action: 1) Replace it with own card 2) Throw to discard pile: ",
          (answer) => {
            if (answer !== "1" && answer !== "2") {
              rl.question(
                "Which card you want to replace (1-4): ",
                (cardNumber) => {
                  players[playerNumber].cards[cardNumber - 1] = drawnCard;
                  players[playerNumber].isShown[cardNumber - 1] = true;
                  taketurn(playerNumber === 0 ? 1 : 0);
                }
              );
            }
            if (answer === "1") {
              rl.question(
                "Which card you want to replace (1-4): ",
                (cardNumber) => {
                  players[playerNumber].cards[cardNumber - 1] = drawnCard;
                  players[playerNumber].isShown[cardNumber - 1] = true;
                  taketurn(playerNumber === 0 ? 1 : 0);
                }
              );
            }
            if (answer === "2") {
              discardPile.push(drawnCard);
              taketurn(playerNumber === 0 ? 1 : 0);
            }
          }
        );
      }
      if (answer === "2") {
        const drawnCard = discardPile.pop();
        rl.question("Which card you want to replace (1-4): ", (cardNumber) => {
          players[playerNumber].cards[cardNumber - 1] = drawnCard;
          players[playerNumber].isShown[cardNumber - 1] = true;
          taketurn(playerNumber === 0 ? 1 : 0);
        });
      }
    }
  );
}

function taketurn(playerNumber) {
  board();
  console.log(`${players[playerNumber].name}'s turn!`);
  takeAction(playerNumber);
}

function askForNames() {
  rl.question(`First player's name: `, (name) => {
    players[0].name = name;
    rl.question("Second player's name: ", (name) => {
      players[1].name = name;
      startGame();
    });
  });
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

askForNames();
