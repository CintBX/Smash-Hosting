import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';

import NavigationBar from './components/layout/NavigationBar';
import ProfileSidebar from './components/layout/ProfileSidebar';
import TournamentIndex from './components/tournaments/Index';
import TournamentShow from './components/tournaments/Show';
import PlayerProfile from './components/players/PlayerProfile';
import PlayerDirectory from './components/players/PlayerDirectory';
import SmashNews from './components/news/SmashNews';

import { loadUser } from './actions/authActions';

export default class App extends Component{
  componentDidMount() {
    store.dispatch(loadUser());
  };

  render() {
    return (
      <Provider store={store}>
        <Router>
          <NavigationBar />
          <Container>
            <Row>
              <Col lg="5">
                <ProfileSidebar />
              </Col>
            
              <Col lg="7">
                <Switch>
                  <Route exact path="/" component={TournamentIndex} />
                  <Route path="/tournaments/:id" component={TournamentShow} />
                  <Route path="/players" component={PlayerDirectory} />
                  <Route path="/player/:id" component={PlayerProfile} />
                  <Route path="/smash-news" component={SmashNews} />
                </Switch>
              </Col>
            </Row>
          </Container>
        </Router>
      </Provider>
    );
  };
};