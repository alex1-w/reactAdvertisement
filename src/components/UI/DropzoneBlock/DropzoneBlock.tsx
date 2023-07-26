//@ts-ignore
import styles from "../DropzoneBlock/DropzoneBlock.module.scss";
import { Control, Controller, FieldErrors } from "react-hook-form";
import Dropzone, { useDropzone } from "react-dropzone";
import { FC } from "react";
import { fileIcon } from "../../../data/categories.data";
import { ICreateAdForm } from "../../../pages/CreateAd/CreateAd";
import { useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface IDropzoneBlock {
  name: "category" | "title" | "description" | "image";
  errors: FieldErrors<ICreateAdForm>;
  control: Control<ICreateAdForm>;
}

export const DropzoneBlock: FC<IDropzoneBlock> = ({
  errors,
  name,
  control,
}) => {
  const onDrop = useCallback((acceptedFiles: any) => {
    acceptedFiles.forEach((file: any) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <>
      <div className={styles.dropZone}>
        <Controller
          control={control}
          name={name}
          rules={{ required: { value: true, message: "поле обязательно" } }}
          render={({ field: { value, onChange, onBlur } }) => (
            <>
              <Dropzone onDrop={onChange as any} multiple={true}>
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <div
                      {...getRootProps()}
                      className={styles.dropZone__dropSection}
                    >
                      {fileIcon}
                      <div>
                        {/* <input {...getInputProps()} /> */}
                        <input
                          placeholder="fewfew"
                          {...getInputProps()}
                          type="text"
                          name={name}
                          onBlur={onBlur}
                        />
                        <p>File Up</p>
                      </div>
                    </div>
                  </section>
                )}
              </Dropzone>
              {/* <AnimatePresence>
                {errors[name] && (
                  <motion.p
                    initial={{ height: 0, y: "-100" }}
                    animate={{ height: "auto", y: 0 }}
                    exit={{ height: 0, y: "-100" }}
                  >
                    {errors[name] && errors[name].message}
                  </motion.p>
                )}
              </AnimatePresence> */}
            </>
          )}
        />
        {/* <input disabled placeholder="тут будут ваши файлы" className={styles.dropZone__fileSection}></input> */}
        <div className={styles.dropZone__fileSection}></div>
      </div>
    </>
  );
};
