import "./FolderContent.css";

import File from "./File";

const FolderContent = ({dimensions, handleClick, files, selected}) => {

  return (
    <div className="folder-content-container">
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