import React, { Component } from "react";
import Sear from "./Class/Sear.jsx";
import Prof from "./Class/Prof.jsx";
import Reposit from "./Class/Repo/Reposit.jsx";

class Cl extends Component {

	render() {
		const { nick } = this.props;

		return (
			<section className="all">
				<hr />
				<Sear />
				<hr style={nick ? { display: "block" } : { display: "none" }} />
				{nick ? <Prof nick={nick} /> : null}
				<hr style={nick ? { display: "block" } : { display: "none" }} />
				{nick ? <Reposit nick={nick} /> : null}
			</section>
		);
	}
}

export default Cl;
