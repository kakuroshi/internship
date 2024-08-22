import React, { Component } from 'react';
import Reps from './Reps';

class Reposit extends Component {
    render() {
        return (
            <section className='repos'>
                <h2>Repositories:</h2>
                <Reps nick={this.props.nick} />
            </section>
        );
    }
}

export default Reposit;
