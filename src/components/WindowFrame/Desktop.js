import "./Desktop.css";

const Desktop = ({ dimensions, handleClick, files, selected }) => {
	const style = {
		display: "grid",
		gridAutoFlow: "column",
		gridTemplateColumns: `repeat(${dimensions[0]}, 80px)`,
		gridTemplateRows: `repeat(${dimensions[1]}, 80px)`,
	};

	return (
		<div className="desktop-container" style={style}>
			{/* temporary fill in items*/}
			<div
				className={`temp ${selected === "github" ? "selected" : ""}`}
				id="github"
				onClick={handleClick}
			>
				<i className="desktop-icon devicon-github-original"></i>
				<div>
					<span>Github </span>
					<i className="fa-solid fa-arrow-up-right-from-square"></i>
				</div>
			</div>
			<div
				className={`temp ${selected === "linkedin" ? "selected" : ""}`}
				id="linkedin"
				onClick={handleClick}
			>
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
