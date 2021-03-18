var colours = []; ///list of colours
colours.push("r","y","b");
var numbers = []; ///list of number
numbers.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
var deck = [];
var shuffled_deck = []; ///establishing the basic variables to be used by the algorithm
var playerOneDeck = [];
var playerTwoDeck = [];

function pageLoad(){ ///function called in when the page is loaded up
    createDeck(colours, numbers);
    shuffleDeck(deck);
    return shuffled_deck; ///returns the first card in the deck to the webpage to be displayed

    function createDeck(colours, numbers) {
        for (var i = 0; i < colours.length; i++) { ///create the deck
            for (var l = 0; l < numbers.length; l++) {
                var card = {"colour": colours[i], "number": numbers[l]}; ///attaches a colour and number to the card, changing it each time
                deck.push(card); ///the current values for the card are then pushed onto the deck, populating it without repeats
            }
        }
        return deck; ///returns ordered deck to be used in next function
    }

    function shuffleDeck(deck) {
        var shuffle_range = deck.length;
        for(var i = 0; i < shuffle_range; i++) {
            var randInt = Math.floor(Math.random() * deck.length); ///generates random integer in a range which changes depending on how many items are left
            shuffled_deck[i] = deck[randInt];
            deck.splice(deck.indexOf(deck[randInt]),1); ///it then removes the random card from the ordered deck, to prevent it being used again
        }
        console.log(shuffled_deck);
        return shuffled_deck; ///returns the shuffled deck to be used for the game/webpage
    }
}

function dealCards(shuffled_deck) { ///function called in by button

    function winner(winner) {///displays the winner on webpage
        var x_winner = document.getElementById('winner');
        x_winner.style.border = '1px solid black';
        x_winner.style.background = 'yellow'; ///changes the box the winner's name appears in so it can actually be seen
        return document.getElementById('winner').innerHTML = winner;///passes winner name to webpage
    }

    for (var calc_counter = 0; calc_counter <= 30; calc_counter += 2) {///checking the code isn't going to be running out of the correct range
        ///For no apparent reason it cannot read calc-counter below here even though it can print it out which works correctly and well, makes literally no sense!!!
        if (shuffled_deck[calc_counter].colour === shuffled_deck[calc_counter+1].colour) {
            if (shuffled_deck[calc_counter].number < shuffled_deck[calc_counter+1].number) {
                playerTwoDeck.push(shuffled_deck[calc_counter], shuffled_deck[calc_counter+1]);
                shuffled_deck.splice(shuffled_deck[shuffled_deck.indexOf(shuffled_deck[calc_counter])],2);
            } else if (shuffled_deck[calc_counter].number === shuffled_deck[calc_counter+1]) {
                shuffled_deck.splice(shuffled_deck[shuffled_deck.indexOf(shuffled_deck[calc_counter])],2);
            } else {
                playerOneDeck.push(shuffled_deck[calc_counter], shuffled_deck[calc_counter+1]);
                shuffled_deck.splice(shuffled_deck[shuffled_deck.indexOf(shuffled_deck[calc_counter])],2);
            }
        } else if (shuffled_deck[calc_counter].colour.indexOf < shuffled_deck[calc_counter+1].colour.indexOf) {
            playerOneDeck.push(shuffled_deck[calc_counter], shuffled_deck[calc_counter+1]);
            shuffled_deck.splice(shuffled_deck[shuffled_deck.indexOf(shuffled_deck[calc_counter])],2);
        } else if (shuffled_deck[calc_counter].colour.indexOf === shuffled_deck[calc_counter+1].colour.indexOf) {
            shuffled_deck.splice(shuffled_deck[shuffled_deck.indexOf(shuffled_deck[calc_counter])],2);
        } else {
            playerTwoDeck.push(shuffled_deck[calc_counter], shuffled_deck[calc_counter+1]);
            shuffled_deck.splice(shuffled_deck[shuffled_deck.indexOf(shuffled_deck[calc_counter])],2);
        }
    }
    if (playerOneDeck.length > playerTwoDeck.length) {
        winner('Player One'); ///passing winning player into winner function
    } else {
        winner('Player Two');
    }
    return shuffled_deck;///ending function and handing back the now empty shuffled deck
}

function spin() {
    document.getElementById('button').style.animation = 'spin-animation 0.5s infinite'
}


