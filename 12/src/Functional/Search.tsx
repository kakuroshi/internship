import React from 'react';
import style from './Style/Search.module.css'
import { useState } from 'react';
import { changeNick } from '../data';

const Search: React.FC = () => {
    const [nck, setNck] = useState<string>('')
     
    return(
        <div className={style.search}>
            <input value={nck} onChange={(e) => {
                setNck(e.target.value)
            }} className={style.search_inp} type="text" placeholder="enter nickname"/>
			<button onClick={() => {
                changeNick(nck)
            }} className={style.search_btn}>Search</button>
        </div>
    )
}

export default Search