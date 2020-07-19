const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  format: {
    type: String,
    required: true
  },
  participants: {
    type: Array,
    required: true
  },
  round: {
    number: {
      Type: Number,
      required: true,
    },
    matches: {
      playerOne: {
        type: Array
      },
      playerTwo: {
        type: Array
      },
      winner: {
        type: Array
      }
    },
    semiFinal: {
      type: Array,
    },
    final: {
      type: Array,
    },
  },
  tournamentWinner: {
    type: String,
  }
});

module.exports = Game = mongoose.model('game', GameSchema);