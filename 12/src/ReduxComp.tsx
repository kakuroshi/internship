import React from "react"
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './store';
import { increment, decrement, multiplication, division } from './reducers/counterSlice';

const ReduxComp = () => {
    const counter = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch<AppDispatch>();

    function getRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    const styleGrid: { display: string; gap: string; "justify-content": string; } = {
        display: "grid",
        gap: "10%",
        "justify-content": "center"
    };

    const styleBtn: { color: string; width: string; height: string; "font-size": string } = {
        color: "white",
        width: "70vh",
        height: "5vh",
        "font-size": "1.5em"
    }

        return (
        <div>
            <h1>Ваше число:</h1>
            <h1>{counter.toFixed(2)}</h1>

            <div style={styleGrid}>
                <button style={styleBtn} onClick={() => dispatch(increment(getRandomNumber(1,10)))}>Прибавить число от 1 до 10</button>
                <button style={styleBtn} onClick={() => dispatch(decrement(getRandomNumber(3, 8)))}>Отнять число от 3 до 8</button>
                <button style={styleBtn} onClick={() => dispatch(multiplication(getRandomNumber(2, 5)))}>Умножить на число от 2 до 5</button>
                <button style={styleBtn} onClick={() => dispatch(division(2))}>Разделить на 2</button>
            </div>
        </div>
    )
}

export default ReduxComp