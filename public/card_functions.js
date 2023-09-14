console.log("element -->", document);
let card_button = document.getElementById('card_button');


if (localStorage.getItem("game_cards") == null) {
    localStorage.setItem('game_cards', JSON.stringify(game_cards));
}

function shuffleCards() {
    let deck = JSON.parse(localStorage.getItem("game_cards"));
    let cardNumber = parseInt(getRandomArbitrary(0, deck.cards.length));
    let choose_one = JSON.parse(localStorage.getItem("choose_one"));

    while (deck.cards[cardNumber].read || cardNumber == choose_one.id) {
        cardNumber = parseInt(getRandomArbitrary(0, deck.cards.length));
    }

    localStorage.setItem("choose_one", JSON.stringify(deck.cards[cardNumber]));
    return deck.cards[cardNumber];
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function readCard() {
    let deck = JSON.parse(localStorage.getItem("game_cards"));
    let card = JSON.parse(localStorage.getItem("choose_one"));
    console.log(card);
    for (let i = 0; i <= deck.cards.length; i++) {
        if (deck.cards[i].id == card.id) {
            console.log("achei - ", i);
            deck.cards[i].read = true;
            localStorage.setItem("game_cards", JSON.stringify(deck));
            return;
        } else {
            console.log("no");
        }
    }
}