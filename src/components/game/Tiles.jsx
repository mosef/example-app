import React, { useState, createContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Tile(props) {
  const { dispatch, turn } = props;
  const [isIcon, setIcon] = useState(false);
  const [isVisible, setVisibility] = useState(false);
  const takeTurn = () => {
    console.log('click');
    setVisibility(true);
    turn ? setIcon(true) : setIcon(false);
    dispatch({
      type: 'setTurn',
      data: !turn
    });
  };
  return (
    <div onClick={() => takeTurn()} className="tile-wrapper">
      {isIcon ? (
        <div className={`iconContainer ${isVisible ? '' : 'hidden'}`}>
          <FontAwesomeIcon icon={['far', 'circle']} size="4x" />
        </div>
      ) : (
        <div className={`iconContainer ${isVisible ? '' : 'hidden'}`}>
          <FontAwesomeIcon icon={['fas', 'times']} size="4x" />
        </div>
      )}
    </div>
  );
}
