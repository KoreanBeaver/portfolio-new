import { useState, useEffect } from "react";

const useDoubleClick = (singleClickCb, doubleClickCb, delay = 250) => {
	const [click, setClick] = useState(0);

	useEffect(() => {
		const timer = setTimeout(() => {
			setClick(0);
		}, delay);

		return () => clearTimeout(timer);
	}, [click, delay, singleClickCb, doubleClickCb]);

	return (e) => {
		setClick((prev) => prev + 1);
		
		if (click === 0) {
			singleClickCb(e);
		} else if (click === 1) {
			doubleClickCb(e);
		}
	};
};

export default useDoubleClick;
