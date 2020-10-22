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
    const { _id, title, hostedBy, participants } = this.props.tournament.showTournament;

    let usernames = []
    participants && participants.forEach(participant => {
      usernames.push(participant.username);
    });

    return (
      <div style={{color:"lightgrey"}}>
        <h1 className="text-center">{ title }</h1>
        <BracketGenerator key={_id} size={20} />
      </div>
    );
  };
};

const mapStateToProps = state => ({
  tournament: state.tournament
});

export default connect(mapStateToProps, { showTournament })(TournamentStartPage);