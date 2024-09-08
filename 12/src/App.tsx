import React, {useState} from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Routes, NavLink} from "react-router-dom";
import Comp from "./Func";
import Menu from "./menu-icon-PNG-1.webp";
import Calculator from "./Calculator";
import HeroWinRate from "./Dota/HeroWinRate";
import HeroDetails from "./Dota/HeroDetail";

interface AppProps {
	nick: string;
}

const App: React.FC<AppProps> = (props) => {
	const [flag, setFlag] = useState<boolean>(false);

	const clickMenu = () => {
		setFlag((prevFlag) => (prevFlag === false ? true : false));
	};

	const getStyle = ({isActive}: {isActive: boolean}) => ({
		color: isActive ? "rgb(121, 169, 167)" : "white",
	});

	return (
		<Router>
			<span className="menu-img_box" style={flag === false ? {display: "flex"} : {display: "none"}}>
				<img className="menu-img" src={Menu} alt="no menu img" onClick={clickMenu} />
			</span>

			<div className="menu" style={flag === true ? {display: "flex"} : {display: "none"}}>
				<button className="escMenu" style={flag === true ? {display: "block"} : {display: "none"}} onClick={clickMenu}>
					<p>Close menu</p>
				</button>

				<div className="menu-el">
					<NavLink to="/" style={getStyle}>
						Home
					</NavLink>

					<NavLink to="/Calc" style={getStyle}>
						Calculator
					</NavLink>

					<NavLink to="/Dota" style={getStyle}>
						Dota win rate
					</NavLink>
				</div>
			</div>

			<Routes>
				<Route path="/" element={<Comp nick={props.nick} />} />
				{/* // <Route path="/Functional" element={<Comp nick={props.nick} />} /> */}
				<Route path="/Calc" element={<Calculator />} />
				<Route path="/Dota" element={<HeroWinRate />} />
				<Route path="/Dota/hero/:id" element={<HeroDetails />} />
			</Routes>
		</Router>
	);
};

export default App;
