// src/components/Bracket.js
import React from 'react';
//import * as d3 from "d3";
import Heat from './Heat';
import Round from './Round';

export default class Bracket extends React.Component {
  componentDidMount() {
    var singleElimination = {
      "teams": [              // Matchups
        ["Team 1", "Team 2"], // First match
        ["Team 3", "Team 4"]  // Second match
      ],
      "results": [            // List of brackets (single elimination, so only one bracket)
        [                     // List of rounds in bracket
          [                   // First round in this bracket
            [1, 2],           // Team 1 vs Team 2
            [3, 4]            // Team 3 vs Team 4
          ],
          [                   // Second (final) round in single elimination bracket
            [5, 6],           // Match for first place
            [7, 8]            // Match for 3rd place
          ]
        ]
      ]
    };
    $(function() {
      $('#tournament-bracket-1').bracket({
        init: singleElimination
      });
    });
  }
  render() {
    return (
      <div id="tournament-bracket-1"></div>
    );
  }
}
