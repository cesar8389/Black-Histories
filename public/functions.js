// verifica se existe o json no localStorage / se não tiver, coloca.
if(localStorage.getItem("game_cards") == null){
    localStorage.setItem('game_cards', JSON.stringify(game_cards));
}

function shuffleCards(){ //embaralha as cartas e retorna uma não lida
    let deck = JSON.parse(localStorage.getItem("game_cards"));
    let cardNumber = parseInt( getRandomArbitrary( 0 , deck.cards.length));

    while(deck.cards[cardNumber].read) {
        cardNumber = parseInt( getRandomArbitrary( 0 , deck.cards.length));
    }

    localStorage.setItem("choose_one" , JSON.stringify(deck.cards[cardNumber]));
    return  deck.cards[cardNumber]; 
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function readCard(){
    let deck = JSON.parse(localStorage.getItem("game_cards")); 
    let card = JSON.parse(localStorage.getItem("choose_one"));
    console.log(card);
    for(let i = 0; i <= deck.cards.length; i++){
        if(deck.cards[i].id == card.id){
            console.log("achei - ", i);
            deck.cards[i].read = true;
            localStorage.setItem("game_cards", JSON.stringify(deck));
            return;
        }else{
            console.log("no");
        }
    }
}

shuffleCards();
readCard();

