import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showTournament } from '../../actions/tournamentActions';
import BracketGenerator from './BracketGenerator';

class TournamentStartPage extends Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.showTournament(id);
  }

  static propTypes = {
    tournament: PropTypes.object.isRequired
  };

  render() {
    const { _id, title, participants } = this.props.tournament.showTournament;

    let usernames = [];
    participants && participants.forEach(participant => {
      usernames.push(participant.username);
    });
    const bracketSize = usernames.length;

    return (
      <div style={{color:"lightgrey", backgroundColor: "#333333"}}>
        <h1 className="text-center">{ title }</h1>
        <BracketGenerator key={_id} size={bracketSize} styles={{color: "white"}} />
      </div>
    );
  };
};

const mapStateToProps = state => ({
  tournament: state.tournament
});

export default connect(mapStateToProps, { showTournament })(TournamentStartPage);