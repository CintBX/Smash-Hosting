import React, { Component } from 'react';
import { 
  Card,
  CardText,
  CardBody,
  Row,
  Col
} from 'reactstrap';
import ScoreKeeper from './resources/scorekeeper';
import ConfirmModal from '../ConfirmModal';
import MatchCards from './resources/matchcards';

class MatchGenerator extends Component {
  constructor(props) {
    super(props);
    this.setPlayersIntoPairs = this.setPlayersIntoPairs.bind(this);
  };

  setPlayersIntoPairs(players) {
    let pairs = [];
    for(var i = 0; i < players.length; i += 2) {
      if(players[i+1] !== undefined) {
        pairs.push([players[i], players[i+1]]);
      } else {
        pairs.push([players[i]]);
      }
    };
    return pairs;
	};

  render() {
    const { // props passed from TournamentScreens
      round, 
      matches, 
      finals, 
      onSetWinner,
      winners
    } = this.props;

    const pairs = this.setPlayersIntoPairs(matches); // MatchGen method logic

    switch(this.props.bracketSize) {
      // case 20:
      // case 19:
      // case 18:
      // case 17:
      // case 16:
      // case 15:
      // case 14:
      // case 13:
      // case 12:
      // case 11:
      // case 10:
      // case 9:
      case 8:
        return (
          <MatchCards
            round={round}
            finals={finals}
            onSetWinner={onSetWinner}
            pairs={pairs}
            winners={winners}
          />
        )

      default:
        return <div>No matches available</div>
    };
  };
};

export default MatchGenerator;