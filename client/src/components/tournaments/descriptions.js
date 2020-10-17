import React, { Component, Fragment } from 'react';

class TournamentDescription extends Component {
	render() {
		return (
			<Fragment>
				{ 
					this.props.type === 'Single Elimination' ?
					"Winners advance while losers are eliminated, until only one player remains." :
					null
				}
				{ 
					this.props.type === 'Double Elimination' ?
					"Players begin in one bracket.  Winners continue in the Winners Bracket, and losers fall into the Losers Bracket. There, they gain a second chance to advance to the Finals." :
					null
				}
				{ 
					this.props.type === 'Round Robin' ?
					"Each player fights every other player until all possible matchups are complete. The player with the most wins is the Champion." :
					null
				}
				{ 
					this.props.type === 'Pools' ?
					"Players are placed into Pools, and each Pool has its own Round Robin. Then, winners from each Pool move on to form a new bracket with either Single or Double Elimination rules (determined by the Host)." :
					null
				}
			</Fragment>
		);
	};
};

export default TournamentDescription;