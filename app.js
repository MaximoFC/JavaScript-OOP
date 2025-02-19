class Player {
    constructor(life, armor, attack, gold, cards, upgrades) {
        this.life = life,
        this.armor = armor,
        this.attack = attack,
        this.gold = gold,
        this.cards = cards,
        this.upgrades = upgrades,
        this.hand = false
    }

    showStats() {
        console.log(`Vida: ${this.life} - Armadura: ${this.armor} - Ataque: ${this.attack} - Oro: ${this.gold}`);
    }

    showHand() {
        console.log(`Eres mano: ${this.hand}`);
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

    function dealCards(shuffledDeck, player, bot) {
        player.cards = shuffledDeck.slice(0, 3);
        bot.cards = shuffledDeck.slice(3, 6);
    }

    const Player1 = new Player(100, 100, 0, 0, [], []);
    const PC = new Player(100, 100, 0, 0, [], []);

    function flipCoin() {
        const result = Math.random();
        if(result < 0.5) {
            Player1.hand = true;
            PC.hand = false;

        } else {
            PC.hand = true;
            Player1.hand = false;
        }
    }

    console.log(`Tus estadísticas:`);
    Player1.showStats();

    console.log(`-------------------------------------------------`);

    let playerPoints = 0;
    let botPoints = 0

    function updateLife() {
        const playerLifeValue = Math.max(0, Math.min(100, Player1.life));
        const botLifeValue = Math.max(0, Math.min(100, PC.life));
    
        document.getElementById("player-life").value = playerLifeValue;
        document.getElementById("bot-life").value = botLifeValue;
    }

    function updateArmor() {
        const playerArmorValue = Math.max(0, Math.min(100, Player1.armor));
        const botArmorValue = Math.max(0, Math.min(100, PC.armor));
    
        document.getElementById("player-armor").value = playerArmorValue;
        document.getElementById("bot-armor").value = botArmorValue;
    }

    function clearTrickPoints() {
        botPoints = 0;
        playerPoints = 0;
    }

    function updatePoints() {
        playerPointsElement.textContent = playerPoints;
        botPointsElement.textContent = botPoints;
    }

    function winner(playerCardThrowed, botCardThrowed) {
        if(playerCardThrowed > botCardThrowed) {
            return "player"
        }
        else if(playerCardThrowed < botCardThrowed) {
            return "bot"
        }
        else {
            return "tie"
        }
    }

    function playRound() {
        flipCoin();
        Player1.showHand();
        const shuffledDeck = shuffleDeck(deck);
        dealCards(shuffledDeck, Player1, PC);

        for(let i = 0; i < 3; i++) {
            console.log(`-------------------------------------------------`);
            console.log(`Mano N°${i + 1}`);
    
            console.log(`Tus cartas:`);
            for(let j=0; j < Player1.cards.length; j++) {
                console.log(`${j+1}) ${Player1.cards[j].number} de ${Player1.cards[j].suit}`);
            }
    
            console.log(`-------------------------------------------------`);
    
            console.log(`Selecciona arriba la posición de la carta que quieres lanzar.`);
    
            let input;
            let index;
            do {
                input = prompt(`Ingresa la posición de la carta:`);
                index = parseInt(input) - 1;

                if (isNaN(index) || index < 0 || index >= Player1.cards.length) {
                    alert(`Por favor, ingresa un número entre 1 y ${Player1.cards.length}.`);
                }
            } while (isNaN(index) || index < 0 || index >= Player1.cards.length);

            const playerCardThrowed = Player1.cards.splice(index, 1);
            console.log(`Jugaste la carta ${playerCardThrowed[0].number} de ${playerCardThrowed[0].suit}`);
            
            const botCardThrowed = PC.cards.pop();
            console.log(`La computadora jugó ${botCardThrowed.number} de ${botCardThrowed.suit}`);
    
            const trickWinner = winner(playerCardThrowed[0].value, botCardThrowed.value);
    
            if(trickWinner === "player") {
                playerPoints += 1;
                Player1.gold += 100;
                console.log(`¡Ganaste la mano!`);
            } 
            else if(trickWinner === "bot") {
                botPoints += 1;
                PC.gold += 100;
                console.log(`La computadora ganó la mano`);
            }
            else {
                console.log(`Empataste la mano`);
            }

            updatePoints();
        }

        if (playerPoints > botPoints) {
            if(PC.armor > 0) {
                PC.armor = Math.max(0, PC.armor - 50);
            } else {
                PC.life = Math.max(0, PC.life - 25);
            }
            Player1.gold += 200;
            console.log(`-------------------------------------------------`);
            console.log(`¡Ganaste la ronda!`);
        } else if (botPoints > playerPoints) {
            if(Player1.armor > 0) {
                Player1.armor = Math.max(0, Player1.armor - 50);
            } else {
                Player1.life = Math.max(0, Player1.life - 25);
            }
            PC.gold += 200;
            console.log(`-------------------------------------------------`);
            console.log(`Perdiste la ronda`);
        } else {
            if(Player1.hand == true) {
                if(PC.armor > 0) {
                    PC.armor = Math.max(0, PC.armor - 50);
                } else {
                    PC.life = Math.max(0, PC.life - 25);
                }
                Player1.gold += 100;
                console.log(`-------------------------------------------------`);
                console.log(`¡Ganaste la ronda por ser mano!`);
            } else {
                if(Player1.armor > 0) {
                    Player1.armor = Math.max(0, Player1.armor - 50);
                } else {
                    Player1.life = Math.max(0, Player1.life - 25);
                }
                PC.gold += 100;
                console.log(`-------------------------------------------------`);
                console.log(`Perdiste la ronda, el bot era mano`);
            }
        }

        updateLife();
        updateArmor();

        if(Player1.life <= 0) {
            alert("El bot ganó la partida." + PC.gold);
        } else if(PC.life <= 0) {
            alert("¡Ganaste la partida!" + Player1.gold);
        } else {
            clearTrickPoints();
            setTimeout(playRound, 3000); 
        }
    }
    playRound();

}

game();