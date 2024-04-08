import { useState, useEffect, useCallback } from "react";

export const useFolderMoveResize = (ref, maxWidth, maxHeight, unmaximize) => {
	const [offset, setOffset] = useState([100, 100]);
	const [currMousePos, setCurrMousePos] = useState([0, 0]);
	const [isDragging, setIsDragging] = useState(false);
	const [isResizing, setIsResizing] = useState(false);
	const [direction, setDirection] = useState("");
	// min width and height
	const [dimension, setDimension] = useState([320, 320]);
	const [maximized, setMaximized] = useState(false);
	const [prevDimension, setPrevDimension] = useState([null, null]);
	const [prevOffset, setPrevOffset] = useState([null, null]);
	const [maximizing, setMaximizing] = useState(false);

	useEffect(() => {
		const folder = ref.current;
		const { top, left, width, height } = folder.getBoundingClientRect();
		setOffset([top, left]);
		setDimension([width, height]);
	}, [ref]);

	const handleMaximize = useCallback(
		(e) => {
			setMaximizing(true);
			if (maximized) {
				setDimension(prevDimension);
				setOffset(prevOffset);
				setPrevDimension([null, null]);
				setPrevOffset([null, null]);
				setMaximized(false);
			} else {
				setPrevDimension(dimension);
				setPrevOffset(offset);
				setDimension([maxWidth, maxHeight]);
				setOffset([0, 0]);
				setMaximized(true);
			}

			setTimeout(() => {
				setMaximizing(false);
			}, 300);
		},
		[
			maximized,
			setDimension,
			setOffset,
			setPrevDimension,
			setPrevOffset,
			maxWidth,
			maxHeight,
			prevOffset,
			prevDimension,
			dimension,
			offset,
		]
	);

	// Move
	const handleMoveMouseDown = useCallback(
		(e) => {
			setIsDragging(true);
			setCurrMousePos([e.clientX, e.clientY]);
		},
		[setIsDragging, setCurrMousePos]
	);

	const handleMoveMouseMove = useCallback(
		(e) => {
			if (!isDragging || maximized) return;

			const { clientX, clientY } = e;
			const [startX, startY] = currMousePos;
			const [top, left] = offset;

			const newTop = top + (clientY - startY);
			const newLeft = left + (clientX - startX);

			setOffset([newTop, newLeft]);
			setCurrMousePos([clientX, clientY]);
		},
		[isDragging, currMousePos, offset, setOffset, maximized]
	);

	const handleMoveMouseUp = useCallback(
		(e) => {
			setIsDragging(false);
		},
		[setIsDragging]
	);

	// Resize
	const handleResizeMouseDown = useCallback(
		(e) => {
			setIsResizing(true);
			const direction = e.currentTarget.id;

			setCurrMousePos([e.clientX, e.clientY]);
			setDirection(direction);
		},
		[setIsResizing, setCurrMousePos, setDirection]
	);

	const handleResizeMouseMove = useCallback(
		(e) => {
			if (!isResizing || maximized) {
				setIsResizing(false);
				setDirection("");
				return;
			}

			// moved mouse position
			const { clientX, clientY } = e;
			// saved mouse position
			const [startX, startY] = currMousePos;
			const [width, height] = dimension;
			const [top, left] = offset;

			let newWidth, newHeight;
			let newTop = top,
				newLeft = left;

			let deltaX = clientX - startX;
			let deltaY = clientY - startY;
			if (direction === "top-left") {
				newWidth = Math.max(width - deltaX, 320);
				newHeight = Math.max(height - deltaY, 320);

				if (newWidth > 320) {
					newLeft = left + deltaX;
				}
				if (newHeight > 320) {
					newTop = top + deltaY;
				}
			} else if (direction === "top-right") {
				newWidth = Math.max(width + deltaX, 320);
				newHeight = Math.max(height - deltaY, 320);
				if (newHeight > 320) {
					newTop = top + deltaY;
				}
			} else if (direction === "bottom-left") {
				newWidth = Math.max(width - deltaX, 320);
				newHeight = Math.max(height + deltaY, 320);
				if (newWidth > 320) {
					newLeft = left + deltaX;
				}
			} else if (direction === "bottom-right") {
				newWidth = Math.max(width + deltaX, 320);
				newHeight = Math.max(height + deltaY, 320);
			}

			setOffset([newTop, newLeft]);
			setDimension([newWidth, newHeight]);
			setCurrMousePos([clientX, clientY]);
		},
		[
			isResizing,
			offset,
			currMousePos,
			dimension,
			setDimension,
			setCurrMousePos,
			direction,
			maximized,
		]
	);

	const handleResizeMouseUp = useCallback(
		(e) => {
			setIsResizing(false);
			setDirection("");
		},
		[setIsResizing, setDirection]
	);

	return [
		offset,
		isDragging,
		isResizing,
		dimension,
		handleMoveMouseDown,
		handleMoveMouseUp,
		handleMoveMouseMove,
		handleResizeMouseDown,
		handleResizeMouseUp,
		handleResizeMouseMove,
		maximized,
		maximizing,
		handleMaximize,
	];
};
