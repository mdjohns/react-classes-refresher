import React from 'react';

function CounterFunc() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <h2>Counter (Functional component)</h2>
      <h3>{count}</h3>
      <div style={{ display: 'inline-flex', flexDirection: 'column' }}>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
      <br />
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}

class Counter extends React.Component {
  constructor(args) {
    super(args);
    this.state = {
      count: 0,
    };

    this.handleCounter.bind(this);
  }

  handleCounter(type) {
    const { count: currentCount } = this.state;
    if (type === 'inc') {
      this.setState({ count: currentCount + 1 });
    }
    if (type === 'dec') {
      this.setState({ count: currentCount - 1 });
    }
    if (type === 'reset') {
      this.setState({ count: 0 });
    }
  }

  render() {
    return (
      <>
        <h2>Counter (Class component)</h2>
        <h3>{this.state.count}</h3>
        <div style={{ display: 'inline-flex', flexDirection: 'column' }}>
          <button onClick={() => this.handleCounter('inc')}>+</button>
          <button onClick={() => this.handleCounter('dec')}>-</button>
        </div>
        <br />
        <button onClick={() => this.handleCounter('reset')}>Reset</button>
      </>
    );
  }
}

export { CounterFunc, Counter };
