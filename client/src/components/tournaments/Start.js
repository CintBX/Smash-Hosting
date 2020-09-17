import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showTournament } from '../../actions/tournamentActions';
import { Bracket } from 'react-tournament-bracket';

class TournamentStart extends Component {
  constructor(props) {
    super(props);
  };

  static propTypes = {
    tournament: PropTypes.object.isRequired
  };

  render() {
    const { participants, date } = this.props.tournament.showTournament;

    const game = {
      id: 1,
      scheduled: date,
      name: "Finals",
      sides: {
        home: {
          team: null,
          score: null,
          seed: {
            sourceGame: {
              id: 1,
              scheduled: date,
              name: "B1",
              gameGroup: null,
              sides: {
                home: {
                  team: null,
                  score: null,
                  seed: {
                    sourceGame: {
                      id: 1,
                      scheduled: date,
                      name: "A1",
                      sides: {
                        home: {
                          team: null,
                          score: null,
                          seed: {
                            sourceGame: null,
                            sourcePool: null,
                            rank: 1,
                            displayName: "Player One"
                          }
                        },
                        visitor: {
                          team: null,
                          score: null,
                          seed: {
                            sourceGame: null,
                            sourcePool: null,
                            rank: 2,
                            displayName: "Player Two"
                          }
                        }
                      }
                    },
                    sourcePool: null,
                    rank: 1,
                    displayName: "Winner of A1"
                  }
                },
                visitor: {
                  team: null,
                  score: null,
                  seed: {
                    sourceGame: {
                      id: 1,
                      scheduled: date,
                      name: "A2",
                      sides: {
                        home: {
                          team: null,
                          score: null,
                          seed: {
                            sourceGame: null,
                            sourcePool: null,
                            rank: 3,
                            displayName: "Player Three"
                          }
                        },
                        visitor: {
                          team: null,
                          score: null,
                          seed: {
                            sourceGame: null,
                            sourcePool: null,
                            rank: 4,
                            displayName: "Player Four"
                          }
                        }
                      }
                    },
                    sourcePool: null,
                    rank: 1,
                    displayName: "Winner of A2"
                  }
                }
              }
            },
            sourcePool: null,
            rank: 1,
            displayName: "Winner of B1"
          }
        },
        visitor: {
          team: null,
          score: null,
          seed: {
            sourceGame: {
              id: 17,
              scheduled: date,
              name: "B2",
              sides: {
                home: {
                  team: null,
                  score: null,
                  seed: {
                    sourceGame: {
                      id: 18,
                      scheduled: date,
                      name: "A3",
                      sides: {
                        home: {
                          team: null,
                          score: null,
                          seed: {
                            displayName: "Player Five"
                          }
                        },
                        visitor: {
                          team: null,
                          score: null,
                          seed: {
                            displayName: "Player Six"
                          }
                        }
                      },
                    },
                    sourcePool: null,
                    rank: 1,
                    displayName: "Winner of A3"
                  }
                },
                visitor: {
                  team: null,
                  score: null,
                  seed: {
                    sourceGame: {
                      id: 18,
                      scheduled: date,
                      name: "A4",
                      sides: {
                        home: {
                          team: null,
                          score: null,
                          seed: {
                            sourceGame: null,
                            sourcePool: null,
                            rank: 7,
                            displayName: "Player Seven"
                          }
                        },
                        visitor: {
                          team: null,
                          score: null,
                          seed: {
                            sourceGame: null,
                            sourcePool: null,
                            rank: 8,
                            displayName: "Player Eight"
                          }
                        }
                      },
                    },
                    sourcePool: null,
                    rank: 1,
                    displayName: "Winner of A4"
                  }
                }
              }
            },
            sourcePool: null,
            rank: 1,
            displayName: "Winner of B2"
          }
        }
      }
    }

    return (
      <div>
        <h1>Bracket:</h1>
        {
          participants && participants.map(participant => (
            <p>{participant.username}</p>
          ))
        }

        <Bracket game={game} />
      </div>
    );
  };
};


const mapStateToProps = state => ({
  tournament: state.tournament 
});

export default connect(mapStateToProps, { showTournament })(TournamentStart);