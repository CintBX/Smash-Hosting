import React, { Component } from 'react';
import { 
  Card,
  CardText,
  CardBody,
  Row,
  Col
} from 'reactstrap';
import ScoreKeeper from './scorekeeper';
import ConfirmModal from '../../ConfirmModal';

class MatchCards extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { // props passed from MatchGenerator
      round,
      finals,
      onSetWinner,
      onSetScoreOne,
      onSetScoreTwo,
      pairs,
      // winners
    } = this.props;

    return (
      <div style={{color:"lightgrey"}}>
        <h1 className="text-center mb-4">Round { round }</h1>

        {
          pairs && pairs.map(pair => (
            <Card className="text-center match-card mb-5">
              <Row>
                <Col xs="6" sm="6" md="6" lg="6" xl="6">
                  <CardBody>
                    {pair[0].username + " "}
                  </CardBody>

                  <CardText>
                    <ScoreKeeper score={onSetScoreOne} finals={finals} />
                  </CardText>

                  <CardText>
                    <ConfirmModal
                      page={"Match Card"}
                      title={"Match Winner"}
                      body={`${pair[0].username} won this match?`}
                      onClick={() => onSetWinner(pair[0])} // plug this.state.scoreOne && scoreTwo
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
                    <ScoreKeeper score={onSetScoreTwo} finals={finals} />
                  </CardText>

                  <CardText>
                    <ConfirmModal
                      page={"Match Card"}
                      title={"Match Winner"}
                      body={`${pair[1].username} won this match?`}
                      onClick={() => onSetWinner(pair[1])} // plug this.state.scoreOne && scoreTwo
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