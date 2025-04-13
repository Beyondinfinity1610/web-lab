import React, { Component } from 'react';

class LifecycleTracker extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    console.log('Constructor: Component created');
  }

  componentDidMount() {
    console.log('Mounted: Component is on screen');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Updated:', prevState, this.state);
  }

  componentWillUnmount() {
    console.log('Unmounting: Component will be removed');
  }

  increaseCounter = () => {
    this.setState(prev => ({ counter: prev.counter + 1 }));
  };

  render() {
    return (
      <div>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.increaseCounter}>Increment</button>
      </div>
    );
  }
}

export default LifecycleTracker;
