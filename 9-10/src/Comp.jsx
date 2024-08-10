import React from "react";
import Search from './Component/Search.jsx'
import Profile from './Component/Profile.jsx'
import Repos from './Component/Repos/Repos.jsx'

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