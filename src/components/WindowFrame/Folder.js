import "./Folder.css";

import { useRef } from "react";

import { useFolderMoveResize } from "hooks/useFolderMoveResize";

const Folder = ({ file, closeFolder, maxWidth, maxHeight, idx }) => {
	const ref = useRef(null);
	const [
		offset,
		isDragging,
		[width, height],
		handleMMD,
		handleMMU,
		handleMMM,
		handleRMD,
		handleRMU,
		handleRMM,
		maximized,
		maximizing,
		handleMaximize
	] = useFolderMoveResize(ref, maxWidth, maxHeight);

	const style = {
		position: "absolute",
		width: `${width}px`,
		height: `${height}px`,
		top: `${offset[0]}px`,
		left: `${offset[1]}px`,
		cursor: `${isDragging ? "move" : "default"}`,
		borderRadius: `${maximized ? "0" : "5px"}`,
		zIndex: idx + 1,
		transition: `${maximizing ? "all 0.3s" : "none"}`,
	};

	return (
		<section ref={ref} className="folder-explorer" style={style}>
			<div
				className="folder-explorer-header"
				onMouseMove={handleMMM}
				onMouseDown={handleMMD}
				onMouseUp={handleMMU}
				onMouseLeave={handleMMU}
			>
				<div className="folder-explorer-header-wrapper">
					<div className="folder-explorer-header-title">{file.name}</div>
					<div className="folder-explorer-header-actions">
						<div className="folder-actions folder-actions-minimize"></div>
						<div className="folder-actions folder-actions-maximize"
							onClick={handleMaximize}
						></div>
						<div
							className="folder-actions folder-actions-close"
							onClick={(_e) => closeFolder(file.id)}
						></div>
					</div>
				</div>
			</div>
			<div
				className="folder-explorer-size-change top-left"
				id="top-left"
				onMouseDown={handleRMD}
				onMouseMove={handleRMM}
				onMouseUp={handleRMU}
				onMouseLeave={handleRMU}
				style={{
					position: "absolute",
					top: "-10px",
					left: "-10px",
				}}
			></div>

			<div
				className="folder-explorer-size-change top-right"
				id="top-right"
				onMouseDown={handleRMD}
				onMouseMove={handleRMM}
				onMouseUp={handleRMU}
				onMouseLeave={handleRMU}
				style={{
					position: "absolute",
					top: "-10px",
					right: "-10px",
				}}
			></div>
			<div
				className="folder-explorer-size-change bottom-left"
				id="bottom-left"
				onMouseDown={handleRMD}
				onMouseMove={handleRMM}
				onMouseUp={handleRMU}
				onMouseLeave={handleRMU}
				style={{
					position: "absolute",
					bottom: "-10px",
					left: "-10px",
				}}
			></div>
			<div
				className="folder-explorer-size-change bottom-right"
				id="bottom-right"
				onMouseDown={handleRMD}
				onMouseMove={handleRMM}
				onMouseUp={handleRMU}
				onMouseLeave={handleRMU}
				style={{
					bottom: "-10px",
					right: "-10px",
				}}
			></div>
		</section>
	);
};

export default Folder;
