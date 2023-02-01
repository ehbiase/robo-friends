import React, { Component } from "react";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: error });
  }
  render() {
    if (this.state.hasError) {
      return <h2>Opps that's bad , sorry error in the app</h2>;
    } else {
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
