import { useEffect, useState } from "react";
import Loader from "components/Loader/Loader";
import "./Intro.css";

const Intro = () => {
	const [displaySecondText, setDisplaySecondText] = useState(false);
	const [displayThirdText, setDisplayThirdText] = useState(false);
	// the first thing the user will see when entering the page
	// it contains brief introduction about myself
	// and after a set amount of time, it will be unmounted and replaced by the main content

	// the first intro-text should be displayed first
	// the second should come delayed after the first one

	useEffect(() => {
		setTimeout(() => {
			setDisplaySecondText(true);
		}, 1000);

		setTimeout(() => {
			setDisplayThirdText(true);
		}, 2000);
	}, []);

	return (
		<div className="intro">
			<p className="intro-text">Hi, my name is Brian Kwok</p>
			<p className={`intro-text ${displaySecondText ? "" : "intro-invisible"}`}>
				And I am a Software Engineer
			</p>
			<p className={`intro-text ${displayThirdText ? "" : "intro-invisible"}`}>
				Feel free to look around and see what I have to offer
			</p>
			<div className="intro-loader">
				<Loader />
			</div>
		</div>
	);
};

export default Intro;
