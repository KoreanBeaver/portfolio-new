import "./Folder.css";

import { useRef } from "react";

import { useFolderMoveResize } from "hooks/useFolderMoveResize";

const Folder = ({ file, closeFolder, maxWidth, maxHeight, idx }) => {
	const ref = useRef(null);
	const [
		offset,
		isDragging,
		isResizing,
		[width, height],
		handleMMD,
		handleMMU,
		handleMMM,
		handleRMD,
		handleRMU,
		handleRMM,
		maximized,
		maximizing,
		handleMaximize,
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
				className="folder-explorer-header-draggable"
				onMouseMove={handleMMM}
				onMouseDown={handleMMD}
				onMouseUp={handleMMU}
				onMouseLeave={handleMMU}
				style={{
					width: `${isDragging ? "calc(100% + 50px)" : "inherit"}`,
					height: `${isDragging ? "100px" : "25px"}`,
					top : `${isDragging ? "-50px" : "0px"}`,
					left: `${isDragging ? "-25px" : "0px"}`,
					zIndex: `${isDragging ? "100" : "inherit"}`,
				}}
			></div>
			<div className="folder-explorer-header">
				<div className="folder-explorer-header-wrapper">
					<div className="folder-explorer-header-title">{file.name}</div>
					<div className="folder-explorer-header-actions">
						<div className="folder-actions folder-actions-minimize"></div>
						<div
							className="folder-actions folder-actions-maximize"
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
					top: `${isResizing ? "-40px" : "-10px"}`,
					left: `${isResizing ? "-40px" : "-10px"}`,
					width: `${isResizing ? "80px" : "20px"}`,
					height: `${isResizing ? "80px" : "20px"}`,
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
					top: `${isResizing ? "-40px" : "-10px"}`,
					right: `${isResizing ? "-40px" : "-10px"}`,
					width: `${isResizing ? "80px" : "20px"}`,
					height: `${isResizing ? "80px" : "20px"}`,
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
					bottom: `${isResizing ? "-40px" : "-10px"}`,
					left: `${isResizing ? "-40px" : "-10px"}`,
					width: `${isResizing ? "80px" : "20px"}`,
					height: `${isResizing ? "80px" : "20px"}`,
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
					bottom: `${isResizing ? "-40px" : "-10px"}`,
					right: `${isResizing ? "-40px" : "-10px"}`,
					width: `${isResizing ? "80px" : "20px"}`,
					height: `${isResizing ? "80px" : "20px"}`,
				}}
			></div>
		</section>
	);
};

export default Folder;
