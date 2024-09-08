import React, { FC } from "react";
import Search from './Functional/Search.tsx'
import Profile from './Functional/Profile.tsx'
import Repos from './Functional/Repos/Repos.tsx'
import ClockF from "./Functional/ClockF.tsx";

interface CompProps {
	nick: string
}

const Comp: FC<CompProps> = (props) => {
	return (
		<section className="all">
			<hr />
			<ClockF />
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