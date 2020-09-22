import React, { Component } from 'react';
import { Bracket } from 'react-tournament-bracket';

class TournamentStartPage extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { title, hostedBy, participants, date } = this.props;

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

export default TournamentStartPage;


// // Array To List function from Eloquent JS
// let array = [10, 20, 30];
// function arrayToList(arr) {
//     let list = null;
//     let n = arr.length - 1;
//     for(var i = n; i >= 0; i--) {
//         list = { value: arr[i], rest: list };
//     };
//     return list;
// };
// console.log(arrayToList(array));
// // => { value: 10, rest: { value: 20, rest: { value: 30, rest: null } } }


// // Conversion to tournament-bracket
// let participantsArray = [
//   { name: "Cin", main: "Samus" },
//   { name: "Virtuoso", main: "Pit" },
//   { name: "Sille", main: "Link" },
//   { name: "GucciRob", main: "DK" },
//   { name: "Draco", main: "Joker" },
//   { name: "King", main: "Incineroar" },
//   { name: "Apollo", main: "ZSS" },
//   { name: "Kuro", main: "DDD" },
// ];

// function participantsToBracket(array) {
//   let game = null;
//   let n = array.length - 1;

//   for(var i = n; i >= 0; i--) {
//     // game = { code here }
//   };

//   return game;
// };

// NOTES
/*
  X Okay, first really parse out all the properties that are not needed
    `team`  and `sourcePool` were not needed

  - So working backwards.. the first entry to the game/list will be "Player One" and each one consecutively
  Looks like: 
  -----
  sides: {
    home: {
      score: null,
      seed: {
        sourceGame: null,
        sourcePool: null,
        rank: 1,
        displayName: "Player One"
      }
    },
    visitor: {
      score: null,
      seed: {
        sourceGame: null,
        sourcePool: null,
        rank: 2,
        displayName: "Player Two"
      }
    }
  }
  -----

  Iterate forwards through the array of participants,
    for(var i = 0; i <= n; i++) {}
  
    The first participant should be
    home: {
      score: game,
      seed: {
        sourceGame: game,
        rank: i,
        displayName: array[i].username
      }
    }

    The second participant should be
    visitor: {
      score: game,
      seed: {
        sourceGame: game,
        rank: i,
        displayName: array[i].username
      }
    }

    And then they both gotta be nested in sides...
    sides: {
      home: {},
      visitor: {}
    }

    And then sides has to be included in sourceGame
    sourceGame: {
      id: 1,
      scheduled: date,
      name: "A1",
      sides: {
        home: {
          score: null,
          seed: {
            sourceGame: null,
            rank: 1,
            displayName: "Player One"
          }
        },
        visitor: {
          score: null,
          seed: {
            sourceGame: null,
            rank: 2,
            displayName: "Player Two"
          }
        }
      }
    },  

    ..which is a property of a prior seed, which has sourceGame, rank, and another displayName
    seed: {
      sourceGame: {
        id: 1,
        scheduled: date,
        name: "A1",
        sides: {
          home: {
            score: null,
            seed: {
              sourceGame: null,
              rank: 1,
              displayName: "Player One"
            }
          },
          visitor: {
            score: null,
            seed: {
              sourceGame: null,
              rank: 2,
              displayName: "Player Two"
            }
          }
        }
      },
      rank: 1,
      displayName: "Winner of A1"
    }  

    Every seed has a sourceGame, rank, and displayName
    The first one to be produced has a sourceGame of null, since it's the beginning of the bracket
    Every seed is a property of a home or visitor property.

    If array[i] = odd number {
      home: {
      score: null,
      seed: {
        sourceGame: game,
        rank: i,
        displayName: array[i].username
      }
    }
    } else {
      visitor: {
        score: null,
        seed: {
          sourceGame: game,
          rank: i,
          displayName: array[i].username
        }
      }
    }
*/