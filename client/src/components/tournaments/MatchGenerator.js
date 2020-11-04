import React, { Component } from 'react';
import Match from './resources/match';
import { 
  Card,
  CardTitle,
  CardText,
  CardBody,
  Row,
  Col
} from 'reactstrap';
import DirectoryImage from './../players/DirectoryImage';
import ScoreKeeper from './resources/scorekeeper';
import ConfirmModal from '../ConfirmModal';

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
        const { matches, finals } = this.props;
        const pairs = this.setPlayersIntoPairs(matches);
        return (
          <div style={{color:"lightgrey"}}>
            {/* Later, replace this with `Round ${round}` matches */}
            <h1>Match Generator for {this.props.bracketSize} players</h1>

            {/* Will render the pairs JUST FOR each consecutive round */}
            {
              pairs && pairs.map(pair => (
                <div>
                  <Card className="text-center match-card mb-5" style={{backgroundColor:"#56A8CBFF", color:"#DA291CFF"}}>
                    <CardTitle className="mt-3">
                      <span className="mx-5">{pair[0].username + " "}</span>
                      {/* <span style={{color:"black", fontWeight:"400"}}>VS</span> */}
                      <span className="mx-5">{" " + pair[1].username}</span>
                    </CardTitle>
                    <CardBody>
                      <CardText>
                        <span className="mx-4"><ScoreKeeper finals={finals} /></span>
                        <span className="mx-4"><ScoreKeeper finals={finals} /></span>
                      </CardText>
                      <CardText>
                        <span className="mx-4">
                          <ConfirmModal
                            page={"Match Card"}
                            title={"Match Winner"}
                            body={`${pair[0].username} won this match?`}
                            onClick={() => console.log("Winner set")}
                          />
                        </span>
                        <span className="mx-4">
                          <ConfirmModal
                            page={"Match Card"}
                            title={"Match Winner"}
                            body={`${pair[0].username} won this match?`}
                            onClick={() => console.log("Winner set")}
                          />
                        </span>
                      </CardText>
                    </CardBody>
                  </Card>
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