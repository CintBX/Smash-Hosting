import React, { Component } from 'react';
import { Bracket } from 'react-tournament-bracket';


class BracketGenerator extends Component {
  constructor(props) {
    super(props);
    console.log(props.players);
  };

  render() {
    const { bracketSize, rounds, players } = this.props;

    let round1;
    let round2;
    let round3;
    let round4;
    let round5;
    let round6;

    rounds && rounds.forEach(round => {
      if(round.round === 1) {
        round1 = round.matches;
      } else if(round.round === 2) {
        round2 = round.matches;
      } else if(round.round === 3) {
        round3 = round.matches;
      } else if(round.round === 4) {
        round4 = round.matches;
      } else if(round.round === 5) {
        round5 = round.matches;
      } else if(round.round === 6) {
        round6 = round.matches;
      };
    });

    switch(bracketSize) {
      case 20:
        const structure20 = {
          id: 1,
          scheduled: "Best of 5",
          name: "19",
          sides: {
            home: {
              score: { score: 0 },
              seed: {
                sourceGame: {
                  id: 2,
                  scheduled: "Best of 3",
                  name: "17",
                  sides: {
                    home: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "13",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
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
                                          scheduled: "Best of 3",
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
                                  scheduled: "Best of 3",
                                  name: "5",
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
                          scheduled: "Best of 3",
                          name: "14",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
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
                                          scheduled: "Best of 3",
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
                                  scheduled: "Best of 3",
                                  name: "6",
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
                  scheduled: "Best of 3",
                  name: "18",
                  sides: {
                    home: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "15",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
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
                                          scheduled: "Best of 3",
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
                                  scheduled: "Best of 3",
                                  name: "7",
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
                          scheduled: "Best of 3",
                          name: "16",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "12",
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
                                          scheduled: "Best of 3",
                                          name: "4",
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
                                  scheduled: "Best of 3",
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
          <Bracket game={structure20} topText={({scheduled}) => new String(scheduled)} />
        );

      case 19:
        const structure19 = {
          id: 1,
          scheduled: "Best of 5",
          name: "18",
          sides: {
            home: {
              score: { score: 0 },
              seed: {
                sourceGame: {
                  id: 2,
                  scheduled: "Best of 3",
                  name: "16",
                  sides: {
                    home: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "12",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "4",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: round2 ? round2[0].username : players[6].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: {
                                          id: 5,
                                          scheduled: "Best of 3",
                                          name: "1",
                                          sides: {
                                            home: {
                                              score: { score: 0 },
                                              seed: {
                                                sourceGame: null,
                                                rank: 2,
                                                displayName: players[0].username
                                              }
                                            },
                                            visitor: {
                                              score: { score: 0 },
                                              seed: {
                                                sourceGame: null,
                                                rank: 2,
                                                displayName: players[1].username
                                              }
                                            }
                                          }
                                        },
                                        rank: 1,
                                        displayName: round2 ? round2[1].username : ""
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round3 ? round3[0].username : ""
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "5",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: round2 ? round2[2].username : players[7].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: round2 ? round2[3].username : players[8].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round3 ? round3[1].username : ""
                              }
                            }
                          }
                        },
                        rank: 1,
                        displayName: round4 ? round4[0].username : ""
                      }
                    },
                    visitor: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "13",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "6",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 7,
                                        displayName: round2 ? round2[4].username : players[9].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: {
                                          id: 5,
                                          scheduled: "Best of 3",
                                          name: "2",
                                          sides: {
                                            home: {
                                              score: { score: 0 },
                                              seed: {
                                                sourceGame: null,
                                                rank: 2,
                                                displayName: players[2].username
                                              }
                                            },
                                            visitor: {
                                              score: { score: 0 },
                                              seed: {
                                                sourceGame: null,
                                                rank: 2,
                                                displayName: players[3].username
                                              }
                                            }
                                          }
                                        },
                                        rank: 1,
                                        displayName: round2 ? round2[5].username : ""
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round3 ? round3[2].username : ""
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "7",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 7,
                                        displayName: round2 ? round2[6].username : players[10].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 8,
                                        displayName: round2 ? round2[7].username : players[11].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round3 ? round3[3].username : ""
                              }
                            }
                          }
                        },
                        rank: 1,
                        displayName: round4 ? round4[1].username : ""
                      }
                    }
                  }
                },
                rank: 1,
                displayName: round5 ? round5[0].username : ""
              }
            },
            visitor: {
              score: { score: 0 },
              seed: {
                sourceGame: {
                  id: 2,
                  scheduled: "Best of 3",
                  name: "17",
                  sides: {
                    home: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "14",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "8",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: round2 ? round2[8].username : players[12].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: {
                                          id: 5,
                                          scheduled: "Best of 3",
                                          name: "3",
                                          sides: {
                                            home: {
                                              score: { score: 0 },
                                              seed: {
                                                sourceGame: null,
                                                rank: 1,
                                                displayName: players[4].username
                                              }
                                            },
                                            visitor: {
                                              score: { score: 0 },
                                              seed: {
                                                sourceGame: null,
                                                rank: 1,
                                                displayName: players[5].username
                                              }
                                            }
                                          }
                                        },
                                        rank: 1,
                                        displayName: round2 ? round2[9].username : ""
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round3 ? round3[4].username : ""
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "9",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: round2 ? round2[10].username : players[13].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: round2 ? round2[11].username : players[14].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round3 ? round3[5].username : ""
                              }
                            }
                          },
                        },
                        rank: 1,
                        displayName: round4 ? round4[2].username : ""
                      }
                    },
                    visitor: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "15",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "10",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 7,
                                        displayName: round2 ? round2[12].username : players[15].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 8,
                                        displayName: round2 ? round2[13].username : players[16].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round3 ? round3[6].username : ""
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "11",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 7,
                                        displayName: round2 ? round2[14].username : players[17].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 8,
                                        displayName: round2 ? round2[15].username : players[18].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round3 ? round3[7].username : ""
                              }
                            }
                          },
                        },
                        rank: 1,
                        displayName: round4 ? round4[3].username : ""
                      }
                    }
                  }
                },
                rank: 1,
                displayName: round5 ? round5[1].username : ""
              }
            }
          }
        }
        return (
          <Bracket game={structure19} topText={({scheduled}) => new String(scheduled)} />
        );

      case 18:
        const structure18 = {
          id: 1,
          scheduled: "Best of 5",
          name: "17",
          sides: {
            home: {
              score: { score: 0 },
              seed: {
                sourceGame: {
                  id: 2,
                  scheduled: "Best of 3",
                  name: "15",
                  sides: {
                    home: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "11",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "3",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: round2 ? round2[0].username : players[4].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: {
                                          id: 5,
                                          scheduled: "Best of 3",
                                          name: "1",
                                          sides: {
                                            home: {
                                              score: { score: 0 },
                                              seed: {
                                                sourceGame: null,
                                                rank: 2,
                                                displayName: players[0].username
                                              }
                                            },
                                            visitor: {
                                              score: { score: 0 },
                                              seed: {
                                                sourceGame: null,
                                                rank: 2,
                                                displayName: players[1].username
                                              }
                                            }
                                          }
                                        },
                                        rank: 1,
                                        displayName: round2 ? round2[1].username : ""
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round3 ? round3[0].username : ""
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "4",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: round2 ? round2[2].username : players[5].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: round2 ? round2[3].username : players[6].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round3 ? round3[1].username : ""
                              }
                            }
                          }
                        },
                        rank: 1,
                        displayName: round4 ? round4[0].username : ""
                      }
                    },
                    visitor: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "12",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "5",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 7,
                                        displayName: round2 ? round2[4].username : players[7].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 8,
                                        displayName: round2 ? round2[5].username : players[8].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round3 ? round3[2].username : ""
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "6",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 7,
                                        displayName: round2 ? round2[6].username : players[9].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 8,
                                        displayName: round2 ? round2[7].username : players[10].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round3 ? round3[3].username : ""
                              }
                            }
                          }
                        },
                        rank: 1,
                        displayName: round4 ? round4[1].username : ""
                      }
                    }
                  }
                },
                rank: 1,
                displayName: round5 ? round5[0].username : ""
              }
            },
            visitor: {
              score: { score: 0 },
              seed: {
                sourceGame: {
                  id: 2,
                  scheduled: "Best of 3",
                  name: "16",
                  sides: {
                    home: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "13",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "7",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: round2 ? round2[8].username : players[11].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: {
                                          id: 5,
                                          scheduled: "Best of 3",
                                          name: "2",
                                          sides: {
                                            home: {
                                              score: { score: 0 },
                                              seed: {
                                                sourceGame: null,
                                                rank: 1,
                                                displayName: players[2].username
                                              }
                                            },
                                            visitor: {
                                              score: { score: 0 },
                                              seed: {
                                                sourceGame: null,
                                                rank: 1,
                                                displayName: players[3].username
                                              }
                                            }
                                          }
                                        },
                                        rank: 1,
                                        displayName: round2 ? round2[9].username : ""
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round3 ? round3[4].username : ""
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "8",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: round2 ? round2[10].username : players[12].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: round2 ? round2[11].username : players[13].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round3 ? round3[5].username : ""
                              }
                            }
                          },
                        },
                        rank: 1,
                        displayName: round4 ? round4[2].username : ""
                      }
                    },
                    visitor: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "14",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "9",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 7,
                                        displayName: round2 ? round2[12].username : players[14].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 8,
                                        displayName: round2 ? round2[13].username : players[15].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round3 ? round3[6].username : ""
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "10",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 7,
                                        displayName: round2 ? round2[14].username : players[16].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 8,
                                        displayName: round2 ? round2[15].username : players[17].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round3 ? round3[7].username : ""
                              }
                            }
                          },
                        },
                        rank: 1,
                        displayName: round4 ? round4[3].username : ""
                      }
                    }
                  }
                },
                rank: 1,
                displayName: round5 ? round5[1].username : ""
              }
            }
          }
        }
        return (
          <Bracket game={structure18} topText={({scheduled}) => new String(scheduled)} />
        );

      case 17:
        const structure17 = {
          id: 1,
          scheduled: "Best of 5",
          name: "16",
          sides: {
            home: {
              score: { score: 0 },
              seed: {
                sourceGame: {
                  id: 2,
                  scheduled: "Best of 3",
                  name: "14",
                  sides: {
                    home: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "10",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "2",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: round2 ? round2[0].username : players[2].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: {
                                          id: 5,
                                          scheduled: "Best of 3",
                                          name: "1",
                                          sides: {
                                            home: {
                                              score: { score: 0 },
                                              seed: {
                                                sourceGame: null,
                                                rank: 2,
                                                displayName: players[0].username
                                              }
                                            },
                                            visitor: {
                                              score: { score: 0 },
                                              seed: {
                                                sourceGame: null,
                                                rank: 2,
                                                displayName: players[1].username
                                              }
                                            }
                                          }
                                        },
                                        rank: 1,
                                        displayName: round2 ? round2[1].username : ""
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round3 ? round3[0].username : ""
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "3",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: round2 ? round2[2].username : players[3].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: round2 ? round2[3].username : players[4].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round3 ? round3[1].username : ""
                              }
                            }
                          }
                        },
                        rank: 1,
                        displayName: round4 ? round4[0].username : ""
                      }
                    },
                    visitor: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "11",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "4",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 7,
                                        displayName: round2 ? round2[4].username : players[5].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 8,
                                        displayName: round2 ? round2[5].username : players[6].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round3 ? round3[2].username : ""
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "5",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 7,
                                        displayName: round2 ? round2[6].username : players[7].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 8,
                                        displayName: round2 ? round2[7].username : players[8].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round3 ? round3[3].username : ""
                              }
                            }
                          }
                        },
                        rank: 1,
                        displayName: round4 ? round4[1].username : ""
                      }
                    }
                  }
                },
                rank: 1,
                displayName: round5 ? round5[0].username : ""
              }
            },
            visitor: {
              score: { score: 0 },
              seed: {
                sourceGame: {
                  id: 2,
                  scheduled: "Best of 3",
                  name: "15",
                  sides: {
                    home: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "12",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "6",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: round2 ? round2[8].username : players[9].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: round2 ? round2[9].username : players[10].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round3 ? round3[4].username : ""
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "7",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: round2 ? round2[10].username : players[11].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: round2 ? round2[11].username :  players[12].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round3 ? round3[5].username : ""
                              }
                            }
                          },
                        },
                        rank: 1,
                        displayName: round4 ? round4[2].username : ""
                      }
                    },
                    visitor: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "13",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "8",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 7,
                                        displayName: round2 ? round2[12].username : players[13].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 8,
                                        displayName: round2 ? round2[13].username :  players[14].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round3 ? round3[6].username : ""
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "9",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 7,
                                        displayName: round2 ? round2[14].username : players[15].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 8,
                                        displayName: round2 ? round2[15].username : players[16].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round3 ? round3[7].username : ""
                              }
                            }
                          },
                        },
                        rank: 1,
                        displayName: round4 ? round4[3].username : ""
                      }
                    }
                  }
                },
                rank: 1,
                displayName: round5 ? round5[1].username : ""
              }
            }
          }
        }
        return (
          <Bracket game={structure17} topText={({scheduled}) => new String(scheduled)} />
        );

      case 16:
        const structure16 = {
          id: 1,
          scheduled: "Best of 5",
          name: "15",
          sides: {
            home: {
              score: { score: 0 },
              seed: {
                sourceGame: {
                  id: 2,
                  scheduled: "Best of 3",
                  name: "13",
                  sides: {
                    home: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "9",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "1",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: round1[0].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: round1[1].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round2 ? round2[0].username : ""
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "2",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: round1[2].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: round1[3].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round2 ? round2[1].username : ""
                              }
                            }
                          }
                        },
                        rank: 1,
                        displayName: round3 ? round3[0].username : ""
                      }
                    },
                    visitor: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "10",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "3",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 7,
                                        displayName: round1[4].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 8,
                                        displayName: round1[5].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round2 ? round2[2].username : ""
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "4",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 7,
                                        displayName: round1[6].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 8,
                                        displayName: round1[7].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round2 ? round2[3].username : ""
                              }
                            }
                          }
                        },
                        rank: 1,
                        displayName: round3 ? round3[1].username : ""
                      }
                    }
                  }
                },
                rank: 1,
                displayName: round4 ? round4[0].username : ""
              }
            },
            visitor: {
              score: { score: 0 },
              seed: {
                sourceGame: {
                  id: 2,
                  scheduled: "Best of 3",
                  name: "14",
                  sides: {
                    home: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "11",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "5",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: round1[8].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: round1[9].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round2 ? round2[4].username : ""
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "6",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: round1[10].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: round1[11].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round2 ? round2[5].username : ""
                              }
                            }
                          },
                        },
                        rank: 1,
                        displayName: round3 ? round3[2].username : ""
                      }
                    },
                    visitor: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "12",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "7",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 7,
                                        displayName: round1[12].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 8,
                                        displayName: round1[13].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round2 ? round2[6].username : ""
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "8",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 7,
                                        displayName: round1[14].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 8,
                                        displayName: round1[15].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round2 ? round2[7].username : ""
                              }
                            }
                          },
                        },
                        rank: 1,
                        displayName: round3 ? round3[3].username : ""
                      }
                    }
                  }
                },
                rank: 1,
                displayName: round4 ? round4[1].username : ""
              }
            }
          }
        }
        return (
          <Bracket game={structure16} topText={({scheduled}) => new String(scheduled)} />
        );

      case 15:
        const structure15 = {
          id: 1,
          scheduled: "Best of 5",
          name: "14",
          sides: {
            home: {
              score: { score: 0 },
              seed: {
                sourceGame: {
                  id: 2,
                  scheduled: "Best of 3",
                  name: "12",
                  sides: {
                    home: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "8",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: null,
                                rank: 1,
                                displayName: round2 ? round2[0].username : players[14].username
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "1",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: players[0].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: players[1].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round2 ? round2[1].username : ""
                              }
                            }
                          }
                        },
                        rank: 1,
                        displayName: round3 ? round3[0].username : ""
                      }
                    },
                    visitor: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "9",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "2",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 7,
                                        displayName: players[2].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 8,
                                        displayName: players[3].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round2 ? round2[2].username : ""
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "3",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 7,
                                        displayName: players[4].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 8,
                                        displayName: players[5].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round2 ? round2[3].username : ""
                              }
                            }
                          }
                        },
                        rank: 1,
                        displayName: round3 ? round3[1].username : ""
                      }
                    }
                  }
                },
                rank: 1,
                displayName: round4 ? round4[0].username : ""
              }
            },
            visitor: {
              score: { score: 0 },
              seed: {
                sourceGame: {
                  id: 2,
                  scheduled: "Best of 3",
                  name: "13",
                  sides: {
                    home: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "10",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "4",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: players[6].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: players[7].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round2 ? round2[4].username : ""
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "5",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: players[8].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: players[9].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round2 ? round2[5].username : ""
                              }
                            }
                          },
                        },
                        rank: 1,
                        displayName: round3 ? round3[2].username : ""
                      }
                    },
                    visitor: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "11",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "6",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 7,
                                        displayName: players[10].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 8,
                                        displayName: players[11].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round2 ? round2[6].username : ""
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "7",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 7,
                                        displayName: players[12].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 8,
                                        displayName: players[13].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round2 ? round2[7].username : ""
                              }
                            }
                          },
                        },
                        rank: 1,
                        displayName: round3 ? round3[3].username : ""
                      }
                    }
                  }
                },
                rank: 1,
                displayName: round4 ? round4[1].username : ""
              }
            }
          }
        }
        return (
          <Bracket game={structure15} topText={({scheduled}) => new String(scheduled)} />
        );

      case 14:
        const structure14 = {
          id: 1,
          scheduled: "Best of 5",
          name: "13",
          sides: {
            home: {
              score: { score: 0 },
              seed: {
                sourceGame: {
                  id: 2,
                  scheduled: "Best of 3",
                  name: "11",
                  sides: {
                    home: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "7",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: null,
                                rank: 1,
                                displayName: round2 ? round2[0].username : players[12].username
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "1",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: players[0].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: players[1].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round2 ? round2[1].username : ""
                              }
                            }
                          }
                        },
                        rank: 1,
                        displayName: round3 ? round3[0].username : ""
                      }
                    },
                    visitor: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "8",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "2",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 7,
                                        displayName: players[2].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 8,
                                        displayName: players[3].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round2 ? round2[2].username : ""
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "3",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 7,
                                        displayName: players[4].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 8,
                                        displayName: players[5].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round2 ? round2[3].username : ""
                              }
                            }
                          }
                        },
                        rank: 1,
                        displayName: round3 ? round3[1].username : ""
                      }
                    }
                  }
                },
                rank: 1,
                displayName: round4 ? round4[0].username : ""
              }
            },
            visitor: {
              score: { score: 0 },
              seed: {
                sourceGame: {
                  id: 2,
                  scheduled: "Best of 3",
                  name: "12",
                  sides: {
                    home: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "9",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: null,
                                rank: 7,
                                displayName: round2 ? round2[4].username : players[13].username
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "4",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: players[6].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: players[7].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round2 ? round2[5].username : ""
                              }
                            }
                          },
                        },
                        rank: 1,
                        displayName: round3 ? round3[2].username : ""
                      }
                    },
                    visitor: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "10",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "5",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 7,
                                        displayName: players[8].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 8,
                                        displayName: players[9].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round2 ? round2[6].username : ""
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "6",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 7,
                                        displayName: players[10].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 8,
                                        displayName: players[11].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round2 ? round2[7].username : ""
                              }
                            }
                          },
                        },
                        rank: 1,
                        displayName: round3 ? round3[3].username : ""
                      }
                    }
                  }
                },
                rank: 1,
                displayName: round4 ? round4[1].username : ""
              }
            }
          }
        }
        return (
          <Bracket game={structure14} topText={({scheduled}) => new String(scheduled)} />
        );

      case 13:
        const structure13 = {
          id: 1,
          scheduled: "Best of 5",
          name: "12",
          sides: {
            home: {
              score: { score: 0 },
              seed: {
                sourceGame: {
                  id: 2,
                  scheduled: "Best of 3",
                  name: "10",
                  sides: {
                    home: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "6",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: null,
                                rank: 1,
                                displayName: round2 ? round2[0].username : players[10].username
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "1",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: players[0].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: players[1].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round2 ? round2[1].username : ""
                              }
                            }
                          }
                        },
                        rank: 1,
                        displayName: round3 ? round3[0].username : ""
                      }
                    },
                    visitor: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "7",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "2",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 7,
                                        displayName: players[2].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 8,
                                        displayName: players[3].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round2 ? round2[2].username : ""
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "3",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 7,
                                        displayName: players[4].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 8,
                                        displayName: players[5].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round2 ? round2[3].username : ""
                              }
                            }
                          }
                        },
                        rank: 1,
                        displayName: round3 ? round3[1].username : ""
                      }
                    }
                  }
                },
                rank: 1,
                displayName: round4 ? round4[0].username : ""
              }
            },
            visitor: {
              score: { score: 0 },
              seed: {
                sourceGame: {
                  id: 2,
                  scheduled: "Best of 3",
                  name: "11",
                  sides: {
                    home: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "8",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: null,
                                rank: 7,
                                displayName: round2 ? round2[4].username : players[11].username
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "4",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: players[6].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: players[7].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round2 ? round2[5].username : ""
                              }
                            }
                          },
                        },
                        rank: 1,
                        displayName: round3 ? round3[2].username : ""
                      }
                    },
                    visitor: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "9",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: null,
                                rank: 7,
                                displayName: round2 ? round2[6].username : players[12].username
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "5",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 7,
                                        displayName: players[8].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 8,
                                        displayName: players[9].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round2 ? round2[7].username : ""
                              }
                            }
                          },
                        },
                        rank: 1,
                        displayName: round3 ? round3[3].username : ""
                      }
                    }
                  }
                },
                rank: 1,
                displayName: round4 ? round4[1].username : ""
              }
            }
          }
        }
        return (
          <Bracket game={structure13} topText={({scheduled}) => new String(scheduled)} />
        );

      case 12:
        const structure12 = {
          id: 1,
          scheduled: "Best of 5",
          name: "11",
          sides: {
            home: {
              score: { score: 0 },
              seed: {
                sourceGame: {
                  id: 2,
                  scheduled: "Best of 3",
                  name: "9",
                  sides: {
                    home: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "5",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: null,
                                rank: 1,
                                displayName: round2 ? round2[0].username : players[8].username
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "1",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: players[0].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: players[1].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round2 ? round2[1].username : ""
                              }
                            }
                          }
                        },
                        rank: 1,
                        displayName: round3 ? round3[0].username : ""
                      }
                    },
                    visitor: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "6",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: null,
                                rank: 7,
                                displayName: round2 ? round2[2].username : players[9].username
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "2",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 7,
                                        displayName: players[2].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 8,
                                        displayName: players[3].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round2 ? round2[3].username : ""
                              }
                            }
                          }
                        },
                        rank: 1,
                        displayName: round3 ? round3[1].username : ""
                      }
                    }
                  }
                },
                rank: 1,
                displayName: round4 ? round4[0].username : ""
              }
            },
            visitor: {
              score: { score: 0 },
              seed: {
                sourceGame: {
                  id: 2,
                  scheduled: "Best of 3",
                  name: "10",
                  sides: {
                    home: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "7",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: null,
                                rank: 7,
                                displayName: round2 ? round2[4].username : players[10].username
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "3",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: players[4].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: players[5].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round2 ? round2[5].username : ""
                              }
                            }
                          },
                        },
                        rank: 1,
                        displayName: round3 ? round3[2].username : ""
                      }
                    },
                    visitor: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "8",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: null,
                                rank: 7,
                                displayName: round2 ? round2[6].username : players[11].username
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "4",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 7,
                                        displayName: players[6].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 8,
                                        displayName: players[7].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round2 ? round2[7].username : ""
                              }
                            }
                          },
                        },
                        rank: 1,
                        displayName: round3 ? round3[3].username : ""
                      }
                    }
                  }
                },
                rank: 1,
                displayName: round4 ? round4[1].username : ""
              }
            }
          }
        }
        return (
          <Bracket game={structure12} topText={({scheduled}) => new String(scheduled)} />
        );

      case 11:
        const structure11 = {
          id: 1,
          scheduled: "Best of 5",
          name: "10",
          sides: {
            home: {
              score: { score: 0 },
              seed: {
                sourceGame: {
                  id: 2,
                  scheduled: "Best of 3",
                  name: "8",
                  sides: {
                    home: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "4",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: null,
                                rank: 1,
                                displayName: round2 ? round2[0].username : players[6].username
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "1",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: players[0].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: players[1].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round2 ? round2[1].username : ""
                              }
                            }
                          }
                        },
                        rank: 1,
                        displayName: round3 ? round3[0].username : ""
                      }
                    },
                    visitor: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "5",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: null,
                                rank: 7,
                                displayName: round2 ? round2[2].username : players[7].username
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: null,
                                rank: 8,
                                displayName: round2 ? round2[3].username : players[8].username
                              }
                            }
                          }
                        },
                        rank: 1,
                        displayName: round3 ? round3[1].username : ""
                      }
                    }
                  }
                },
                rank: 1,
                displayName: round4 ? round4[0].username : ""
              }
            },
            visitor: {
              score: { score: 0 },
              seed: {
                sourceGame: {
                  id: 2,
                  scheduled: "Best of 3",
                  name: "9",
                  sides: {
                    home: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "6",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: null,
                                rank: 7,
                                displayName: round2 ? round2[4].username : players[9].username
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "2",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: players[2].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: players[3].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round2 ? round2[5].username : ""
                              }
                            }
                          },
                        },
                        rank: 1,
                        displayName: round3 ? round3[2].username : ""
                      }
                    },
                    visitor: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "7",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: null,
                                rank: 7,
                                displayName: round2 ? round2[6].username : players[10].username
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "3",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 7,
                                        displayName: players[4].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 8,
                                        displayName: players[5].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round2 ? round2[7].username : ""
                              }
                            }
                          },
                        },
                        rank: 1,
                        displayName: round3 ? round3[3].username : ""
                      }
                    }
                  }
                },
                rank: 1,
                displayName: round4 ? round4[1].username : ""
              }
            }
          }
        }
        return (
          <Bracket game={structure11} topText={({scheduled}) => new String(scheduled)} />
        );

      case 10:
        const structure10 = {
          id: 1,
          scheduled: "Best of 5",
          name: "9",
          sides: {
            home: {
              score: { score: 0 },
              seed: {
                sourceGame: {
                  id: 2,
                  scheduled: "Best of 3",
                  name: "7",
                  sides: {
                    home: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "3",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: null,
                                rank: 1,
                                displayName: round2 ? round2[0].username : players[4].username
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "1",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: players[0].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: players[1].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round2 ? round2[1].username : ""
                              }
                            }
                          }
                        },
                        rank: 1,
                        displayName: round3 ? round3[0].username : ""
                      }
                    },
                    visitor: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "4",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: null,
                                rank: 7,
                                displayName: round2 ? round2[2].username : players[5].username
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: null,
                                rank: 8,
                                displayName: round2 ? round2[3].username : players[6].username
                              }
                            }
                          }
                        },
                        rank: 1,
                        displayName: round3 ? round3[1].username : ""
                      }
                    }
                  }
                },
                rank: 1,
                displayName: round4 ? round4[0].username : ""
              }
            },
            visitor: {
              score: { score: 0 },
              seed: {
                sourceGame: {
                  id: 2,
                  scheduled: "Best of 3",
                  name: "8",
                  sides: {
                    home: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "5",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: null,
                                rank: 7,
                                displayName: round2 ? round2[4].username : players[7].username
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "2",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: players[2].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: players[3].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round2 ? round2[5].username : ""
                              }
                            }
                          },
                        },
                        rank: 1,
                        displayName: round3 ? round3[2].username : ""
                      }
                    },
                    visitor: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "6",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: null,
                                rank: 7,
                                displayName: round2 ? round2[6].username : players[8].username
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: null,
                                rank: 8,
                                displayName: round2 ? round2[7].username : players[9].username
                              }
                            }
                          },
                        },
                        rank: 1,
                        displayName: round3 ? round3[3].username : ""
                      }
                    }
                  }
                },
                rank: 1,
                displayName: round4 ? round4[1].username : ""
              }
            }
          }
        }
        return (
          <Bracket game={structure10} topText={({scheduled}) => new String(scheduled)} />
        );

      case 9:
        const structure9 = {
          id: 1,
          scheduled: "Best of 5",
          name: "8",
          sides: {
            home: {
              score: { score: 0 },
              seed: {
                sourceGame: {
                  id: 2,
                  scheduled: "Best of 3",
                  name: "6",
                  sides: {
                    home: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "2",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: null,
                                rank: 7,
                                displayName: round2 ? round2[0].username : players[2].username
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: {
                                  id: 4,
                                  scheduled: "Best of 3",
                                  name: "1",
                                  sides: {
                                    home: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: players[0].username
                                      }
                                    },
                                    visitor: {
                                      score: { score: 0 },
                                      seed: {
                                        sourceGame: null,
                                        rank: 1,
                                        displayName: players[1].username
                                      }
                                    }
                                  }
                                },
                                rank: 1,
                                displayName: round2 ? round2[1].username : ""
                              }
                            }
                          }
                        },
                        rank: 1,
                        displayName: round3 ? round3[0].username : ""
                      }
                    },
                    visitor: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "3",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: null,
                                rank: 3,
                                displayName: round2 ? round2[2].username : players[3].username
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: null,
                                rank: 4,
                                displayName: round2 ? round2[3].username : players[4].username
                              }
                            }
                          }
                        },
                        rank: 1,
                        displayName: round3 ? round3[1].username : ""
                      }
                    }
                  }
                },
                rank: 1,
                displayName: round4 ? round4[0].username : ""
              }
            },
            visitor: {
              score: { score: 0 },
              seed: {
                sourceGame: {
                  id: 2,
                  scheduled: "Best of 3",
                  name: "7",
                  sides: {
                    home: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "4",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: null,
                                rank: 7,
                                displayName: round2 ? round2[4].username : players[5].username
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: null,
                                rank: 7,
                                displayName: round2 ? round2[5].username : players[6].username
                              }
                            }
                          },
                        },
                        rank: 1,
                        displayName: round3 ? round3[2].username : ""
                      }
                    },
                    visitor: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "5",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: null,
                                rank: 7,
                                displayName: round2 ? round2[6].username : players[7].username
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: null,
                                rank: 8,
                                displayName: round2 ? round2[7].username : players[8].username
                              }
                            }
                          },
                        },
                        rank: 1,
                        displayName: round3 ? round3[3].username : ""
                      }
                    }
                  }
                },
                rank: 1,
                displayName: round4 ? round4[1].username : ""
              }
            }
          }
        }
        return (
          <Bracket game={structure9} topText={({scheduled}) => new String(scheduled)} />
        );

      case 8:
        const structure8 = {
          id: 1,
          scheduled: "Best of 5",
          name: "7",
          sides: {
            home: {
              score: { score: 0 },
              seed: {
                sourceGame: {
                  id: 2,
                  scheduled: "Best of 3",
                  name: "5",
                  sides: {
                    home: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "1",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: null,
                                rank: 1,
                                displayName: round1[0].username
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: null,
                                rank: 2,
                                displayName: round1[1].username
                              }
                            }
                          }
                        },
                        rank: 1,
                        displayName: round2 ? round2[0].username : ""
                      }
                    },
                    visitor: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "2",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: null,
                                rank: 3,
                                displayName: round1[2].username
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: null,
                                rank: 4,
                                displayName: round1[3].username
                              }
                            }
                          }
                        },
                        rank: 1,
                        displayName: round2 ? round2[1].username : ""
                      }
                    }
                  }
                },
                rank: 1,
                displayName: round3 ? round3[0].username : ""
              }
            },
            visitor: {
              score: { score: 0 },
              seed: {
                sourceGame: {
                  id: 2,
                  scheduled: "Best of 3",
                  name: "6",
                  sides: {
                    home: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "3",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: null,
                                rank: 7,
                                displayName: round1[4].username
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: null,
                                rank: 7,
                                displayName: round1[5].username
                              }
                            }
                          },
                        },
                        rank: 1,
                        displayName: round2 ? round2[2].username : ""
                      }
                    },
                    visitor: {
                      score: { score: 0 },
                      seed: {
                        sourceGame: {
                          id: 3,
                          scheduled: "Best of 3",
                          name: "4",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: null,
                                rank: 7,
                                displayName: round1[6].username
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: null,
                                rank: 8,
                                displayName: round1[7].username
                              }
                            }
                          },
                        },
                        rank: 1,
                        displayName: round2 ? round2[3].username : ""
                      }
                    }
                  }
                },
                rank: 1,
                displayName: round3 ? round3[1].username : ""
              }
            }
          }
        }
        return (
          <Bracket game={structure8} topText={({scheduled}) => new String(scheduled)} />
        );

      default:
        return (
          <div>Sorry! A tournament of this size is not yet supported.</div>
        ); 
    };
  };
};

export default BracketGenerator;