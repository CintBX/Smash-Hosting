import React, { Component } from 'react';
import Match from './resources/match';
import { 
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardBody
} from 'reactstrap';
import DirectoryImage from './../players/DirectoryImage';

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
    // const { currentRound } = this.state;
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
        const { players } = this.props;
        const pairs = this.setPlayersIntoPairs(players);
        return (
          <div style={{color:"lightgrey"}}>
            {/* Later, replace this with `Round ${round}` matches */}
            <h1>Match Generator for {this.props.bracketSize} players</h1>

            {/* Will render the pairs JUST FOR each consecutive round */}
            {
              pairs && pairs.map(pair => (
                <div>
                    Round #
                  <CardDeck className="text-center match-card mb-5">
                    <Card body style={{backgroundColor:"#56A8CBFF", color:"#DA291CFF"}}>
                      <CardBody>
                        <CardTitle>{pair[0].username}</CardTitle>
                        <CardText>- 0 +</CardText>
                        <Button color="danger">Winner</Button>
                      </CardBody>
                    </Card>
                    <Card body style={{backgroundColor:"#56A8CBFF", color:"#DA291CFF"}}>
                      <CardBody>
                        <CardTitle>{pair[1].username}</CardTitle>
                        <CardText>- 0 +</CardText>
                        <Button color="danger match-card-btn">Winner</Button>
                      </CardBody>
                    </Card>
                  </CardDeck>
                </div>
              ))
            }
          </div>
        )

      default:
        return <div>No matches available</div>
    };
  };
};

export default MatchGenerator;