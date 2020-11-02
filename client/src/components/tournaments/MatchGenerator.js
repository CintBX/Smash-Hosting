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

class MatchGenerator extends Component {
  constructor(props) {
    super(props);
    console.log(props.players);
    this.setPlayersIntoPairs = this.setPlayersIntoPairs.bind(this);
    this.config8 = this.config8.bind(this);
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
	
	config8() {
		const { players } = this.props.tournament.showTournament.bracket;
		let array = [];
		
    const pairedPlayers = this.onSetPlayersIntoPairs(players);
    pairedPlayers.forEach(pair => array.push(pair));
		
		return array;
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
                  <CardDeck className="text-center match-card">
                    <Card body style={{backgroundColor:"lightgrey", color:"black"}}>
                      <CardImg>{/* DirectoryImage here */}</CardImg>                        
                      <CardBody>
                        <CardTitle>Virtuoso</CardTitle>
                        <CardText>- 0 +</CardText>
                        <Button color="danger">Winner</Button>
                      </CardBody>
                    </Card>
                    <Card body style={{backgroundColor:"lightgrey", color:"black"}}>
                      <CardImg>{/* DirectoryImage here */}</CardImg>                
                      <CardBody>
                        <CardTitle>Virtuoso</CardTitle>
                        <CardText>- 0 +</CardText>
                        <Button color="danger match-card-btn">Winner</Button>
                      </CardBody>
                    </Card>
                  </CardDeck>
                  <br/>
                  <br/>
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

/*
<Card body outline color="danger" className="match-card">
  Each one: Name, Score, Win button
  <CardTitle className="match-card-title">
    <span className="float-left match-card-player">{pair[0].username}</span> 
    <span className="float-right match-card-player">{pair[1].username}</span>
  </CardTitle>

    Depending on BO3/Bo5, incrementor will max at 2 or 3, and
    decrementor will min at 0

  <CardText>
    <span className="float-left match-card-score">- 0 +</span>
    <span className="float-right match-card-score">- 0 +</span>
  </CardText>

    I was wrong. THIS is User.matchWins.  The incrementor is for rounds per match.

    One button each player
    each will have a function(user) that will be take that user as a param
    Sent to backend for matchWins update, and update bracket.matches/rounds

  <CardBody>
    <Button className="float-left match-card-btn" color="danger">Winner</Button>
    <Button className="float-right match-card-btn" color="danger">Winner</Button>
  </CardBody>
</Card>
*/