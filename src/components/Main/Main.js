import React, { useState, useEffect } from "react";
import Intro from "../Intro/Intro";

const Main = () => {
	const [isLoadingMain, setIsLoadingMain] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoadingMain(false);
		}, 5000);
	}, []);

	// Intro will just lay on top of other content until the time is up
	return (
  <div className="main">{isLoadingMain ? <Intro /> : null}
    <div>something behind loading</div>
  </div>)
};

export default Main;
