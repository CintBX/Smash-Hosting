import React, { Component, Fragment } from 'react';
import {
  BsFileArrowDown,
  BsFileArrowUp,
} from 'react-icons/bs';

class ScoreKeeper extends Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.state = {
      counter: 0
    };
  };

  increment(e) {
    const { finals, score } = this.props;
    if(finals) {
      if(this.state.counter === 3) return null;
      else {
        this.setState({
          counter: this.state.counter += 1
        });
        score(this.state.counter);
      };
    } else {
      if(this.state.counter === 2) return null;
      else {
        this.setState({
          counter: this.state.counter += 1
        });
        score(this.state.counter);
      };
    };
  };

  decrement(e) {
    const { score } = this.props;
    if(this.state.counter === 0) {
      return null;
    } else {
      this.setState({
        counter: this.state.counter -= 1
      });
      score(this.state.counter);
    };
  };

  render() {
    return (
      <Fragment>
        <span style={{color:"lightgrey"}}>
          <BsFileArrowDown className="mx-3 score-btn-icon" onClick={this.decrement} />
          { this.state.counter }
          <BsFileArrowUp className="mx-3 score-btn-icon" onClick={this.increment} />
        </span>
      </Fragment>
    );
  };
};

export default ScoreKeeper;