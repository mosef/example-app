import React, { useReducer } from 'react';
import Tile from './Tiles';

export default function Map() {
  const state = {
    turn: true,
    tiles: [
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine'
    ]
  };
  function reducer(state, action) {
    switch (action.type) {
      case 'setTurn':
        return {
          ...state,
          turn: action.data
        };

      default:
        return state;
    }
  }
  const [{ turn, tiles }, dispatch] = useReducer(reducer, state);

  return (
    <div className="grid-container">
      <div className="grid">
        {tiles.map(tile => (
          <div className={`grid-item ${tile}`}>
            <Tile turn={turn} dispatch={dispatch} />
          </div>
        ))}
      </div>
    </div>
  );
}
