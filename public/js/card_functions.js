console.log("element -->", document);
let card_button = document.getElementById('card_button');
let choose_one = JSON.parse(localStorage.getItem("choose_one"));
let readCheckbox = document.getElementById('read_checkbox');

if (localStorage.getItem("game_cards") == null) {
    localStorage.setItem('game_cards', JSON.stringify(game_cards));
    localStorage.setItem('choose_one', JSON.stringify(game_cards.cards[0]));
}

readCheckbox.checked = choose_one.read;

function shuffleCards() {
    let deck = JSON.parse(localStorage.getItem("game_cards"));
    let cardNumber = parseInt(getRandomArbitrary(0, deck.cards.length));

    while (deck.cards[cardNumber].read || cardNumber == choose_one.id) {
        cardNumber = parseInt(getRandomArbitrary(0, deck.cards.length));
    }

    localStorage.setItem("choose_one", JSON.stringify(deck.cards[cardNumber]));
    showChooseCard();
    return;
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function readCard(checked) {
    let deck = JSON.parse(localStorage.getItem("game_cards"));
    let card = JSON.parse(localStorage.getItem("choose_one"));

    for (let i = 0; i <= deck.cards.length; i++) {
        if (deck.cards[i].id == card.id) {
            deck.cards[i].read = checked;
            localStorage.setItem("game_cards", JSON.stringify(deck));
            return;
        }
    }
    return;
}

function showChooseCard() {
    let titleText = document.getElementById('title_card');
    let storyText = document.getElementById('story_text');
    let solutionText = document.getElementById('solution_text');
    let card_info = JSON.parse(localStorage.getItem('choose_one'));

    titleText.innerText = card_info.title;
    storyText.innerText = card_info.story;
    solutionText.innerText = card_info.solution;
}

const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has("choose_one") && urlParams.get("choose_one") === "true") {
    showChooseCard();
}

readCheckbox.addEventListener('change', function () {
    readCard(this.checked);
});
