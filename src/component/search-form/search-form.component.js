import React, { Component } from "react";
import "./search-form.style.css";

class SearchForm extends Component {
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
            data-testid="search-input"
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
            data-testid="search-button"
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

export default SearchForm;
