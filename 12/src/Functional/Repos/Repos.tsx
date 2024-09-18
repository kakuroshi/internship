import React from 'react'
import Rep from './Rep'

interface ReposProps {
    nick: string
}

const Repos: React.FC<ReposProps> = (props) => {
    return (
        <section className='repos'>
            <h2>Repositories:</h2>
            <Rep nick={props.nick}></Rep>
        </section>
    )
}

export default Repos