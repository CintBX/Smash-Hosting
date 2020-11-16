import React, { Component, Fragment } from 'react';
import { 
  Card,
  CardText,
  CardBody,
  Row,
  Col,
  Button
} from 'reactstrap';
import {
  BsFileArrowDown,
  BsFileArrowUp,
} from 'react-icons/bs';
import ConfirmModal from '../../ConfirmModal';

class MatchCards extends Component {
  constructor(props) {
    super(props);
    this.incrementOne = this.incrementOne.bind(this);
    this.decrementOne = this.decrementOne.bind(this);
    this.incrementTwo = this.incrementTwo.bind(this);
    this.decrementTwo = this.decrementTwo.bind(this);
    this.state = {
      scoreOne: 0,
      scoreTwo: 0
    }
  };

  componentDidUpdate() {
    console.log(this.state.scoreOne, this.state.scoreTwo)
    console.log(this.props)
  }

  incrementOne(e) {
    if(this.props.finals) {
      if(this.state.scoreOne === 3) return null;
      else {
        this.setState({
          scoreOne: this.state.scoreOne += 1
        });
      };
    } else {
      if(this.state.scoreOne === 2) return null;
      else {
        this.setState({
          scoreOne: this.state.scoreOne += 1
        });
      };
    };
  };

  decrementOne(e) {
    if(this.state.scoreOne === 0) {
      return null;
    } else {
      this.setState({
        scoreOne: this.state.scoreOne -= 1
      });
    };
  };

  incrementTwo(e) {
    if(this.props.finals) {
      if(this.state.scoreTwo === 3) return null;
      else {
        this.setState({
          scoreTwo: this.state.scoreTwo += 1
        });
      };
    } else {
      if(this.state.scoreTwo === 2) return null;
      else {
        this.setState({
          scoreTwo: this.state.scoreTwo += 1
        });
      };
    };
  };

  decrementTwo(e) {
    if(this.state.scoreTwo === 0) {
      return null;
    } else {
      this.setState({
        scoreTwo: this.state.scoreTwo -= 1
      });
    };
  };

  render() {
    const { // props passed from MatchGenerator
      round, 
      finals, 
      onSetWinner, 
      pairs,
      // winners
    } = this.props;

    return (
      <div style={{color:"lightgrey"}}>
        <h1  className="text-center mb-4">Round { round }</h1>

        {
          pairs && pairs.map(pair => (
            <Card className="text-center match-card mb-5">
              <Row>
                <Col xs="6" sm="6" md="6" lg="6" xl="6">
                  <CardBody>
                    {pair[0].username + " "}
                  </CardBody>

                  <CardText>
                    <Fragment>
                      <span style={{color:"lightgrey"}}>
                        <BsFileArrowDown className="mx-3 score-btn-icon" onClick={this.decrementOne} />
                        { this.state.scoreOne }
                        <BsFileArrowUp className="mx-3 score-btn-icon" onClick={this.incrementOne} />
                      </span>
                    </Fragment>
                  </CardText>

                  <CardText>
                    <ConfirmModal
                      page={"Match Card"}
                      title={"Match Winner"}
                      body={`${pair[0].username} won this match?`}
                      // onClick={() => onSetWinner(pair[0], this.state.scoreOne, this.state.scoreTwo)}
                      onClick={() => console.log(this.state.scoreOne, this.state.scoreTwo)}
                      // disabled={
                      //   winners.some(array => array.username === pair[0].username || pair[1].username)
                      // }
                    />
                  </CardText>
                </Col>

                <Col xs="6" sm="6" md="6" lg="6" xl="6">
                  <CardBody>
                    {" " + pair[1].username}
                  </CardBody>

                  <CardText>
                    <Fragment>
                      <span style={{color:"lightgrey"}}>
                        <BsFileArrowDown className="mx-3 score-btn-icon" onClick={this.decrementTwo} />
                        { this.state.scoreTwo }
                        <BsFileArrowUp className="mx-3 score-btn-icon" onClick={this.incrementTwo} />
                      </span>
                    </Fragment>
                  </CardText>

                  <CardText>
                    <ConfirmModal
                      page={"Match Card"}
                      title={"Match Winner"}
                      body={`${pair[1].username} won this match?`}
                      // onClick={() => onSetWinner(pair[1], this.state.scoreOne, this.state.scoreTwo)}
                      onClick={() => console.log(this.state.scoreOne, this.state.scoreTwo)}
                      // disabled={
                      //   winners.some(array => array.username === pair[1].username || pair[0].username)
                      // }
                    />
                  </CardText>
                </Col>
              </Row>
            </Card>
          ))
        }
      </div>
    )
  };
};

export default MatchCards;