import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
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
import ValidRoute from './components/ValidRoute';

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
            <Row className="justify-content-sm-center justify-content-md-center">
              <Col sm="7" md="7" lg="5" xl="5">
                <ProfileSidebar />
              </Col>
            
              <Col sm="7" md="7" lg="7" xl="7">
                <Switch>
                  <ValidRoute exact path="/" type="valid">
                    <TournamentIndex />
                  </ValidRoute>

                  <ValidRoute path="/tournaments/:id" type="valid">
                    <TournamentShow />
                  </ValidRoute>

                  <ValidRoute path="/players" type="valid">
                    <PlayerDirectory />
                  </ValidRoute>

                  <ValidRoute path="/player/:id" type="valid">
                    <PlayerProfile />
                  </ValidRoute>

                  <ValidRoute path="/smash-news" type="valid">
                    <SmashNews />
                  </ValidRoute>
                </Switch>
              </Col>
            </Row>
          </Container>
        </Router>
      </Provider>
    );
  };
};


// Old Routes
/*
  <Route exact path="/" component={TournamentIndex} />
  <Route path="/tournaments/:id" component={TournamentShow} />
  <Route path="/players" component={PlayerDirectory} />
  <Route path="/player/:id" component={PlayerProfile} />
  <Route path="/smash-news" component={SmashNews} />
*/