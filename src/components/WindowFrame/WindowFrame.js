import "./WindowFrame.css";
import Startbar from "./Startbar";
import { useEffect, useState } from "react";
import useResizeWindow from "../../hooks/useResizeWindow";
import Desktop from "./Desktop";

const WindowFrame = () => {
	const [width, height] = useResizeWindow();
	const [dimensions, setDimensions] = useState([0, 0]);
	useEffect(() => {
		setDimensions([Math.floor((width - 40) / 80), Math.floor(height / 80)]);
	}, [width, height]);
	return (
		<div className="window-frame-container">
			<Desktop dimensions={dimensions} />
			<Startbar />
		</div>
	);
};

export default WindowFrame;
