import React, { useState } from 'react';
import style from './Calculator.module.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const calculateResult = () => {
    try {
      setResult(eval(input)); 
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <section>

      <div className={style.calculator}>
        <div className={style.display}>
          <input className={style.inp} type="text" value={input} readOnly />
          <div className={style.result}>{result}</div>
        </div>
        <div className={style.buttons}>
          <button className={style.btn} onClick={() => handleClick('7')}>7</button>
          <button className={style.btn} onClick={() => handleClick('8')}>8</button>
          <button className={style.btn} onClick={() => handleClick('9')}>9</button>
          <button className={style.btn} onClick={() => handleClick('/')}>/</button>

          <button className={style.btn} onClick={() => handleClick('4')}>4</button>
          <button className={style.btn} onClick={() => handleClick('5')}>5</button>
          <button className={style.btn} onClick={() => handleClick('6')}>6</button>
          <button className={style.btn} onClick={() => handleClick('*')}>*</button>

          <button className={style.btn} onClick={() => handleClick('1')}>1</button>
          <button className={style.btn} onClick={() => handleClick('2')}>2</button>
          <button className={style.btn} onClick={() => handleClick('3')}>3</button>
          <button className={style.btn} onClick={() => handleClick('-')}>-</button>

          <button className={style.btn} onClick={() => handleClick('0')}>0</button>
          <button className={style.btn} onClick={() => handleClick('.')}>.</button>
          <button className={style.btn} onClick={calculateResult}>=</button>
          <button className={style.btn} onClick={() => handleClick('+')}>+</button>

          <button className={style.btn} onClick={clearInput}>C</button>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
