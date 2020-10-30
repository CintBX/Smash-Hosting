import React, { Component } from 'react';
import BracketGenerator from './BracketGenerator';
import MatchGenerator from './MatchGenerator';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showTournament } from '../../actions/tournamentActions';


class Game extends Component {
  constructor(props) {
    super(props);
  };

  static propTypes = {
    tournament: PropTypes.object.isRequired
  };

  render() {
    return (
      <div>
        <h1>Matches, bracket</h1>
        {/* <MatchGenerator bracketSize={this.props.bracketSize} />
        <BracketGenerator bracketSize={this.props.bracketSize} /> */}
      </div>
    );
  };
};

const mapStateToProps = state => ({
  tournament: state.tournament,
  auth: state.auth
});

export default connect(mapStateToProps, {showTournament})(Game);