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
                <Card className="text-center match-card mb-5" style={{backgroundColor:"#56A8CBFF", color:"#DA291CFF"}}>
                  <Row>
                    <Col xs="6" sm="6" md="6" lg="6" xl="6">
                      <CardBody>
                        {pair[0].username + " "}
                      </CardBody>

                      <CardText>
                        <ScoreKeeper finals={finals} />
                      </CardText>

                      <CardText>
                        <ConfirmModal
                          page={"Match Card"}
                          title={"Match Winner"}
                          body={`${pair[0].username} won this match?`}
                          onClick={() => console.log("Winner set")}
                        />
                      </CardText>
                    </Col>
                    
                    <Col xs="6" sm="6" md="6" lg="6" xl="6">
                      <CardBody>
                        {" " + pair[1].username}
                      </CardBody>

                      <CardText>
                        <ScoreKeeper finals={finals} />
                      </CardText>

                      <CardText>
                        <ConfirmModal
                          page={"Match Card"}
                          title={"Match Winner"}
                          body={`${pair[1].username} won this match?`}
                          onClick={() => console.log("Winner set")}
                        />
                      </CardText>
                    </Col>
                  </Row>
                </Card>
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