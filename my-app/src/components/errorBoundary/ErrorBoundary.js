// ErrorBoundary.js
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false };

  componentDidCatch(error) {
    // Handle the error (e.g., log it or display a friendly message)
    console.error('Error caught:', error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Please try again later.</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
