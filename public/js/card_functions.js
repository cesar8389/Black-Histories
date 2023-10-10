let card_button = document.getElementById('card_button');
let choose_one = JSON.parse(localStorage.getItem("choose_one"));
let readCheckbox = document.getElementById('read_checkbox');

card_button.addEventListener('click', function () {
    readCheckbox.checked = choose_one.read;
    shuffleCards();
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
        swal("Você já leu todas as cartas. Entre na coleção para escolher uma nova carta");
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
    let card_info = JSON.parse(localStorage.getItem('choose_one'));
    let div_front = document.getElementById('div_frontSide');
    let div_back = document.getElementById('div_backSide');
    let img_front = document.createElement('img');
    let img_back = document.createElement('img');

    if (div_front.children.length == 2) {
        let children_front = div_front.children[1];
        let children_back = div_back.children[0];
        div_front.removeChild(children_front);
        div_back.removeChild(children_back);
    }

    titleText.innerText = '';
    img_front.src = card_info.img_front;
    img_back.src = card_info.img_back;
    img_front.alt = card_info.story;
    img_back.alt = card_info.solution;

    let exists_front = div_front.getElementsByTagName('img');
    let exists_back = div_back.getElementsByTagName('img');

    if (exists_front.length == 0 && exists_back.length == 0) {
        div_front.appendChild(img_front);
        div_back.appendChild(img_back);
    }

}

const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has("choose_one") && urlParams.get("choose_one") === "true") {
    showChooseCard();
}

readCheckbox.addEventListener('change', function () {
    readCard(this.checked);
});
