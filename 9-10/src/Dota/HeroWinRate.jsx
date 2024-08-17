import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import style from './Style/HeroWinRate.module.css';

const HeroWinRate = () => {
  const [heroes, setHeroes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHeroWinRates = async () => {
      try {
        const response = await fetch('https://api.opendota.com/api/heroStats');
        if (!response.ok) {
          throw new Error('Ошибка сети');
        }
        const data = await response.json();
        setHeroes(data);
      } catch (err) {
        setError('Ошибка загрузки данных');
      }
    };

    fetchHeroWinRates();
  }, []);

  if (error) return <p>{error}</p>;

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
          {heroes.map(hero => (
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
