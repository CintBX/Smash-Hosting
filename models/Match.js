import uuid from 'uuid';

class Match {
  constructor(
    playerOne,
    playerTwo,
    winner = null
  ) {
    this.id = uuid();
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.winner = winner;
    this.scoreOne = 0;
    this.scoreTwo = 0;
    this.round = 0;
    this.finals = false;
    this.bestOf = "";
  };

  static get playerOne() {
    return this.playerOne || "Team One";
  };

  static get playerTwo() {
    return this.playerTwo || "Player Two";
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

  getWinner() {
    return `Winner: ${this.winner}!`
  };
};

export default Match;