import * as React from 'react';

interface DemoProps {
  message: string;
  x: number;
}

interface DemoState {
  counter: number;
}

class Demo extends React.Component<DemoProps, DemoState> {
  constructor(props: DemoProps) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState((s, p) => {
      return {
        counter: s.counter + 1,
      };
    });
  }

  componentDidMount(): void {
    console.log('componentDidMount');
  }

  componentDidUpdate(
    prevProps: Readonly<DemoProps>,
    prevState: Readonly<DemoState>,
    snapshot?: any
  ): void {
    console.log('componentDidUpdate');
  }

  componentWillUnmount(): void {
    console.log('componentWillUnmount');
  }

  render() {
    return (
      <>
        <h3>Demo Component: {this.state.counter}</h3>
        <button onClick={this.increment}>Increment</button>
        <p>{this.props.message}</p>
        <p>Parent counter: {this.props.x}</p>
      </>
    );
  }
}

export default Demo;
