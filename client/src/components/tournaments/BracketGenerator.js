import React, { Component } from 'react';
import { Bracket } from 'react-tournament-bracket';

class BracketGenerator extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    switch(this.props.size) {
      case 20: {
        const game = {
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
          <div>
            <Bracket game={game} topText={({scheduled}) => new String(scheduled)} />
          </div>
        );
      };


      case 19: {
        const game = {
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
                          scheduled: "Best of 3",
                          name: "13",
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
                          scheduled: "Best of 3",
                          name: "15",
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
          <div>
            <Bracket game={game} topText={({scheduled}) => new String(scheduled)} />
          </div>
        );
      };


      case 18: {
        const game = {
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
                                  scheduled: "Best of 3",
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
                                  name: "10",
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
                                          name: "2",
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
                          scheduled: "Best of 3",
                          name: "14",
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
          <div>
            <Bracket game={game} topText={({scheduled}) => new String(scheduled)} />
          </div>
        );
      };


      case 17: {
        const game = {
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
                                  name: "2",
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
                                  scheduled: "Best of 3",
                                  name: "4",
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
          <div>
            <Bracket game={game} topText={({scheduled}) => new String(scheduled)} />
          </div>
        );
      };


      case 16: {
        const game = {
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
                                  scheduled: "Best of 3",
                                  name: "4",
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
          <div>
            <Bracket game={game} topText={({scheduled}) => new String(scheduled)} />
          </div>
        );
      };


      case 15: {
        const game = {
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
                                displayName: "Seed"
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
                                  scheduled: "Best of 3",
                                  name: "3",
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
                                  scheduled: "Best of 3",
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
            <Bracket game={game} topText={({scheduled}) => new String(scheduled)} />
          </div>
        );
      };


      case 14: {
        const game = {
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
                                displayName: "Seed"
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
                                  scheduled: "Best of 3",
                                  name: "3",
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
                                displayName: "Seed"
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
            <Bracket game={game} topText={({scheduled}) => new String(scheduled)} />
          </div>
        );
      };


      case 13: {
        const game = {
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
                                displayName: "Seed"
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
                                  scheduled: "Best of 3",
                                  name: "3",
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
                                displayName: "Seed"
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
                          name: "9",
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
                                  id: 4,
                                  scheduled: "Best of 3",
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
            <Bracket game={game} topText={({scheduled}) => new String(scheduled)} />
          </div>
        );
      };


      case 12: {
        const game = {
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
                                displayName: "Seed"
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
                                displayName: "Seed"
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
            <Bracket game={game} topText={({scheduled}) => new String(scheduled)} />
          </div>
        );
      };


      case 11: {
        const game = {
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
                          name: "4",
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
                                displayName: "Seed"
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
            <Bracket game={game} topText={({scheduled}) => new String(scheduled)} />
          </div>
        );
      };


      case 10: {
        const game = {
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
                          name: "3",
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
                          name: "4",
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
            <Bracket game={game} topText={({scheduled}) => new String(scheduled)} />
          </div>
        );
      };


      case 9: {
        const game = {
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
                          name: "2",
                          sides: {
                            home: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: null,
                                rank: 3,
                                displayName: "Seed"
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: null,
                                rank: 4,
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
                                rank: 7,
                                displayName: "Seed"
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: null,
                                rank: 7,
                                displayName: "Seed"
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
                          name: "4",
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
            <Bracket game={game} topText={({scheduled}) => new String(scheduled)} />
          </div>
        );
      };


      case 8: {
        const game = {
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
                                displayName: "Seed"
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: null,
                                rank: 4,
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
                                displayName: "Seed"
                              }
                            },
                            visitor: {
                              score: { score: 0 },
                              seed: {
                                sourceGame: null,
                                rank: 7,
                                displayName: "Seed"
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
                          name: "4",
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
            <Bracket game={game} topText={({scheduled}) => new String(scheduled)} />
          </div>
        );
      };


      default:
        return (
          <div>Sorry! A tournament of this size is not yet supported.</div>
        );
      
    };
  };
};

export default BracketGenerator;