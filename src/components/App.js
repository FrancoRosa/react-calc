import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';
import '../styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: '0',
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
    window.state = this.state;
  }

  handleClick(buttonName) {
    console.log(buttonName);
    const result = calculate(this.state, buttonName);
    this.setState({
      total: result.total,
      next: result.next,
      operation: result.operation,
    });
  }

  render() {
    return (
      <div className="app">
        <Display text={ this.state.next == null ? this.state.total : this.state.next } />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }

}
export default App;
