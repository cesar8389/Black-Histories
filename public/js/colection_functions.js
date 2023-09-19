const colectionDiv = document.getElementById('card_colection_div');
const game_cards = JSON.parse(localStorage.getItem('game_cards'));

console.log(game_cards.cards);

for (const card of game_cards.cards) {
    let div_cards = document.createElement('div');
    let backgroundImg = document.createElement('img');
    let title = document.createElement('p');
    title.classList.add('title')
    div_cards.classList.add('cards');
    title.innerText = card.title;
    backgroundImg.src = card.img;
    div_cards.appendChild (backgroundImg);
    div_cards.appendChild(title);
    colectionDiv.appendChild(div_cards);
}