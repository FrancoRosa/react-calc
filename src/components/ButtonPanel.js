import React from 'react';
import Button from './Button';
import '../styles/ButtonPanel.css';

const ButtonPanel = () => (
  <div id="button-panel">
    <div>
      <Button text="AC" color="#e0e0e0" />
      <Button text="+/-" color="#e0e0e0" />
      <Button text="%" color="#e0e0e0" />
      <Button text="÷" />
    </div>
    <div>
      <Button text="7" color="#e0e0e0" />
      <Button text="8" color="#e0e0e0" />
      <Button text="9" color="#e0e0e0" />
      <Button text="x" />
    </div>
    <div>
      <Button text="4" color="#e0e0e0" />
      <Button text="5" color="#e0e0e0" />
      <Button text="6" color="#e0e0e0" />
      <Button text="-" />
    </div>
    <div>
      <Button text="1" color="#e0e0e0" />
      <Button text="2" color="#e0e0e0" />
      <Button text="3" color="#e0e0e0" />
      <Button text="+" />
    </div>
    <div>
      <Button text="0" color="#e0e0e0" wide />
      <Button text="." color="#e0e0e0" />
      <Button text="=" />
    </div>
  </div>
);

export default ButtonPanel;
