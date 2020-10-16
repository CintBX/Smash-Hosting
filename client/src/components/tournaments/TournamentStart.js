import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Bracket } from 'react-tournament-bracket';
import { showTournament } from '../../actions/tournamentActions';

class TournamentStartPage extends Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.showTournament(id);
  }

  static propTypes = {
    tournament: PropTypes.object.isRequired
  };

  render() {
    const { title, hostedBy, date, participants } = this.props.tournament.showTournament;

    let usernames = []
    participants && participants.forEach(participant => {
      usernames.push(participant.username);
    });

    const game = {
      id: 1,
      scheduled: date,
      name: "Finals",
      sides: {
        home: {
          score: { score: 0 },
          seed: {
            sourceGame: {
              id: 1,
              scheduled: date,
              name: "B1",
              gameGroup: null,
              sides: {
                home: {
                  score: { score: 0 },
                  seed: {
                    sourceGame: {
                      id: 1,
                      scheduled: date,
                      name: "A1",
                      sides: {
                        home: {
                          team: null,
                          score: { score: 0 },
                          seed: {
                            sourceGame: null,
                            rank: 1,
                            displayName: usernames[0]
                          }
                        },
                        visitor: {
                          score: { score: 0 },
                          seed: {
                            sourceGame: null,
                            rank: 2,
                            displayName: usernames[1]
                          }
                        }
                      }
                    },
                    rank: 1,
                    displayName: "Winner of A1"
                  }
                },
                visitor: {
                  score: { score: 0 },
                  seed: {
                    sourceGame: {
                      id: 1,
                      scheduled: date,
                      name: "A2",
                      sides: {
                        home: {
                          score: { score: 0 },
                          seed: {
                            sourceGame: null,
                            rank: 3,
                            displayName: usernames[2]
                          }
                        },
                        visitor: {
                          score: { score: 0 },
                          seed: {
                            sourceGame: null,
                            rank: 4,
                            displayName: usernames[3]
                          }
                        }
                      }
                    },
                    rank: 1,
                    displayName: "Winner of A2"
                  }
                }
              }
            },
            rank: 1,
            displayName: "Winner of B1"
          }
        },
        visitor: {
          score: { score: 0 },
          seed: {
            sourceGame: {
              id: 17,
              scheduled: date,
              name: "B2",
              sides: {
                home: {
                  score: { score: 0 },
                  seed: {
                    sourceGame: {
                      id: 18,
                      scheduled: date,
                      name: "A3",
                      sides: {
                        home: {
                          score: { score: 0 },
                          seed: {
                            displayName: usernames[4]
                          }
                        },
                        visitor: {
                          score: { score: 0 },
                          seed: {
                            displayName: usernames[5]
                          }
                        }
                      },
                    },
                    rank: 1,
                    displayName: "Winner of A3"
                  }
                },
                visitor: {
                  score: { score: 0 },
                  seed: {
                    sourceGame: {
                      id: 18,
                      scheduled: date,
                      name: "A4",
                      sides: {
                        home: {
                          score: { score: 0 },
                          seed: {
                            sourceGame: null,
                            rank: 7,
                            displayName: usernames[6]
                          }
                        },
                        visitor: {
                          score: { score: 0 },
                          seed: {
                            sourceGame: null,
                            rank: 8,
                            displayName: usernames[7]
                          }
                        }
                      },
                    },
                    rank: 1,
                    displayName: "Winner of A4"
                  }
                }
              }
            },
            rank: 1,
            displayName: "Winner of B2"
          }
        }
      }
    }

    return (
      <div>
        <h1>{ title }</h1>
        <h5>By { hostedBy }</h5>
        <Bracket game={game} />
      </div>
    );
  };
};

const mapStateToProps = state => ({
  tournament: state.tournament
});

export default connect(mapStateToProps, { showTournament })(TournamentStartPage);