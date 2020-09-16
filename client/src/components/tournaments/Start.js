import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showTournament } from '../../actions/tournamentActions';

class TournamentStart extends Component {
  constructor(props) {
    super(props);
  };

  static propTypes = {
    tournament: PropTypes.object.isRequired
  };

  render() {
    const { participants } = this.props.tournament.showTournament;

    return (
      <div>
        <h1>Bracket:</h1>
        {
          participants && participants.map(participant => (
            <p>{participant.username}</p>
          ))
        }
      </div>
    );
  };
};


const mapStateToProps = state => ({
  tournament: state.tournament 
});

export default connect(mapStateToProps, { showTournament })(TournamentStart);