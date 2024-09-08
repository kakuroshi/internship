import React from "react";
import { useState, useEffect, useRef } from "react";

const ClockF: React.FC = () => {
    const flag = useRef<boolean>(false)

    const [time, setTime] = useState<Date>(new Date())
    const [clck, setClick] = useState<number>(0)
    const [phrase, setPhrase] = useState<string>("Приветик!")

    const phrases: string[] = [
        "Тыкнул!",
        "Пуньк!",
        "ДА ДАВАЙ",
        "ЕЩЕ",
        "Плюс один!"
    ]

    //ComponentDidMount
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date())            
        }, 1000);
        
        //componentWillUnmount
        return () => {
            clearInterval(timer)
            console.log("Пока, часики(((");
        }
    }, [])

    //componentDidUpdate
    useEffect(() => {
        if (flag.current) {
            setPhrase(phrases[Math.floor(Math.random() * phrases.length)])
        } else {
            flag.current = true
        }
    }, [clck])

	return (
		<div>
			<p>Время сейчас: {time.toLocaleTimeString()} </p>

			<div>
				<p>Количество тыков: {clck}</p>
				<button onClick={() => setClick(prevState => prevState + 1)} style={{color: "white"}}>Тык!</button>
				<p>{phrase}</p>
			</div>
		</div>
	);
};

export default ClockF;
