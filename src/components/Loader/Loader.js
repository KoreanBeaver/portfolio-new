import "./Loader.css";

const Loader = () => {
  // loading animation component
  // the dots jump up and down in a sequence
	return (
		<div className="loader">
			<div className="dot"></div>
			<div className="dot"></div>
			<div className="dot"></div>
			<div className="dot"></div>
			<div className="dot"></div>
		</div>
	);
};

export default Loader;
