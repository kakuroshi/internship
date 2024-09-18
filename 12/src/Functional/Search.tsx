import React from 'react';
import style from './Style/Search.module.css'
import { useNick } from '../NickProvider';
import render from '../render';

const Search: React.FC = () => {
    const {nickname, setNickname} = useNick()
     
    return(
        <div className={style.search}>
            <input value={nickname} onChange={(e) => {
                setNickname(e.target.value)
            }} className={style.search_inp} type="text" placeholder="enter nickname"/>
			<button 
            onClick={() => {
                render(nickname)
            }} 
            className={style.search_btn}>Search</button>
        </div>
    )
}

export default Search