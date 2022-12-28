import React, { Component } from 'react';
import './Counter.css';
import Controls from '../Controls/Controls';
import Value from '../Value/Value';

class Counter extends Component {
  // Дефолтне значення для initialValue, якщо в App нічого не передасться
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    //
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    const { value } = this.state;
    return (
      <div className="Counter">
        <Value value={value} />

        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
