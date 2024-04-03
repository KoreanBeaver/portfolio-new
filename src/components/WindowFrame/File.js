import "./File.css";

const File = ({ file, selected, handleClick }) => {
	return (
		<div
			className={`file ${selected === file.id ? "selected" : ""}`}
			id={file.id}
			onClick={handleClick}
		>
			<i className={`icon ${file.icon}`}></i>
			<div>
				<span>{file.name} </span>
				{file.type === "external_link" ? (
					<i className="fa-solid fa-arrow-up-right-from-square"></i>
				) : null}
			</div>
		</div>
	);
};

export default File;
