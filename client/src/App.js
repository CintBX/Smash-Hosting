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
import PlayerProfile from './components/users/PlayerProfile';
import SmashNews from './components/news/SmashNews';
import PlayerDirectory from './components/users/PlayerDirectory';

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
              <Col lg="4">
                <ProfileSidebar />
              </Col>
            
              <Col lg="8">
                <Switch>
                  <Route exact path="/" component={TournamentIndex} />
                  <Route path="/profile" component={PlayerProfile} />
                  <Route path="/smash-news" component={SmashNews} />
                  <Route path="/roster" component={PlayerDirectory} />
                  <Route path="/tournaments/:id" component={TournamentShow} />
                </Switch>
              </Col>
            </Row>
          </Container>
        </Router>
      </Provider>
    );
  };
};