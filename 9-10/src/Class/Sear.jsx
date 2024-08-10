import React, { Component } from 'react';
import style from './Style/Search.module.css';
import { changeNick } from '../data';

class Sear extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nck: ''
        };
    }

    handleInputChange = (e) => {
        this.setState({ nck: e.target.value });
    }

    handleButtonClick = () => {
        changeNick(this.state.nck);
    }

    render() {
        return (
            <div className={style.search}>
                <input
                    value={this.state.nck}
                    onChange={this.handleInputChange}
                    className={style.search_inp}
                    type="text"
                    placeholder="enter nickname"
                />
                <button
                    onClick={this.handleButtonClick}
                    className={style.search_btn}
                >
                    Search
                </button>
            </div>
        );
    }
}

export default Sear;
