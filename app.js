function Player(life, armor, attack, gold, cards, upgrades) {
    this.life = life,
    this.armor = armor,
    this.attack = attack,
    this.gold = gold,
    this.cards = cards,
    this.upgrades = upgrades
}

const deck = [
    { number: 1, suit: "Espada", value: 14 },
    { number: 1, suit: "Basto", value: 13 },
    { number: 7, suit: "Espada", value: 12 },
    { number: 7, suit: "Oro", value: 11 },
    { number: 3, suit: "Espada", value: 10 },
    { number: 3, suit: "Basto", value: 10 },
    { number: 3, suit: "Oro", value: 10 },
    { number: 3, suit: "Copa", value: 10 },
    { number: 2, suit: "Espada", value: 9 },
    { number: 2, suit: "Basto", value: 9 },
    { number: 2, suit: "Oro", value: 9 },
    { number: 2, suit: "Copa", value: 9 },
    { number: 1, suit: "Oro", value: 8 },
    { number: 1, suit: "Copa", value: 8 },
    { number: 12, suit: "Espada", value: 7 },
    { number: 12, suit: "Basto", value: 7 },
    { number: 12, suit: "Oro", value: 7 },
    { number: 12, suit: "Copa", value: 7 },
    { number: 11, suit: "Espada", value: 6 },
    { number: 11, suit: "Basto", value: 6 },
    { number: 11, suit: "Oro", value: 6 },
    { number: 11, suit: "Copa", value: 6 },
    { number: 10, suit: "Espada", value: 5 },
    { number: 10, suit: "Basto", value: 5 },
    { number: 10, suit: "Oro", value: 5 },
    { number: 10, suit: "Copa", value: 5 },
    { number: 7, suit: "Espada", value: 4 },
    { number: 7, suit: "Basto", value: 4 },
    { number: 7, suit: "Oro", value: 4 },
    { number: 7, suit: "Copa", value: 4 },
    { number: 6, suit: "Espada", value: 3 },
    { number: 6, suit: "Basto", value: 3 },
    { number: 6, suit: "Oro", value: 3 },
    { number: 6, suit: "Copa", value: 3 },
    { number: 5, suit: "Espada", value: 2 },
    { number: 5, suit: "Basto", value: 2 },
    { number: 5, suit: "Oro", value: 2 },
    { number: 5, suit: "Copa", value: 2 },
    { number: 4, suit: "Espada", value: 1 },
    { number: 4, suit: "Basto", value: 1 },
    { number: 4, suit: "Oro", value: 1 },
    { number: 4, suit: "Copa", value: 1 }
]

function shuffleDeck(deck) {
    return deck.sort(() => Math.random() - 0.5);
}

const shuffledDeck = shuffleDeck(deck);

const Player1 = new Player(100, 100, 0, 100, shuffledDeck.slice(0, 3), []);
const PC = new Player(100, 100, 0, 100, shuffledDeck.slice(3, 6), []);

console.log(Player1);
console.log(PC);