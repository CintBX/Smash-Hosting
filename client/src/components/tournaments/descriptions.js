import React, { Component, Fragment } from 'react';

class TournamentDescription extends Component {
	render() {
		return (
			<Fragment>
				{ 
					this.props.title === 'Single Elimination' ?
					"Winners advance to the next round while losers are eliminated, until only one fighter remains." :
					null
				}
				{ 
					this.props.title === 'Double Elimination' ?
					"Winners remain and advance in the Winners Bracket. Losers are placed in the Losers Bracket and compete against anyone who loses a match in the Winners Bracket, at corresponding rounds." :
					null
				}
				{ 
					this.props.title === 'Round Robin' ?
					"Each player fights every other player until all possible matches are played. The player with the most wins is the Champion." :
					null
				}
				{ 
					this.props.title === 'Pools' ?
					"Players are placed into Pools, each Pool having its own Round Robin. Pool Winners form a Bracket with either Single or Double Elimination rules (determined by the Host)." :
					null
				}
			</Fragment>
		);
	};
};

export default TournamentDescription;