import "./Folder.css";

import { useRef } from "react";

import { useFolderMove } from "hooks/useFolderMove";

const Folder = ({ file, closeFolder, maxWidth, maxHeight }) => {
	const ref = useRef(null);
	const [offset, handleMoveMouseDown, handleMoveMouseUp, handleMoveMouseMove] = useFolderMove(ref);

	const style = {
		position: "absolute",
		width: "250px",
		height: `250px`,
		top: `${offset[0]}px`,
		left: `${offset[1]}px`,
	};

	return (
		<section ref={ref} className="folder-explorer" style={style}>
			<div className="folder-explorer-header" onMouseMove={handleMoveMouseMove} onMouseDown={handleMoveMouseDown} onMouseUp={handleMoveMouseUp}>
				<div className="folder-explorer-header-wrapper">
					<div className="folder-explorer-header-title">{file.name}</div>
					<div className="folder-explorer-header-actions">
						<div className="folder-actions">
							<i className="fa-solid fa-window-minimize"></i>
						</div>
						<div className="folder-actions">
							<i className="fa-regular fa-square"></i>
						</div>
						<div className="folder-actions" onClick={(e) => closeFolder(file.id)}>
							<i className="fa-solid fa-x"></i>
						</div>
					</div>
				</div>
			</div>
			<div
				className="folder-explorer-size-change top-left"
				style={{
					position: "absolute",
					top: "0",
					left: "0"
				}}
			></div>
			<div
				className="folder-explorer-size-change top-right"
				style={{
					position: "absolute",
					top: "0",
					right: "0"
				}}
			></div>
			<div
				className="folder-explorer-size-change bottom-left"
				style={{
					position: "absolute",
					bottom: "0",
					left: "0"
				}}
			></div>
			<div
				className="folder-explorer-size-change bottom-right"
				style={{
					bottom: "0",
					right: "0"
				}}
			></div>
		</section>
	);
};

export default Folder;
