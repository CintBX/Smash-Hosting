import React, { Component } from 'react';
import Bracket from './Bracket';

class TournamentStart extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        <Bracket />
      </div>
    );
  };
};

export default TournamentStart;