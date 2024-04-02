import React, { useState, useEffect } from "react";
import "./Startbar.css";

const Startbar = () => {
	// Subcomponent for the StartMenu in the Window component.
	// will be on the bottom of the Window component.
	// Time of my current location will be displayed on the right
	// and the Start button will be on the left.
	const [time, setTime] = useState(new Date());

	// update time every 15 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date());
		}, 15000);

		return () => {
			clearInterval(interval);
		};
	}, []);

  // TODO: add search side bar that opens when clicking on the 
  // magnifying glass icon on the left side of the start bar
	return (
		<div className="startbar-container">
			<section className="startbar-left">
				<i className="fa-solid fa-magnifying-glass"></i>
			</section>
			<section className="startbar-center">center</section>
			<section className="startbar-right">
				<div className="startbar-date-time">
					<div className="startbar-date-time-wrapper">
						<div className="startbar-date">
							{time.toLocaleDateString([], {
								year: "2-digit",
								month: "2-digit",
								day: "2-digit",
							})}
						</div>
						<div className="startbar-time">
							{time.toLocaleTimeString([], {
								hour: "2-digit",
								minute: "2-digit",
							})}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Startbar;
