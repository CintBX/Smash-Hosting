import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import NavigationBar from './components/layout/NavigationBar';
import ProfileSidebar from './components/layout/ProfileSidebar';
import TournamentIndex from './components/tournaments/Index';
import UserProfile from './components/users/UserProfile';
import UserTournaments from './components/users/UserTournaments';
import SmashNews from './components/news/SmashNews';

function App() {
  return (
  	<Router>
  		<NavigationBar />
      <Container>
        <Row>
          <Col lg="4">
            <ProfileSidebar />
          </Col>
        
          <Col lg="8">
            <Switch>
            	<Route exact path="/" component={TournamentIndex} />
            	<Route path="/profile" component={UserProfile} />
            	<Route path="/my-tournaments" component={UserTournaments} />
            	<Route path="/smash-news" component={SmashNews} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;