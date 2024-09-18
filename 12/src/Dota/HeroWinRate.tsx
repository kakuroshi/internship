import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import style from './Style/HeroWinRate.module.css';
import {useSelector, useDispatch} from "react-redux";
import {RootState, AppDispatch} from "../store";
import { fetchHeroes } from '../thunk/winRateSlice';

const HeroWinRate = () => {
  const {items, loading, error} = useSelector((state: RootState) => state.heroes);
	const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchHeroes())
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error}</p>;

  return (
    <div className={style.container}>
      <h1>Данные берутся с про сцены</h1>
      <h3>нажми на персонажа для подробной статистики о нем</h3>
      <table className={style.table}>
        <thead>
          <tr>
            <th>Герой</th>
            <th>Winrate</th>
          </tr>
        </thead>
        <tbody>
          {items.map(hero => (
            <tr key={hero.id}>
              <td>
                <NavLink to={`/Dota/hero/${hero.id}`} className={style.link}>
                  {hero.localized_name}
                </NavLink>
              </td>
              <td>{((hero.pro_win / hero.pro_pick) * 100).toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HeroWinRate;
