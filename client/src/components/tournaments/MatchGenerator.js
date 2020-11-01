import React, { Component } from 'react';
import Match from './resources/match';
import { Button } from 'reactstrap';

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
        console.log(pairs);
        return (
          <div style={{color:"lightgrey"}}>
            <h1>Match Generator for {this.props.bracketSize} players</h1>
            {
              players && players.map(player => (
                <p key={player._id}>{player.username}</p>
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