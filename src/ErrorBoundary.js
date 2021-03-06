import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: false, msg: "", stack: null };
  }

  static getDerivedStateFromError() {
    return { error: true };
  }

  componentDidCatch(msg, stack) {
    this.setState({ msg, stack });
  }

  render() {
    return this.state.error ? (
      <div className="Error-area">
        <h1>Ops, an unexpected problem occurred :(</h1>
        <a href="/error-boundary-example/">Reload page</a>
        <details>
          <div className="Error-stack">
            <h2> Error: {this.state.msg} </h2>
            {this.state.stack && this.state.stack.componentStack}
          </div>
        </details>
      </div>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
