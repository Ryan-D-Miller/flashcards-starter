const chai = require('chai');
const expect = chai.expect;
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function() {
  let cardArray = [];
  let deck;
  let round;
  let game;
  beforeEach( function() {
    prototypeQuestions.forEach((element, i) => {
      let {id, question, answers, correctAnswer} = element
      let card = new Card(id, question, answers, correctAnswer);
      cardArray.push(card);
    });
    deck = new Deck(cardArray);
    round = new Round(deck);
    game = new Game();
  });

  afterEach( function() {
    cardArray = [];
  });
  it('should create new cards when the start method is run', function() {
    game.start();
    expect(game.createCards()).to.eql(cardArray);
  });

  it('should put the cards in a deck', function() {
    game.start();
    expect(game.currentRound.deck.cards).to.eql(deck.cards);
  });

  it('should create a new round using the deck', function() {
    game.start();
    expect(game.currentRound).to.eql(round);
  });

});
