import React from 'react';
import Button from './Button';
import '../styles/ButtonPanel.css';

const handleClick = (props, text) => {
  return props.clickHandler(text);
};

const ButtonPanel = () => (
  <div id="button-panel">
    <div>
      <Button clickHandler={handleClick} text="AC" color="#e0e0e0" />
      <Button clickHandler={handleClick} text="+/-" color="#e0e0e0" />
      <Button clickHandler={handleClick} text="%" color="#e0e0e0" />
      <Button clickHandler={handleClick} text="÷" />
    </div>
    <div>
      <Button clickHandler={handleClick} text="7" color="#e0e0e0" />
      <Button clickHandler={handleClick} text="8" color="#e0e0e0" />
      <Button clickHandler={handleClick} text="9" color="#e0e0e0" />
      <Button clickHandler={handleClick} text="x" />
    </div>
    <div>
      <Button clickHandler={handleClick} text="4" color="#e0e0e0" />
      <Button clickHandler={handleClick} text="5" color="#e0e0e0" />
      <Button clickHandler={handleClick} text="6" color="#e0e0e0" />
      <Button clickHandler={handleClick} text="-" />
    </div>
    <div>
      <Button clickHandler={handleClick} text="1" color="#e0e0e0" />
      <Button clickHandler={handleClick} text="2" color="#e0e0e0" />
      <Button clickHandler={handleClick} text="3" color="#e0e0e0" />
      <Button clickHandler={handleClick} text="+" />
    </div>
    <div>
      <Button clickHandler={handleClick} text="0" color="#e0e0e0" wide />
      <Button clickHandler={handleClick} text="." color="#e0e0e0" />
      <Button clickHandler={handleClick} text="=" />
    </div>
  </div>
);

export default ButtonPanel;
