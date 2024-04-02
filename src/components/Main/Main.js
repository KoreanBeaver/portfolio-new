import React, { useState, useEffect } from "react";
import Intro from "../Intro/Intro";
import WindowFrame from "../WindowFrame/WindowFrame";

import "./Main.css";

const Main = () => {
	const [isLoadingMain, setIsLoadingMain] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoadingMain(false);
		}, 10);
	}, []);

	// Intro will just lay on top of other content until the time is up
	return (
		<div className="main">
			{isLoadingMain ? <Intro /> : null}
			<WindowFrame />
		</div>
	);
};

export default Main;
