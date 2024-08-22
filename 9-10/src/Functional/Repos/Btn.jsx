import React from "react";


const Btn = (props) => {
	return (
		<a href={props.href}>
			<button>
                <h4>{props.name}</h4>
                <p>creation date: {props.creation}</p>
                <p>last update: {props.update}</p>
            </button>
		</a>
	);
};

export default Btn;
