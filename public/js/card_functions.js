let card_button = document.getElementById('card_button');
let choose_one = JSON.parse(localStorage.getItem("choose_one"));
let readCheckbox = document.getElementById('read_checkbox');

card_button.addEventListener('click', function () {
    readCheckbox.checked = choose_one.read;
    shuffleCards();
    showChooseCard();
});

if (localStorage.getItem("game_cards") == null) {
    localStorage.setItem('game_cards', JSON.stringify(game_cards));
    localStorage.setItem('choose_one', JSON.stringify(game_cards.cards[0]));
}

readCheckbox.checked = choose_one.read;
var previousCard;
function shuffleCards() {
    let deck = JSON.parse(localStorage.getItem("game_cards"));
    let resultCards = deck.cards.filter((cards) => cards.read == false);
    let cardNumber = parseInt(getRandomArbitrary(0, resultCards.length));

    if (resultCards.length != 0) {
        while (previousCard == resultCards[cardNumber].id) {
            cardNumber = parseInt(getRandomArbitrary(0, resultCards.length));
        }
    } else {
        alert("Entre na coleção para escolher uma carta");
        return;
    }

    previousCard = resultCards[cardNumber].id;
    localStorage.setItem("choose_one", JSON.stringify(resultCards[cardNumber]));
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
