import uuid from 'uuid';

class Round {
  constructor(roundNumber, matches) {
    this.id = uuid();
    this.roundNumber = roundNumber;
    this.matches = matches;
  };
};

export default Round;