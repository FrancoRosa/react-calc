import React from 'react';
import Button from './Button';
import '../styles/ButtonPanel.css';

const ButtonPanel = ({clickHandler}) => (
  <div id="button-panel">
    <div>
      <Button clickHandler={clickHandler} text="AC" color="#e0e0e0" />
      <Button clickHandler={clickHandler} text="+/-" color="#e0e0e0" />
      <Button clickHandler={clickHandler} text="%" color="#e0e0e0" />
      <Button clickHandler={clickHandler} text="÷" />
    </div>
    <div>
      <Button clickHandler={clickHandler} text="7" color="#e0e0e0" />
      <Button clickHandler={clickHandler} text="8" color="#e0e0e0" />
      <Button clickHandler={clickHandler} text="9" color="#e0e0e0" />
      <Button clickHandler={clickHandler} text="x" />
    </div>
    <div>
      <Button clickHandler={clickHandler} text="4" color="#e0e0e0" />
      <Button clickHandler={clickHandler} text="5" color="#e0e0e0" />
      <Button clickHandler={clickHandler} text="6" color="#e0e0e0" />
      <Button clickHandler={clickHandler} text="-" />
    </div>
    <div>
      <Button clickHandler={clickHandler} text="1" color="#e0e0e0" />
      <Button clickHandler={clickHandler} text="2" color="#e0e0e0" />
      <Button clickHandler={clickHandler} text="3" color="#e0e0e0" />
      <Button clickHandler={clickHandler} text="+" />
    </div>
    <div>
      <Button clickHandler={clickHandler} text="0" color="#e0e0e0" wide />
      <Button clickHandler={clickHandler} text="." color="#e0e0e0" />
      <Button clickHandler={clickHandler} text="=" />
    </div>
  </div>
);

export default ButtonPanel;
