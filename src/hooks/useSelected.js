import { useState, useEffect, useCallback } from "react";

export const useSelected = (f) => {
	const [selected, setSelected] = useState(null);
	const [files, setFiles] = useState([]);
	const [filesIdx, setFilesIdx] = useState({});

	const handleKeyPress = useCallback(
		(e) => {
			switch (e.keyCode) {
				case 27:
					setSelected(null);
					break;
				case 38:
					if (selected === null) {
						setSelected(files[0].id);
						return;
					} else if (filesIdx[selected] > 0) {
						setSelected(files[filesIdx[selected] - 1].id);
					}
					break;
				case 40:
					if (selected === null) {
						setSelected(files[0].id);
						return;
					} else if (filesIdx[selected] < files.length - 1) {
						setSelected(files[filesIdx[selected] + 1].id);
					}
					break;
        case 13:
          if (selected !== null) {
            const info = files[filesIdx[selected]];
            if (info.type === "external_link") {
              window.open(info.url, "_blank");
            }
          }

          break;
				default:
					break;
			}
		},
		[files, selected, filesIdx]
	);

	useEffect(() => {
		setFiles(f);
		const idx = {};

		f.forEach((file, i) => {
			idx[file.id] = i;
		});

		setFilesIdx(idx);
	}, [f]);

	useEffect(() => {
		document.addEventListener("keydown", handleKeyPress, false);

		return () => {
			document.removeEventListener("keydown", handleKeyPress, false);
		};
	}, [handleKeyPress]);

  return [selected, setSelected, filesIdx, files];
};
