import React, { useEffect, useState } from 'react';
import dividerDesktop from '../images/pattern-divider-desktop.svg';
import dividerMobile from '../images/pattern-divider-mobile.svg';
import dice from '../images/icon-dice.svg';

export default function Card() {
  const [id, setId] = useState('');
  const [advice, setAdvice] = useState('');

  function handleDice() {
    fetch(`https://api.adviceslip.com/advice`)
      .then((res) => res.json())
      .then((data) => (setId(data.slip.id), setAdvice(data.slip.advice)));
  }

  useEffect(() => {
    handleDice();
  }, []);

  return (
    <div className="card-container">
      <div className="advice-num">Advice #{id}</div>
      <div className="advice">
        <h2>"{advice}"</h2>
      </div>
      <div className="bottom-line">
        <img src={dividerDesktop} className="divider-desktop" alt="Divider" />
        <img src={dividerMobile} className="divider-mobile" alt="Divider" />
      </div>
      <div className="dice-icon" onClick={handleDice}>
        <img src={dice} alt="Dice Icon" />
      </div>
    </div>
  );
}
