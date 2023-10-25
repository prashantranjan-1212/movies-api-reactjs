import React, { Component } from "react";
import "./search-form.css";

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: this.props.searchValue,
    };
  }

  render() {
    return (
      <>
        <div>
          <input
            className="search-box"
            type="search"
            placeholder={this.state.searchValue}
            onSelect={(event) => {
              const inputValue = event.target.value;
              this.setState(
                () => {
                  return {
                    searchValue: inputValue,
                  };
                },
                () => {
                  console.log(this.state.searchValue);
                }
              );
            }}
          ></input>
        </div>
        <div>
          <button
            className="search-button"
            onClick={(event) => {
              window.alert(this.state.searchValue);
            }}
          >
            Search
          </button>
        </div>
      </>
    );
  }
}
