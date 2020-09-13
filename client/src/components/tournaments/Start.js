import React, { Component } from 'react';
import { updateTournamentStatus } from '../../actions/tournamentActions';
import { connect } from 'react-redux';

// Let's see, this file isn't gonna perform any logic.. it's just displaying.  Well, perhaps the <Bracket /> shit will be
// logic, but it won't actualyl change the tournament status or anything.
// TournamentShow is the main component, and in that component you will change tournament.status to "Open"
// Upon doing so, you will simply render this component for now.

// All you'll need here is access to the State's tournament.participants... so maybe you need the same shit for
// showTournament() from actions.js, just to display the current SHOWN tournament's participants

class TournamentStart extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        Bracket goes here
      </div>
    );
  };
};

export default TournamentStart;