import "./WindowFrame.css";
import f from "assets/resources/files.json";

import { useEffect, useState } from "react";
import { useSelected } from "hooks/useSelected";
import { useResizeWindow } from "hooks/useResizeWindow";
import { useDoubleClick } from "hooks/useDoubleClick";

import Startbar from "./Startbar";
import Desktop from "./Desktop";

const WindowFrame = () => {
	const [width, height] = useResizeWindow();
	const [dimensions, setDimensions] = useState([0, 0]);
	const [selected, setSelected, files] = useSelected(f);

	const handleDesktopSC = (e) => {
		setSelected(e.currentTarget.id);
	};

	const handleDesktopDC = (e) => {
		if (!selected) return;

		if (selected !== e.currentTarget.id) {
			setSelected(e.currentTarget.id);
			return;
		}
		const info = files[selected];

		if (info.type === "external_link") {
			window.open(info.url, "_blank");
		}
	};

	const handleDesktopClick = useDoubleClick(handleDesktopSC, handleDesktopDC);

	useEffect(() => {
		setDimensions([Math.floor((width - 40) / 80), Math.floor(height / 80)]);
	}, [width, height]);

	return (
		<div className="window-frame-container">
			<Desktop
				dimensions={dimensions}
				handleClick={handleDesktopClick}
				files={files}
				selected={selected}
			/>
			<Startbar />
		</div>
	);
};

export default WindowFrame;
