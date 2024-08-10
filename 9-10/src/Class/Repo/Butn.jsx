import React, { Component } from "react";

class Butn extends Component {
    render() {
        const { href, name, creation, update } = this.props;

        return (
            <a href={href}>
                <button>
                    <h4>{name}</h4>
                    <p>creation date: {creation}</p>
                    <p>last update: {update}</p>
                </button>
            </a>
        );
    }
}

export default Butn;
