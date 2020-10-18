import React, { Component } from 'react';
import {
	Card,
	CardBody,
	Button,
	FormGroup,
	Collapse,
	CardDeck,
	CardHeader,
	Row,
	Col
} from 'reactstrap';

export default class RuleSets extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
    <Row>
      <Col>
        <FormGroup>
          <Button 
            outline
            block
            color="dark"
            onClick={this.toggle} 
            style={{ marginBottom:'1rem' }}
          >
            <b>View Rulesets</b>
          </Button>

          <Collapse isOpen={this.state.isOpen}>
            <CardDeck>
              <Col lg="12">
                <Card className="my-2">
                  <CardHeader className="text-center">Single Elimination</CardHeader>
                  <CardBody>Winners advance to the next round while losers are eliminated, until only one fighter remains - the tournament champion.</CardBody>
                </Card>
              </Col>

              <Col lg="12">
                <Card className="my-2">
                  <CardHeader className="text-center">Double Elimination</CardHeader>
                  <CardBody>Winners advance in the W Bracket while losers are placed in the L Bracket. In the L Bracket, winners advance and losers are eliminated.</CardBody>
                  <CardBody><strong>Winners Bracket Finals</strong><br/> The two fighters who advance to the final round of W Bracket.</CardBody>
                  <CardBody><strong>Losers Bracket Finals</strong><br/> The winner of the L Bracket versus the loser of the <i>Winners Bracket Finals</i>.</CardBody>
                  <CardBody><strong>Grand Finals</strong><br/> The winner of the <i>Winners Bracket Finals</i> versus the winner of the <i>Losers Bracket Finals</i>.</CardBody>
                </Card>
              </Col>

              <Col lg="12">
                <Card className="my-2">
                  <CardHeader className="text-center">Round Robin</CardHeader>
                  <CardBody>Every player fights every single other player in the tournament. No brackets and no eliminations. Everyone keeps fighting until all matches are played.<br/><br/> The contestant with the most wins is the Champion.</CardBody>
                </Card>
              </Col>

              <Col lg="12">
                <Card className="my-2">
                  <CardHeader className="text-center">Pools</CardHeader>
                  <CardBody>Tournament entrants are divided and placed into small groups called "Pools". Each Pool then has its own mini-tournament with Round Robin rules. Once Pool Winners are established, they form a larger Bracket with either Single Elimination or Double Elimination rules (determined by the Host).
                  <br/> The tournament continues until there's a Champion.</CardBody>
                </Card>
              </Col>
            </CardDeck>
          </Collapse>
        </FormGroup>
      </Col>
    </Row>
    );
  };
};