class Player {
    constructor(life, armor, attack, gold, cards, upgrades) {
        this.life = life,
        this.armor = armor,
        this.attack = attack,
        this.gold = gold,
        this.cards = cards,
        this.upgrades = upgrades
    }

    showStats() {
        console.log(`Vida: ${this.life} - Armadura: ${this.armor} - Ataque: ${this.attack} - Oro: ${this.gold}`);
    }

    throwCard() {
        alert(`Tus cartas son: 1. ${this.cards[0].number} de ${this.cards[0].suit}. 2. ${this.cards[1].number} de ${this.cards[1].suit}. 3. ${this.cards[2].number} de ${this.cards[2].suit}`);
        console.log(`Las cartas de tu mano eran: ${this.cards[0].number} de ${this.cards[0].suit}. 2. ${this.cards[1].number} de ${this.cards[1].suit}. 3. ${this.cards[2].number} de ${this.cards[2].suit}`);
        const input = prompt("Seleccione la posición de la carta");
        const index = parseInt(input) - 1;
        const removedCard = this.cards.splice(index, 1);
        alert(`Tiraste la carta ${removedCard[0].number} de ${removedCard[0].suit}`);
        console.log("Las cartas que te quedan son:");
        console.log(this.cards);
    }
}

class Bot extends Player {
    constructor(life, armor, attack, gold, cards, upgrades) {
        super(life, armor, attack, gold, cards, upgrades);
    }
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

function game() {
    const playerPointsElement = document.getElementById("player-points");
    const botPointsElement = document.getElementById("bot-points");

    console.log(`🗡¡Bienvenido a Trooco!🗡`);

    console.log(`-------------------------------------------------`);

    function shuffleDeck(deck) {
        return deck.sort(() => Math.random() - 0.5);
    }
    const shuffledDeck = shuffleDeck(deck);

    const Player1 = new Player(100, 100, 0, 100, shuffledDeck.slice(0, 3), []);
    const PC = new Player(100, 100, 0, 100, shuffledDeck.slice(3, 6), []);

    console.log(`Tus estadísticas:`);
    Player1.showStats();

    console.log(`-------------------------------------------------`);

    let playerPoints = 0;
    let botPoints = 0;

    function updatePoints() {
        playerPointsElement.textContent = playerPoints;
        botPointsElement.textContent = botPoints;
    }

    for(let i = 0; i < 3; i++) {
        console.log(`Mano N°${i + 1}`);

        console.log(`Tus cartas:`);
        for(let j=0; j < Player1.cards.length; j++) {
            console.log(`${j+1}) ${Player1.cards[j].number} de ${Player1.cards[j].suit}`);
        }

        console.log(`-------------------------------------------------`);

        console.log(`Selecciona arriba la posición de la carta que quieres lanzar.`);

        const input = prompt("Ingresa la posición de la carta:");
        const index = parseInt(input) - 1;
        const cardThrowed = Player1.cards.splice(index, 1);
        console.log(`Jugaste la carta ${cardThrowed[0].number} de ${cardThrowed[0].suit}`);
        
        console.log(`-------------------------------------------------`);

    }
}

game();