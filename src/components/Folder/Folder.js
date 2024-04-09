import "./Folder.css";

import { useRef } from "react";

import { useFolderMoveResize } from "hooks/useFolderMoveResize";
import { useDoubleClick } from "hooks/useDoubleClick";
import { useSelected } from "hooks/useSelected";

import FolderContent from "./FolderContent/FolderContent";
import Resize from "./Resize/Resize";

const Folder = ({ file, closeFolder, maxWidth, maxHeight, idx }) => {
	const ref = useRef(null);
	const [
		offset,
		isDragging,
		isResizing,
		dimensions,
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

	// eslint-disable-next-line no-unused-vars
	const [selected, openFolders, filesIdx, files, handleSC, handleDC] =
		useSelected(file.files);

	const style = {
		position: "absolute",
		width: `${dimensions[0]}px`,
		height: `${dimensions[1]}px`,
		top: `${offset[0]}px`,
		left: `${offset[1]}px`,
		cursor: `${isDragging ? "move" : "default"}`,
		borderRadius: `${maximized ? "0" : "5px"}`,
		zIndex: idx + 1,
		transition: `${maximizing ? "all 0.3s" : "none"}`,
	};

	const handleClick = useDoubleClick(handleSC, handleDC);

	return (
		<section ref={ref} className="folder-explorer" style={style}>
			<div
				className="folder-explorer-header-draggable"
				onMouseMove={handleMMM}
				onMouseDown={handleMMD}
				onMouseUp={handleMMU}
				onMouseLeave={handleMMU}
				style={{
					padding: `${isDragging ? "30px" : "0px"}`,
					top: `${isDragging ? "-30px" : "0px"}`,
					left: `${isDragging ? "-30px" : "0px"}`,
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
			<div className="folder-explorer-content">
				<FolderContent
					handleClick={handleClick}
					files={files}
					selected={selected}
					dimensions={dimensions}
				/>
			</div>
			<Resize
				handleRMD={handleRMD}
				handleRMM={handleRMM}
				handleRMU={handleRMU}
				isResizing={isResizing}
			/>
		</section>
	);
};

export default Folder;
