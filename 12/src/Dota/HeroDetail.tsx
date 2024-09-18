import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import style from "./Style/HeroDetail.module.css"
import {useSelector, useDispatch} from "react-redux";
import {RootState, AppDispatch} from "../store";
import { fetchHeroes } from '../thunk/winRateSlice';

interface Hero {
  id: number;
  localized_name: string;
  attack_type: string;
  primary_attr: string;
  base_str: number;
  str_gain: number;
  base_health: number;
  base_agi: number;
  agi_gain: number;
  move_speed: number;
  base_int: number;
  int_gain: number;
  base_mana: number;
  attack_rate: number;
  base_attack_min: number;
  base_attack_max: number;
  attack_range: number;
  projectile_speed: number;
  base_armor: number;
  pro_win: number;
  pro_pick: number;
}

const HeroDetails = () => {
  const { id } = useParams<{id: string}>();
  const [hero, setHero] = useState<Hero | undefined>(undefined);

  const {items, loading, error} = useSelector((state: RootState) => state.heroes);
	const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchHeroes())
    setHero(items.find(hero => hero.id === parseInt(id || '0')));
  }, [dispatch]);

  if (error) return <p>{error}</p>;
  if (loading) return <p>Loading...</p>
  if (!hero) return <p>Герой не найден</p>;

  return (
    <div>
      <h1>{hero.localized_name}</h1>
      <h2>Информация о герое</h2>
      <div className={style.hero_inf}>
        <p><strong>Тип атаки:</strong> {hero.attack_type}</p>
        <p><strong>Основной атрибут:</strong> {hero.primary_attr.toUpperCase()}</p>
        <p><strong style={{color: "red"}}>Сила:</strong> {hero.base_str} + {hero.str_gain} за уровень</p>
        <p><strong>HP:</strong> {hero.base_health}</p>
        <p><strong style={{color: "green"}}>Ловкость:</strong> {hero.base_agi} + {hero.agi_gain} за уровень</p>
        <p><strong>Скорость перемещения:</strong> {hero.move_speed}</p>
        <p><strong style={{color: "blue"}}>Интеллект:</strong> {hero.base_int} + {hero.int_gain} за уровень</p>
        <p><strong>Mana:</strong> {hero.base_mana}</p>
        <p><strong>Скорость атаки:</strong> {hero.attack_rate} сек/атака</p>
        <p><strong>Минимальный урон:</strong> {hero.base_attack_min}</p>
        <p><strong>Максимальный урон:</strong> {hero.base_attack_max}</p>
        <p><strong>Дальность атаки:</strong> {hero.attack_range}</p>
        <p><strong>Скорость снаряда:</strong> {hero.projectile_speed}</p>
        <p><strong>Броня:</strong> {hero.base_armor}</p>
      </div>

        <h2>Статистика про сцены</h2>
        <div className={style.pro_stat}>
            <p><strong>Победы: {hero.pro_win}</strong></p>
            <p><strong>Всего игр: {hero.pro_pick}</strong></p>
            <p><strong>Винрейт:</strong> {((hero.pro_win / hero.pro_pick) * 100).toFixed(2)}%</p>
        </div>
    </div>
  );
};

export default HeroDetails;
