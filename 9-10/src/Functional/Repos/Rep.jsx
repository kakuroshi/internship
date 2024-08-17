import React from 'react';
import style from './Style/Rep.module.css';
import Btn from './Btn';
import useFetch from './useFetch';

const Rep = (props) => {
    const { repos, error } = useFetch(props.nick);

    if (error) {
        console.log(error);
    }
    
    return (
        <div className={style.repos_first}>
            <div className={style.repos_f}>
                {repos.map((e, i) => (
                    <Btn
                        key={i}
                        name={e.name}
                        href={e.clone_url}
                        creation={new Date(e.created_at).toLocaleString("ru-RU")}
                        update={new Date(e.updated_at).toLocaleString("ru-RU")}
                    />
                ))}
            </div>
        </div>
    );
};

export default Rep;
