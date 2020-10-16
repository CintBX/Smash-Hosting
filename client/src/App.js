import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { Provider } from 'react-redux';
import store from './store';
import NavigationBar from './components/layout/NavigationBar';
import ProfileSidebar from './components/layout/ProfileSidebar';
import TournamentIndex from './components/tournaments/TournamentIndex';
import TournamentShow from './components/tournaments/TournamentShow';
import TournamentStart from './components/tournaments/TournamentStart';
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
            <Row className="justify-content-sm-center justify-content-md-center">
              <Col sm="7" md="7" lg="5" xl="5">
                <ProfileSidebar />
              </Col>
            
              <Col sm="7" md="7" lg="7" xl="7">
                <Switch>
                  <Route path="/tournaments/:id/start" component={TournamentStart} />
                  <Route exact path="/tournaments/:id" component={TournamentShow} />
                  <Route exact path="/tournaments" render={ () => <Redirect to="/" /> } />
                  <Route path="/player/:id" component={PlayerProfile} />
                  <Route exact path="/players" component={PlayerDirectory} />
                  <Route path="/users"  render={ () => <Redirect to="/" /> } />
                  <Route path="/smash-news" component={SmashNews} />
                  <Route exact path="/" component={TournamentIndex} />
                </Switch>
              </Col>
            </Row>
          </Container>
        </Router>
      </Provider>
    );
  };
};