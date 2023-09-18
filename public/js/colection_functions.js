const colectionDiv = document.getElementById('card_colection_div');
const game_cards = JSON.parse(localStorage.getItem('game_cards'));

console.log(game_cards.cards);

for (const card of game_cards.cards) {
    let div_cards = document.createElement('div');
    div_cards.classList.add('cards');
    div_cards.innerText = card.title;
    let backgroundImg = document.createElement('img');
    backgroundImg.src = card.img;
    div_cards.appendChild(backgroundImg);
    colectionDiv.appendChild(div_cards);
}