

console.log(game_cards);

function shuffleCards(){ //embaralha as cartas e retorna uma não lida
    let cardNumber = parseInt( getRandomArbitrary( 0 , game_cards.cards.length));

    while(game_cards.cards[cardNumber].read) {
        cardNumber = parseInt( getRandomArbitrary( 0 , game_cards.cards.length));
    }
    localStorage.setItem("choose_one" , toString( game_cards.cards[cardNumber]));
    return  game_cards.cards[cardNumber];
    
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function readCard(){

}

