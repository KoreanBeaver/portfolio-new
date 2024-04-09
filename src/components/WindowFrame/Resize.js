import "./Resize.css";

const Resize = ({ handleRMD, handleRMM, handleRMU, isResizing }) => {
	return (
		<>
			<div
				className="folder-explorer-resize top-left"
				id="top-left"
				onMouseDown={handleRMD}
				onMouseMove={handleRMM}
				onMouseUp={handleRMU}
				onMouseLeave={handleRMU}
				style={{
					top: `${isResizing === "top-left" ? "-40px" : "-10px"}`,
					left: `${isResizing === "top-left" ? "-40px" : "-10px"}`,
					padding: `${isResizing === "top-left" ? "30px" : "0px"}`,
					zIndex: `${isResizing === "top-left" ? "100" : "inherit"}`,
				}}
			></div>
			<div
				className="folder-explorer-resize top-right"
				id="top-right"
				onMouseDown={handleRMD}
				onMouseMove={handleRMM}
				onMouseUp={handleRMU}
				onMouseLeave={handleRMU}
				style={{
					top: `${isResizing === "top-right" ? "-40px" : "-10px"}`,
					right: `${isResizing === "top-right" ? "-40px" : "-10px"}`,
					padding: `${isResizing === "top-right" ? "30px" : "0px"}`,
					zIndex: `${isResizing === "top-right" ? "100" : "inherit"}`,
				}}
			></div>
			<div
				className="folder-explorer-resize bottom-left"
				id="bottom-left"
				onMouseDown={handleRMD}
				onMouseMove={handleRMM}
				onMouseUp={handleRMU}
				onMouseLeave={handleRMU}
				style={{
					bottom: `${isResizing === "bottom-left" ? "-40px" : "-10px"}`,
					left: `${isResizing === "bottom-left" ? "-40px" : "-10px"}`,
					padding: `${isResizing === "bottom-left" ? "30px" : "0px"}`,
					zIndex: `${isResizing === "bottom-left" ? "100" : "inherit"}`,
				}}
			></div>
			<div
				className="folder-explorer-resize bottom-right"
				id="bottom-right"
				onMouseDown={handleRMD}
				onMouseMove={handleRMM}
				onMouseUp={handleRMU}
				onMouseLeave={handleRMU}
				style={{
					bottom: `${isResizing === "bottom-right" ? "-40px" : "-10px"}`,
					right: `${isResizing === "bottom-right" ? "-40px" : "-10px"}`,
					padding: `${isResizing === "bottom-right" ? "30px" : "0px"}`,
					zIndex: `${isResizing === "bottom-right" ? "100" : "inherit"}`,
				}}
			></div>
			<div
				className="folder-explorer-resize-side left"
				id="left"
				onMouseDown={handleRMD}
				onMouseMove={handleRMM}
				onMouseUp={handleRMU}
				onMouseLeave={handleRMU}
				style={{
					top: `${isResizing === "left" ? "-30px" : ""}`,
					left: `${isResizing === "left" ? "-30px" : ""}`,
					padding: `${isResizing === "left" ? "30px" : "0px"}`,
					zIndex: `${isResizing === "left" ? "100" : "inherit"}`,
				}}
			></div>
			<div
				className="folder-explorer-resize-side top"
				id="top"
				onMouseDown={handleRMD}
				onMouseMove={handleRMM}
				onMouseUp={handleRMU}
				onMouseLeave={handleRMU}
				style={{
					top: `${isResizing === "top" ? "-30px" : ""}`,
					left: `${isResizing === "top" ? "-30px" : ""}`,
					padding: `${isResizing === "top" ? "30px" : "0px"}`,
					zIndex: `${isResizing === "top" ? "100" : "inherit"}`,
				}}
			></div>
			<div
				className="folder-explorer-resize-side right"
				id="right"
				onMouseDown={handleRMD}
				onMouseMove={handleRMM}
				onMouseUp={handleRMU}
				onMouseLeave={handleRMU}
				style={{
					top: `${isResizing === "right" ? "-30px" : ""}`,
					right: `${isResizing === "right" ? "-30px" : ""}`,
					padding: `${isResizing === "right" ? "30px" : "0px"}`,
					zIndex: `${isResizing === "right" ? "100" : "inherit"}`,
				}}
			></div>
			<div
				className="folder-explorer-resize-side bottom"
				id="bottom"
				onMouseDown={handleRMD}
				onMouseMove={handleRMM}
				onMouseUp={handleRMU}
				onMouseLeave={handleRMU}
				style={{
					bottom: `${isResizing === "bottom" ? "-30px" : ""}`,
					left: `${isResizing === "bottom" ? "-30px" : ""}`,
					padding: `${isResizing === "bottom" ? "30px" : "0px"}`,
					zIndex: `${isResizing === "bottom" ? "100" : "inherit"}`,
				}}
			></div>
		</>
	);
};

export default Resize;
