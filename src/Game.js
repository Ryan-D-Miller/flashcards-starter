const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = new Round();
  }

  start() {
    const deck = new Deck(this.createCards());
    const round = new Round(deck);
    this.currentRound = round;
    // this.printMessage(deck, round);
    // this.printQuestion(round);
  }

  createCards() {
    let cardArray = [];
    prototypeQuestions.forEach((element, i) => {
      let {id, question, answers, correctAnswer} = element
      let card = new Card(id, question, answers, correctAnswer);
      cardArray.push(card);
    });
    return cardArray
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
