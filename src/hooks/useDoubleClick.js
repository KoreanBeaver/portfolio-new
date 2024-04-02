import { useState, useEffect } from "react";

const useDoubleClick = (singleClickCb, doubleClickCb, delay = 250) => {
	const [click, setClick] = useState(0);

	useEffect(() => {
		const timer = setTimeout(() => {
			setClick(0);
		}, delay);
		
		if (click === 1) {
			singleClickCb();
		} else if (click === 2) {
			doubleClickCb();
		}

		return () => clearTimeout(timer);
	}, [click, singleClickCb, doubleClickCb, delay]);

  return () => setClick((prev) => prev + 1);
};

export default useDoubleClick;