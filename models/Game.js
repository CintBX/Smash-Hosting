const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  bracket: [
    {
      "@id": "15",
      "scheduled": 1592127724000,
      "name": "Cup",
      "sides": {
        "home": {
          "team": null,
          "score": null,
          "seed": {
            "sourceGame": {
              "@id": "20",
              "id": "b6e869cc-e6ad-4151-9186-5df828b45802",
              "scheduled": 1592127724000,
              "name": "C1",
              "gameGroup": null,
              "sides": {
                "home": {
                  "team": null,
                  "score": null,
                  "seed": {
                    "sourceGame": {
                      "@id": "1",
                      "scheduled": 1592127724000,
                      "name": "B1",
                      "sides": {
                        "home": {
                          "team": null,
                          "score": null,
                          "seed": {
                            "sourceGame": {
                              "@id": "1",
                              "scheduled": 1592127724000,
                              "name": "b3",
                              "sides": {
                                "home": {
                                  "team": {
                                    "@id": "11",
                                    "name": "West Salem Panthers"
                                  },
                                  "score": null,
                                },
                                "visitor": {
                                  "team": null,
                                  "score": null,
                                }
                              }
                            },
                            "sourcePool": null,
                            "rank": 2,
                            "displayName": "Winner of A1"
                          }
                        },
                        "visitor": {
                          "team": null,
                          "score": null,
                          "seed": {
                            "sourceGame": null,
                            "sourcePool": null,
                            "rank": 3,
                            "displayName": "Winner of A2"
                          }
                        }
                      }
                    },
                    "sourcePool": null,
                    "rank": 1,
                    "displayName": "Winner of B1"
                  }
                },
                "visitor": {
                  "team": null,
                  "score": null,
                  "seed": {
                    "sourceGame": {
                      "@id": "1",
                      "scheduled": 1592127724000,
                      "name": "B2",
                      "sides": {
                        "home": {
                          "team": {
                            "@ref": "13"
                          },
                          "score": null,
                          "seed": {
                            "sourceGame": null,
                            "sourcePool": {
                              "@ref": "14"
                            },
                            "rank": 2,
                            "displayName": "Winner of A3"
                          }
                        },
                        "visitor": {
                          "team": null,
                          "score": null,
                          "seed": {
                            "sourceGame": null,
                            "sourcePool": {
                              "@ref": "12"
                            },
                            "rank": 3,
                            "displayName": "Winner of A4"
                          }
                        }
                      }
                    },
                    "sourcePool": null,
                    "rank": 1,
                    "displayName": "Winner of B2"
                  }
                }
              },
            },
            "sourcePool": null,
            "rank": 1,
            "displayName": "Winner of C1"
          }
        },
        "visitor": {
          "team": null,
          "score": null,
          "seed": {
            "sourceGame": {
              "@id": "17",
              "id": "5dd25794-429b-4a1b-9926-bca93438a799",
              "scheduled": 1592127724000,
              "name": "C2",
              "sides": {
                "home": {
                    "team": null,
                    "score": null,
                    "seed": {
                        "sourceGame": {
                            "@id": "18",
                            "id": "b43e7160-9a6a-4fef-8d6a-1dfb73473653",
                            "scheduled": 1592127724000,
                            "name": "B3",
                            "sides": {
                                "home": {
                                    "team": null,
                                    "score": null,
                                    "seed": {
                                        "displayName": "Winner of A5"
                                    }
                                },
                                "visitor": {
                                    "team": null,
                                    "score": null,
                                    "seed": {
                                        "displayName": "Winner of A6"
                                    }
                                }
                            },
                        },
                        "sourcePool": null,
                        "rank": 1,
                        "displayName": "Winner of B3"
                    }
                },
                "visitor": {
                  "team": null,
                  "score": null,
                  "seed": {
                    "sourceGame": {
                      "@id": "18",
                      "id": "b43e7160-9a6a-4fef-8d6a-1dfb73473653",
                      "scheduled": 1592127724000,
                      "name": "B4",
                      "sides": {
                        "home": {
                          "team": null,
                          "score": null,
                          "seed": {
                            "sourceGame": {
                              "@id": "18",
                              "id": "b43e7160-9a6a-4fef-8d6a-1dfb73473653",
                              "scheduled": 1592127724000,
                              "name": "B4",
                              "sides": {
                                "home": {
                                  "team": null,
                                  "score": null,
                                  "seed": {
                                    "displayName": "Winner of A7"
                                  }
                                },
                                "visitor": {
                                  "team": null,
                                  "score": null,
                                  "seed": {
                                    "displayName": "Winner of A8"
                                  }
                                }
                              },
                            },
                            "sourcePool": null,
                            "rank": 1,
                            "displayName": "Winner of B4"
                          }
                        },
                        "visitor": {
                          "team": null,
                          "score": null,
                          "seed": {
                            "sourceGame": {
                              "@id": "18",
                              "id": "b43e7160-9a6a-4fef-8d6a-1dfb73473653",
                              "scheduled": 1592127724000,
                              "name": "B4",
                              "sides": {
                                "home": {
                                  "team": null,
                                  "score": null,
                                  "seed": {
                                    "displayName": "Winner of A7"
                                  }
                                },
                                "visitor": {
                                  "team": null,
                                  "score": null,
                                  "seed": {
                                    "displayName": "Winner of A8"
                                  }
                                }
                              },
                            },
                            "sourcePool": null,
                            "rank": 1,
                            "displayName": "Winner of B4"
                          }
                        }
                      },
                    },
                    "sourcePool": null,
                    "rank": 1,
                    "displayName": "Winner of B4"
                  }
                }
              }
            },
            "sourcePool": null,
            "rank": 1,
            "displayName": "Winner of C2"
          }
        }
      }
    }
  ]
});

module.exports = Game = mongoose.model('game', GameSchema);