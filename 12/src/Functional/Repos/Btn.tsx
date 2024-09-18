import React from "react";

interface BtnProps {
	href: string,
	name: string,
	creation: string,
	update: string
}

const Btn: React.FC<BtnProps> = (props) => {
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
