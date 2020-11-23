import React, { Component, Fragment } from 'react';
import { 
  Button
} from 'reactstrap';
import MatchCards from './resources/matchcards';

class MatchGenerator extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const {
      round,
      matches,
      finals,
      onSetWinner,
      onSetScoreOne,
      onSetScoreTwo,
      winners,
      onSetNextRound,
      onSetPlayersIntoPairs
    } = this.props;

    const pairs = onSetPlayersIntoPairs(matches);

    return (
      <Fragment>
        <MatchCards
          round={round}
          finals={finals}
          onSetWinner={onSetWinner}
          onSetScoreOne={onSetScoreOne}
          onSetScoreTwo={onSetScoreTwo}
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
    );
  };
};

export default MatchGenerator;