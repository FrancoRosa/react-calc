import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';
import '../styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind();
  }

  handleClick(buttonName) {
    const result = calculate(buttonName);
    this.setState({
      total: result.total,
      next: result.next,
      operation: result.operation,
    });
  }

  render() {
    return (
      <div className="app">
        <Display text={this.state.total} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }

}
export default App;
