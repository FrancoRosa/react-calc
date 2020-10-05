import React from 'react';
import Button from './Button';
import '../styles/ButtonPanel.css';

const ButtonPanel = () => (
  <div id="button-panel">
    <div>
      <Button text="AC" />
      <Button text="+/-" />
      <Button text="%" />
      <Button text="÷" className="operator" />
    </div>
    <div>
      <Button text="7" />
      <Button text="8" />
      <Button text="9" />
      <Button text="X" className="operator" />
    </div>
    <div>
      <Button text="4" />
      <Button text="5" />
      <Button text="6" />
      <Button text="-" className="operator" />
    </div>
    <div>
      <Button text="1" />
      <Button text="2" />
      <Button text="3" />
      <Button text="+" className="operator" />
    </div>
    <div>
      <Button text="0" className="double" />
      <Button text="." />
      <Button text="=" className="operator"/>
    </div>

  </div>
);

export default ButtonPanel;
