import React, { Component } from "react";
import "./counter.style.css";

class Counter extends Component {
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
      React.createElement("h1", { "data-testid": "value" }, this.state.value),
      React.createElement(
        "button",
        {
          onClick: () =>
            this.setState({
              value: this.state.value + 1,
            }),
          className: "counter-button",
          "data-testid": "increment",
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
          "data-testid": "decrement",
        },
        "Decrement"
      )
    );
  }
}

export default Counter;
