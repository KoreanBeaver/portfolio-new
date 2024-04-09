import "./FolderContent.css";

import File from "../../File/File";

const FolderContent = ({dimensions, handleClick, files, selected}) => {
  const style={
    display: "grid",
    gridTemplateColumns: `repeat(${Math.min(Math.floor(dimensions[0] / 80), files.length)}, 80px)`,
    justifyContent: "space-between"
  }
  
  return (
    <div className="folder-content-container" style={style}>
      {files.map((file, idx) => {
        return(
          <File
            key={file.id + idx}
            file={file}
            handleClick={handleClick}
            selected={selected}
          />
        )
      })}
    </div>
  )
}

export default FolderContent;