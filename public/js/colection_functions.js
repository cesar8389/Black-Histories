const colectionDiv = document.getElementById('card_colection_div');
const game_cards = JSON.parse(localStorage.getItem('game_cards'));

console.log(game_cards.cards);

for (let i = 0; i <= game_cards.cards.length; i++) {
    let div_cards = document.createElement('div');
    div_cards.classList.add('cards');
    div_cards.innerText = game_cards.cards[i].title;
    colectionDiv.appendChild(div_cards);
}