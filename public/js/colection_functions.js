const colectionDiv = document.getElementById('card_colection_div');
const game_cards = JSON.parse(localStorage.getItem('game_cards'));

console.log(game_cards.cards);

for (const card of game_cards.cards) {
    let div_cards = document.createElement('div');
    let backgroundImg = document.createElement('img');
    let title = document.createElement('p');
    let a = document.createElement('a');

    a.href = './index.html?choose_one=true';
    a.addEventListener('click', function () {
        let father_tag = this.parentElement;
        console.log(father_tag.dataset.id);
        let result = game_cards.cards.filter((cards) => cards.id == father_tag.dataset.id);
        localStorage.setItem('choose_one', JSON.stringify(result[0]));
    })

    div_cards.dataset.id = card.id;
    title.classList.add('title')
    div_cards.classList.add('cards');
    title.innerText = card.title;
    backgroundImg.src = card.img;

    a.appendChild(backgroundImg);
    div_cards.appendChild(a);
    div_cards.appendChild(title);
    colectionDiv.appendChild(div_cards);
}

