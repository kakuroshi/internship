import React from "react";
import Search from './Functional/Search.jsx'
import Profile from './Functional/Profile.jsx'
import Repos from './Functional/Repos/Repos.jsx'

const Comp = (props) => {
	return (
		<section className="all">
			<hr />
			<Search />
			<hr style={props.nick ? { display: "block" } : { display: "none" }} />
			{props.nick ? <Profile nick={props.nick} /> : null}
			<hr style={props.nick ? { display: "block" } : { display: "none" }} />
			{props.nick ? <Repos nick={props.nick} /> : null}
		</section>
	);
};

export default Comp;