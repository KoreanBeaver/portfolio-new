import "./WindowFrame.css";
import f from "assets/resources/files.json";

import { useEffect, useState, useRef } from "react";
import { useSelected } from "hooks/useSelected";
import { useResizeWindow } from "hooks/useResizeWindow";
import { useDoubleClick } from "hooks/useDoubleClick";

import Startbar from "./Startbar";
import Desktop from "./Desktop";
import Folder from "./Folder";

const WindowFrame = () => {
	const ref = useRef(null);
	const [width, height] = useResizeWindow();
	const [dimensions, setDimensions] = useState([0, 0]);
	const [
		selected,
		openFolders,
		filesIdx,
		files,
		handleSC,
		handleDC,
		closeFolder,
		handleKP,
	] = useSelected(f);

	const handleDesktopClick = useDoubleClick(handleSC, handleDC);

	useEffect(() => {
		setDimensions([Math.floor(width / 80), Math.floor((height - 40) / 80)]);
	}, [width, height]);

	useEffect(() => {
		const currRef = ref;
		if (currRef && currRef.current) {
			currRef.current.addEventListener("keydown", handleKP);
		}

		return () => {
			if (currRef && currRef.current) {
				currRef.current.removeEventListener("keydown", handleKP);
			}
		};
	}, [ref, handleKP]);

	return (
		<div className="window-frame-container">
			<Desktop
				ref={ref}
				dimensions={dimensions}
				handleClick={handleDesktopClick}
				files={files}
				selected={selected}
			/>
			<Startbar />
			{openFolders.map((folderId, idx) => {
				return (
					<Folder
						key={folderId + idx}
						file={files[filesIdx[folderId]]}
						closeFolder={closeFolder}
						maxWidth={width}
						maxHeight={height - 40}
						idx={idx}
					/>
				);
			})}
		</div>
	);
};

export default WindowFrame;
