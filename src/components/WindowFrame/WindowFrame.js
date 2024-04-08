import "./WindowFrame.css";
import f from "assets/resources/files.json";

import { useCallback, useEffect, useState } from "react";
import { useSelected } from "hooks/useSelected";
import { useResizeWindow } from "hooks/useResizeWindow";
import { useDoubleClick } from "hooks/useDoubleClick";

import Startbar from "./Startbar";
import Desktop from "./Desktop";
import Folder from "./Folder";

const WindowFrame = () => {
	const [width, height] = useResizeWindow();
	const [dimensions, setDimensions] = useState([0, 0]);
	const [selected, setSelected, filesIdx, files] = useSelected(f);
	const [openFolders, setOpenFolders] = useState([]);

	const handleDesktopSC = (e) => {
		setSelected(e.currentTarget.id);
	};

	const handleDesktopDC = (e) => {
		if (!selected) return;

		if (selected !== e.currentTarget.id) {
			setSelected(e.currentTarget.id);
			return;
		}
		const info = files[filesIdx[selected]];

		if (info.type === "external_link") {
			window.open(info.url, "_blank");
		} else if (info.type === "folder") {
			if (!openFolders.includes(info.id)) {
				setOpenFolders([...openFolders, info.id]);
			}
		}
	};
	const handleDesktopClick = useDoubleClick(handleDesktopSC, handleDesktopDC);

	useEffect(() => {
		setDimensions([Math.floor((width) / 80), Math.floor((height - 40) / 80)]);
	}, [width, height]);

	const closeFolder = useCallback(
		(folderId) => {
			const idx = openFolders.indexOf(folderId);

			if (idx !== -1) {
				const newFolders = [...openFolders];
				newFolders.splice(idx, 1);
				setOpenFolders(newFolders);
			}
		},
		[openFolders]
	);

	return (
		<div className="window-frame-container">
			<Desktop
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
