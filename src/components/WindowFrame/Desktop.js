import "./Desktop.css";

import File from "./File";

const Desktop = ({ dimensions, handleClick, files, selected }) => {
	const style = {
		display: "grid",
		gridAutoFlow: "column",
		gridTemplateColumns: `repeat(${dimensions[0]}, 80px)`,
		gridTemplateRows: `repeat(${dimensions[1]}, 80px)`,
	};

	return (
		<div className="desktop-container" style={style}>
			{files.map((file) => {
				return (
					<File
						key={file.id}
						file={file}
						handleClick={handleClick}
						selected={selected}
					/>
				)
			})}
		</div>
	);
};

export default Desktop;
