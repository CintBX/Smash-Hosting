import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showTournament } from '../../actions/tournamentActions';
import { Bracket } from 'react-tournament-bracket';

// const GameBracket = props => {
// code here maybe
// };

class Game extends Component {
  constructor(props) {
    super(props);
  };

  static propTypes = {
    tournament: PropTypes.object.isRequired
  };

  render() {
    const { scheduled, participants, rounds } = this.props.tournament.showTournament;

    const game = {
      id: 1,
      scheduled: null,
      name: "18",
      sides: {
        home: {
          score: { score: 0 },
          seed: {
            sourceGame: {
              id: 2,
              scheduled: null,
              name: "16",
              sides: {
                home: {
                  score: { score: 0 },
                  seed: {
                    sourceGame: {
                      id: 3,
                      scheduled: null,
                      name: "12",
                      sides: {
                        home: {
                          score: { score: 0 },
                          seed: {
                            sourceGame: {
                              id: 4,
                              scheduled: null,
                              name: "9",
                              sides: {
                                home: {
                                  score: { score: 0 },
                                  seed: {
                                    sourceGame: null,
                                    rank: 1,
                                    displayName: "Seed"
                                  }
                                },
                                visitor: {
                                  score: { score: 0 },
                                  seed: {
                                    sourceGame: {
                                      id: 5,
                                      scheduled: null,
                                      name: "1",
                                      sides: {
                                        home: {
                                          score: { score: 0 },
                                          seed: {
                                            sourceGame: null,
                                            rank: 2,
                                            displayName: "Seed"
                                          }
                                        },
                                        visitor: {
                                          score: { score: 0 },
                                          seed: {
                                            sourceGame: null,
                                            rank: 2,
                                            displayName: "Seed"
                                          }
                                        }
                                      }
                                    },
                                    rank: 1,
                                    displayName: ""
                                  }
                                }
                              }
                            },
                            rank: 1,
                            displayName: ""
                          }
                        },
                        visitor: {
                          score: { score: 0 },
                          seed: {
                            sourceGame: {
                              id: 4,
                              scheduled: null,
                              name: "4",
                              sides: {
                                home: {
                                  score: { score: 0 },
                                  seed: {
                                    sourceGame: null,
                                    rank: 1,
                                    displayName: "Seed"
                                  }
                                },
                                visitor: {
                                  score: { score: 0 },
                                  seed: {
                                    sourceGame: null,
                                    rank: 1,
                                    displayName: "Seed"
                                  }
                                }
                              }
                            },
                            rank: 1,
                            displayName: ""
                          }
                        }
                      }
                    },
                    rank: 1,
                    displayName: ""
                  }
                },
                visitor: {
                  score: { score: 0 },
                  seed: {
                    sourceGame: {
                      id: 3,
                      scheduled: null,
                      name: "13",
                      sides: {
                        home: {
                          score: { score: 0 },
                          seed: {
                            sourceGame: {
                              id: 4,
                              scheduled: null,
                              name: "10",
                              sides: {
                                home: {
                                  score: { score: 0 },
                                  seed: {
                                    sourceGame: null,
                                    rank: 7,
                                    displayName: "Seed"
                                  }
                                },
                                visitor: {
                                  score: { score: 0 },
                                  seed: {
                                    sourceGame: {
                                      id: 5,
                                      scheduled: null,
                                      name: "2",
                                      sides: {
                                        home: {
                                          score: { score: 0 },
                                          seed: {
                                            sourceGame: null,
                                            rank: 2,
                                            displayName: "Seed"
                                          }
                                        },
                                        visitor: {
                                          score: { score: 0 },
                                          seed: {
                                            sourceGame: null,
                                            rank: 2,
                                            displayName: "Seed"
                                          }
                                        }
                                      }
                                    },
                                    rank: 1,
                                    displayName: ""
                                  }
                                }
                              }
                            },
                            rank: 1,
                            displayName: ""
                          }
                        },
                        visitor: {
                          score: { score: 0 },
                          seed: {
                            sourceGame: {
                              id: 4,
                              scheduled: null,
                              name: "5",
                              sides: {
                                home: {
                                  score: { score: 0 },
                                  seed: {
                                    sourceGame: null,
                                    rank: 7,
                                    displayName: "Seed"
                                  }
                                },
                                visitor: {
                                  score: { score: 0 },
                                  seed: {
                                    sourceGame: null,
                                    rank: 8,
                                    displayName: "Seed"
                                  }
                                }
                              }
                            },
                            rank: 1,
                            displayName: ""
                          }
                        }
                      }
                    },
                    rank: 1,
                    displayName: ""
                  }
                }
              }
            },
            rank: 1,
            displayName: ""
          }
        },
        visitor: {
          score: { score: 0 },
          seed: {
            sourceGame: {
              id: 2,
              scheduled: null,
              name: "17",
              sides: {
                home: {
                  score: { score: 0 },
                  seed: {
                    sourceGame: {
                      id: 3,
                      scheduled: null,
                      name: "14",
                      sides: {
                        home: {
                          score: { score: 0 },
                          seed: {
                            sourceGame: {
                              id: 4,
                              scheduled: null,
                              name: "11",
                              sides: {
                                home: {
                                  score: { score: 0 },
                                  seed: {
                                    sourceGame: null,
                                    rank: 1,
                                    displayName: "Seed"
                                  }
                                },
                                visitor: {
                                  score: { score: 0 },
                                  seed: {
                                    sourceGame: {
                                      id: 5,
                                      scheduled: null,
                                      name: "3",
                                      sides: {
                                        home: {
                                          score: { score: 0 },
                                          seed: {
                                            sourceGame: null,
                                            rank: 1,
                                            displayName: "Seed"
                                          }
                                        },
                                        visitor: {
                                          score: { score: 0 },
                                          seed: {
                                            sourceGame: null,
                                            rank: 1,
                                            displayName: "Seed"
                                          }
                                        }
                                      }
                                    },
                                    rank: 1,
                                    displayName: ""
                                  }
                                }
                              }
                            },
                            rank: 1,
                            displayName: ""
                          }
                        },
                        visitor: {
                          score: { score: 0 },
                          seed: {
                            sourceGame: {
                              id: 4,
                              scheduled: null,
                              name: "6",
                              sides: {
                                home: {
                                  score: { score: 0 },
                                  seed: {
                                    sourceGame: null,
                                    rank: 1,
                                    displayName: "Seed"
                                  }
                                },
                                visitor: {
                                  score: { score: 0 },
                                  seed: {
                                    sourceGame: null,
                                    rank: 1,
                                    displayName: "Seed"
                                  }
                                }
                              }
                            },
                            rank: 1,
                            displayName: ""
                          }
                        }
                      },
                    },
                    rank: 1,
                    displayName: ""
                  }
                },
                visitor: {
                  score: { score: 0 },
                  seed: {
                    sourceGame: {
                      id: 3,
                      scheduled: null,
                      name: "15",
                      sides: {
                        home: {
                          score: { score: 0 },
                          seed: {
                            sourceGame: {
                              id: 4,
                              scheduled: null,
                              name: "7",
                              sides: {
                                home: {
                                  score: { score: 0 },
                                  seed: {
                                    sourceGame: null,
                                    rank: 7,
                                    displayName: "Seed"
                                  }
                                },
                                visitor: {
                                  score: { score: 0 },
                                  seed: {
                                    sourceGame: null,
                                    rank: 8,
                                    displayName: "Seed"
                                  }
                                }
                              }
                            },
                            rank: 1,
                            displayName: ""
                          }
                        },
                        visitor: {
                          score: { score: 0 },
                          seed: {
                            sourceGame: {
                              id: 4,
                              scheduled: null,
                              name: "8",
                              sides: {
                                home: {
                                  score: { score: 0 },
                                  seed: {
                                    sourceGame: null,
                                    rank: 7,
                                    displayName: "Seed"
                                  }
                                },
                                visitor: {
                                  score: { score: 0 },
                                  seed: {
                                    sourceGame: null,
                                    rank: 8,
                                    displayName: "Seed"
                                  }
                                }
                              }
                            },
                            rank: 1,
                            displayName: ""
                          }
                        }
                      },
                    },
                    rank: 1,
                    displayName: ""
                  }
                }
              }
            },
            rank: 1,
            displayName: ""
          }
        }
      }
    }

    return (
      <div>
        <Bracket game={game} />
        {/* <iframe src="http://challonge.com/cintest1/module" width="100%" height="600" frameborder="0" scrolling="auto" allowtransparency="true"></iframe> */}
      </div>
    );
  };
};

const mapStateToProps = state => ({
  tournament: state.tournament
});

export default connect(mapStateToProps, { showTournament })(Game);