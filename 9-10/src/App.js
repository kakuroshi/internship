import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Cl from "./Cl.jsx";
import Comp from "./Comp.jsx";
import { changeNick } from "./data.js";

function App(props) {
	return (
		<Router>
			<div className="links">
				<NavLink
					to="/Component"
					style={({ isActive }) => ({
						color: isActive ? "rgb(121, 169, 167)" : "white",
					})}
          onClick={() => changeNick(null)}>
					Компонентный подход
				</NavLink>

				<NavLink
					to="/Class"
					style={({ isActive }) => ({
						color: isActive ? "rgb(121, 169, 167)" : "white",
					})}
          onClick={() => changeNick(null)}>
					Классовый подход
				</NavLink>
			</div>

			<Routes>
				<Route path="/Component" element={<Comp nick={props.nick} />} />
				<Route path="/Class" element={<Cl nick={props.nick} />} />
			</Routes>
		</Router>
	);
}

export default App;
