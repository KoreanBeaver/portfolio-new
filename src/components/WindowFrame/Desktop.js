import "./Desktop.css";

import { forwardRef, useImperativeHandle } from "react";

import File from "./File";

const Desktop = forwardRef(
	({ dimensions, handleClick, files, selected }, ref) => {
		const style = {
			display: "grid",
			gridAutoFlow: "column",
			gridTemplateColumns: `repeat(${dimensions[0]}, 80px)`,
			gridTemplateRows: `repeat(${dimensions[1]}, 80px)`,
		};

		return (
			<div className="desktop-container" style={style} ref={ref}>
				{files.map((file, idx) => {
					return (
						<File
							key={file.id + idx}
							file={file}
							handleClick={handleClick}
							selected={selected}
						/>
					);
				})}
			</div>
		);
	}
);

export default Desktop;
