import React, { Component, Fragment } from 'react';
import { 
  Button,
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
  };

  render() {
    const {
      round,   //currentRound.round#
      matches, //currentRound.matches[]
      finals,  //currentRound.finals?
      onSetWinner,
      winners,
      onSetNextRound,
      onSetPlayersIntoPairs
    } = this.props;

    const pairs = onSetPlayersIntoPairs(matches);

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
          <Fragment>
            <MatchCards
              round={round}
              finals={finals}
              onSetWinner={onSetWinner}
              pairs={pairs}
              winners={winners}
            />

            <div style={{color: "lightgrey"}}>
              <h3>
                Round Winners
                <span style={{fontSize:"0.8em"}}> (refresh if incorrect)</span>
              </h3>
              <ul>
                {
                  winners && winners.map(winner => (
                    <li>{winner.username}</li>
                  ))
                }
              </ul>
            </div>

            <Button 
              block 
              color="primary"
              onClick={onSetNextRound}
            >
              Proceed to the Next Round
            </Button>
          </Fragment>
        )

      default:
        return <div>No matches available</div>
    };
  };
};

export default MatchGenerator;