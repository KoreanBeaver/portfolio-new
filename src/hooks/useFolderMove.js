import {useState, useEffect, useCallback} from "react";

export const useFolderMove = (ref) => {
  const [offset, setOffset] = useState([100, 100]);
  const [currMousePos, setCurrMousePos] = useState([0, 0]);
  const [isDragging, setIsDragging] = useState(false);

  useEffect( () => {
    const folder = ref.current;
    const { top, left } = folder.getBoundingClientRect();
    setOffset([top, left]);
  }, [ref])

  const handleMoveMouseDown = useCallback( (e) => {
    setIsDragging(true);
    setCurrMousePos([e.clientX, e.clientY]);
  }, [setIsDragging, setCurrMousePos])

  const handleMoveMouseMove = useCallback( (e) => {
    if (!isDragging) return;

    const {clientX, clientY} = e;
    const [startX, startY] = currMousePos;
    const [top, left] = offset;

    const newTop = top + (clientY - startY);
    const newLeft = left + (clientX - startX);

    setOffset([newTop, newLeft]);
    setCurrMousePos([clientX, clientY]);
  }, [isDragging, currMousePos, offset, setOffset])

  const handleMoveMouseUp = useCallback( (e) => {
    setIsDragging(false);
  }, [setIsDragging])

  return [offset, handleMoveMouseDown, handleMoveMouseUp, handleMoveMouseMove];
}