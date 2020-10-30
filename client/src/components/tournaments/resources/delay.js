import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Delayed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    };
  };

  static propTypes = {
    timeBeforeRender: PropTypes.number.isRequired
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({hidden: false});
    }, this.props.timeBeforeRender);
  };

  render() {
    return this.state.hidden ? "" : this.props.children;
  };
};

export default Delayed;