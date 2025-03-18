import React, { Component } from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error Boundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#141414] to-[#1F1D1D]">
          <h1 className="text-white text-2xl">
            Что-то пошло не так. Пожалуйста, попробуйте позже
          </h1>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
