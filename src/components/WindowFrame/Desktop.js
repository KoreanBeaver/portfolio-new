import "./Desktop.css";
import { useState } from "react";

const Desktop = ({ dimensions }) => {
	
	const style = {
		display: "grid",
		gridAutoFlow: "column",
		gridTemplateColumns: `repeat(${dimensions[0]}, 80px)`,
		gridTemplateRows: `repeat(${dimensions[1]}, 80px)`,
	};

	const handleClick = (e) => {

	}

	const handleDoubleClick = (e) => {

	}

	return (
		<div className="desktop-container" style={style}>
			<div className="temp" id="github" onClick={handleClick} onDoubleClick={handleDoubleClick}>
				<i className="desktop-icon devicon-github-original"></i>
				<div>
					<span>Github </span>
					<i className="fa-solid fa-arrow-up-right-from-square"></i>
				</div>
			</div>
			<div className="temp" id="linkedin">
				<i className="desktop-icon devicon-linkedin-plain"></i>
				<div>
					<span>Linkedin </span>
					<i className="fa-solid fa-arrow-up-right-from-square"></i>
				</div>
			</div>
		</div>
	);
};

export default Desktop;
