//@ts-ignore
import styles from "../DropFileBlock/DropFileBlock.module.scss";
import { ChangeEvent, DragEvent, useState } from "react";
import { fileIcon } from "../../../data/categories.data";
import { DropEvent } from "react-dropzone";

export const DropFileBlock = () => {
  const [drag, setDrag] = useState<boolean>(false);

  const dragHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    // console.log(7777);
    setDrag(true)
  }
  const dragLeaveHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDrag(false)
  }

  const dropHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const file = { ...e.dataTransfer.files }
    console.log(file[0].name, file[0].size);    
    setDrag(false)
  }

  return (
    <div className={styles.main}>
      {drag ?
        <div
          className={styles.fileArea}
          onDragStart={e => dragHandler(e)}
          onDragLeave={e => dragLeaveHandler(e)}
          onDragOver={e => dragHandler(e)}
          onDrop={dropHandler}
        >
          {fileIcon}
          <p>File Down</p>
        </div>
        :
        <div
          className={styles.fileAriaActive}
          onDragStart={e => dragHandler(e)}
          onDragLeave={e => dragLeaveHandler(e)}
          onDragOver={e => dragHandler(e)}
        >
          {fileIcon}
          <p>File Up</p>
        </div>
      }
    </div>
  );
};
