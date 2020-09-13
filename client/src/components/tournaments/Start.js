import React, { Component } from 'react';
import { updateTournamentStatus } from '../../actions/tournamentActions';
import { connect } from 'react-redux';

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