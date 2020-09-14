import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showTournament } from '../../actions/tournamentActions';

class Bracket extends Component {
  constructor(props) {
    super(props);
    this.shuffleParticipants = this.shuffleParticipants.bind(this);
  };

  static propTypes = {
    tournament: PropTypes.object.isRequired
  };

  shuffleParticipants(array) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while(0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  render() {
    const { participants } = this.props.tournament.showTournament;

    return (
      <div>
        <h1>Bracket:</h1>
        {
          participants && this.shuffleParticipants(participants).map(participant => (
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

export default connect(mapStateToProps, { showTournament })(Bracket);