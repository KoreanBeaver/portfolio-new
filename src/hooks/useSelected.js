import { useState, useEffect, useCallback } from "react";

export const useSelected = (f) => {
	const [selected, setSelected] = useState(null);
	const [files, setFiles] = useState([]);
	const [filesIdx, setFilesIdx] = useState({});
	const [openFolders, setOpenFolders] = useState([]);

	const handleKeyPress = (e) => {
		console.log("hi");
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
	};

	const closeFolder = useCallback(
		(folderId) => {
			const idx = openFolders.indexOf(folderId);

			if (idx !== -1) {
				const newFolders = [...openFolders];
				newFolders.splice(idx, 1);
				setOpenFolders(newFolders);
			}
		},
		[openFolders]
	);

	const handleSC = (e) => {
		setSelected(e.currentTarget.id);
	};

	const handleDC = (e) => {
		if (!selected) return;

		if (selected !== e.currentTarget.id) {
			setSelected(e.currentTarget.id);
			return;
		}
		const info = files[filesIdx[selected]];

		if (info.type === "external_link") {
			window.open(info.url, "_blank");
		} else if (info.type === "folder") {
			if (!openFolders.includes(info.id)) {
				setOpenFolders([...openFolders, info.id]);
			}
		}
	};

	useEffect(() => {
		setFiles(f);
		const idx = {};

		f.forEach((file, i) => {
			idx[file.id] = i;
		});

		setFilesIdx(idx);
	}, [f]);

	return [
		selected,
		openFolders,
		filesIdx,
		files,
		handleSC,
		handleDC,
		closeFolder,
		handleKeyPress,
	];
};
