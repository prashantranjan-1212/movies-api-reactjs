import React, { Component } from "react";
import "../App.css";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.initialValue,
    };
  }

  render() {
    return React.createElement(
      "div",
      "null",
      React.createElement("h1", null, this.state.value),
      React.createElement(
        "button",
        {
          onClick: () =>
            this.setState({
              value: this.state.value + 1,
            }),
          className: "counter-button",
        },
        "Increment"
      ),
      React.createElement(
        "button",
        {
          onClick: () =>
            this.setState({
              value: this.state.value - 1,
            }),
          className: "counter-button",
        },
        "Decrement"
      )
    );
  }
}
