import React from 'react';
import uuid from 'uuid';

class Match {
  constructor(playerOne, playerTwo, round) {
    this.id = uuid();
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.round = round;
    this.scoreOne = 0;
    this.scoreTwo = 0;
    this.winner = null;
    this.finals = false;
  };

  setWinner(player) {
    return this.winner = player;
  };

  setWinnerByScore() {
    if(this.scoreOne > this.scoreTwo) {
      this.setWinner(Match.playerOne);
    } else if (this.scoreOne < this.scoreTwo) {
      this.setWinner(Match.playerTwo);
    };
  };

  setFinals() {
    this.finals = true;
  };
};

export default Match;