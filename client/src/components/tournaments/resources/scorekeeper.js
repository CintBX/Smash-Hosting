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
    if(this.props.finals) {
      if(this.state.counter === 3) {
        return null;
      } else {
        this.setState({
          counter: this.state.counter + 1
        });
      };
    } else {
      if(this.state.counter === 2) {
        return null
      } else {
        this.setState({
          counter: this.state.counter + 1
        });
      };
    };
  };

  decrement(e) {
    if(this.state.counter === 0) {
      return null;
    } else {
      this.setState({
        counter: this.state.counter - 1
      });
    };
  };

  render() {
    return (
      <Fragment>
        <span style={{color:"black"}}>
          <BsFileArrowDown className="mx-3 score-btn-icon" onClick={this.decrement} />
          { this.state.counter }
          <BsFileArrowUp className="mx-3 score-btn-icon" onClick={this.increment} />
        </span>
      </Fragment>
    );
  };
};

export default ScoreKeeper;