import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Routes, NavLink} from "react-router-dom";
import Cl from "./Cl.jsx";
import Comp from "./Func.jsx";
import {changeNick} from "./data.js";
import Menu from "./menu-icon-PNG-1.webp";
import {useState} from "react";
import Calculator from "./Calculator.jsx";
import HeroWinRate from "./Dota/HeroWinRate.jsx";
import HeroDetails from "./Dota/HeroDetail.jsx";

function App(props) {
	const [flag, setFlag] = useState(0);
	const [homeP, setHome] = useState(0)

	const clickMenu = () => {
		if (flag === 0) {
			setFlag(1);
		} else setFlag(0);
	};

	return (
		<Router>
			<span className="menu-img_box" style={flag === 0 ? {display: "flex"} : {display: "none"}}>
				<img className="menu-img" src={Menu} alt="no menu img" onClick={clickMenu} />
			</span>

			<div className="menu" style={flag === 1 ? {display: "flex"} : {display: "none"}}>
				<button className="escMenu" style={flag === 1 ? {display: "block"} : {display: "none"}} onClick={clickMenu}>
					<p>Close menu</p>
				</button>

				<div className="menu-el">
					<NavLink onClick={() => setHome(1)} to="/" style={({isActive}) => ({color: isActive ? "rgb(121, 169, 167)" : "white"})}>
						Home
					</NavLink>

					<NavLink onClick={() => setHome(0)} to="/Calc" style={({isActive}) => ({color: isActive ? "rgb(121, 169, 167)" : "white"})}>
						Calculator
					</NavLink>

					<NavLink onClick={() => setHome(0)} to="/Dota" style={({isActive}) => ({color: isActive ? "rgb(121, 169, 167)" : "white"})}>
						Dota win rate
					</NavLink>
				</div>
			</div>

			<div className="links" style={window.location.pathname === "/" || window.location.pathname === "/Class" || window.location.pathname === "/Functional" ? {display: "grid"} : {display: "none"}}>
				<NavLink to="/Functional" style={({isActive}) => ({color: isActive ? "rgb(121, 169, 167)" : "white"})} onClick={() => changeNick(null)}>
					Функциональный подход
				</NavLink>

				<NavLink to="/Class" style={({isActive}) => ({color: isActive ? "rgb(121, 169, 167)" : "white"})} onClick={() => changeNick(null)}>
					Классовый подход
				</NavLink>
			</div>

			<Routes>
				<Route path="/Functional" element={<Comp nick={props.nick} />} />
				<Route path="/Class" element={<Cl nick={props.nick} />} />
				<Route path="/Calc" element={<Calculator />} />
				<Route path="/Dota" element={<HeroWinRate />}></Route>
				<Route path="/Dota/hero/:id" element={<HeroDetails />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
