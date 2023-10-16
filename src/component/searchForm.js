import React, { Component } from 'react';
import './search-form.css'

export default class SearchForm extends Component {
    constructor() {
        super();

        this.state = {
            searchValue: ""
        }
    }


    render() {
        return (
            <div>
                <div>
                    <input className='search-box' type='search' placeholder='search' onSelect={(event) => {
                        const inputValue = event.target.value;
                        this.setState(
                            () => {
                                return {
                                    searchValue: inputValue,
                                }
                            },
                            () => {
                                console.log(this.state.searchValue);
                            }
                        )
                    }}>
                    </input>
                </div>
                <div>
                    <button className='search-button' onClick={(event) => {
                            window.alert(this.state.searchValue);
                        }
                    }>Search</button>
                </div>
            </div>
        );
    }
}