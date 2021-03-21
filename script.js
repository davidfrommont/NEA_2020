let colours = []; ///list of colours
colours.push("r","y","b");
let numbers = []; ///list of number
numbers.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
let deck = [];
let shuffled_deck = []; ///establishing the basic variables to be used by the algorithm
let playerOneDeck = [];
let playerTwoDeck = [];

function pageLoad(){ ///function called in when the page is loaded up
    createDeck(colours, numbers);
    shuffleDeck(deck);
    return shuffled_deck; ///returns the first card in the deck to the webpage to be displayed

    function createDeck(colours, numbers) {
        for (let i = 0; i < colours.length; i++) { ///create the deck
            for (let l = 0; l < numbers.length; l++) {
                let card = {"colour": colours[i], "number": numbers[l]}; ///attaches a colour and number to the card, changing it each time
                deck.push(card); ///the current values for the card are then pushed onto the deck, populating it without repeats
            }
        }
        return deck; ///returns ordered deck to be used in next function
    }

    function shuffleDeck(deck) {
        let shuffle_range = deck.length;
        for(let i = 0; i < shuffle_range; i++) {
            let randInt = Math.floor(Math.random() * deck.length); ///generates random integer in a range which changes depending on how many items are left
            shuffled_deck[i] = deck[randInt];
            deck.splice(deck.indexOf(deck[randInt]),1); ///it then removes the random card from the ordered deck, to prevent it being used again
        }
        console.log(shuffled_deck);
        return shuffled_deck; ///returns the shuffled deck to be used for the game/webpage
    }
}

function dealCards(shuffled_deck) { ///function called in by button

    function winner(winner) {///displays the winner on webpage
        let x_winner = document.getElementById('winner'); ///display the winner name and changes the styling of the box it is displayed in
        x_winner.style.border = '1px solid black';
        x_winner.style.background = 'yellow'; ///changes the box the winner's name appears in so it can actually be seen
        return document.getElementById('winner').innerHTML = winner;///passes winner name to webpage
    }

    let count1 = 0; ///establishing counter to be used in the block of code
    while (count1 < 30) {
        let count2 = parseInt(count1 + 1); ///creating the +1 counter which changed each time it loops through
        console.log(count1 + ' ' + count2);
        if (shuffled_deck[count1].colour === shuffled_deck[count2].colour) { ///checks if colour match
            if (shuffled_deck[count1].number < shuffled_deck[count2].number) { ///if player One then has the smaller number, they win and get the cards
                playerOneDeck.push(shuffled_deck[count1]);
                playerOneDeck.push(shuffled_deck[count2]);
            } else { ///otherwise player 2 wins
                playerTwoDeck.push(shuffled_deck[count1]);
                playerTwoDeck.push(shuffled_deck[count2]);
            }
        } else if (colours.indexOf(shuffled_deck[count1].colour) < colours.indexOf(shuffled_deck[count2].colour)) { ///using the array the colours were generated from, it checks the positions of the matching colours
            playerOneDeck.push(shuffled_deck[count1]); ///it can then use to work out who has the higher value colour and wins the pair
            playerOneDeck.push(shuffled_deck[count2]);
        } else if (colours.indexOf(shuffled_deck[count1].colour) > colours.indexOf(shuffled_deck[count2].colour)) {
            playerTwoDeck.push(shuffled_deck[count1]);
            playerTwoDeck.push(shuffled_deck[count2]);
        }
        count1 += 2; ///the counter then steps up for the next pair of cards
    }

    if (playerOneDeck.length > playerTwoDeck.length) { ///checking for who has the longest deck, then passes this into another function to display the winner
        winner('Player One'); ///passing winning player into winner function
    } else {
        winner('Player Two');
    }
    return shuffled_deck;///ending function and handing back the now empty shuffled deck ///returns the shuffled deck at the end
}



