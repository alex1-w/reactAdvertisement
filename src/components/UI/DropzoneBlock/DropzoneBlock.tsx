//@ts-ignore
import { Control, Controller, FieldErrors } from 'react-hook-form';
import styles from '../DropzoneBlock/DropzoneBlock.module.scss';
import Dropzone, { useDropzone } from 'react-dropzone'
import { FC } from 'react';
import { fileIcon } from '../../../data/categories.data';
import { ICreateAdForm } from '../../../pages/CreateAd/CreateAd';
import React, { useCallback } from 'react'

interface IDropzoneBlock {
    name: 'category' | 'title' | 'description' | 'image';
    // name: string;
    errors: FieldErrors<ICreateAdForm>;
    control: Control<ICreateAdForm>
}

export const DropzoneBlock: FC<IDropzoneBlock> = ({ errors, name, control }) => {
    const onDrop = useCallback((acceptedFiles: any) => {
        acceptedFiles.forEach((file: any) => {
            const reader = new FileReader()

            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onload = () => {
                // Do whatever you want with the file contents
                const binaryStr = reader.result
                console.log(binaryStr)
            }
            reader.readAsArrayBuffer(file)
        })

    }, [])
    const { getRootProps, getInputProps } = useDropzone({ onDrop })

    return (
        <>
            <div className={styles.dropZone}>
                <Controller
                    rules={{ required: { value: true, message: 'поле обязательно' } }}
                    control={control}
                    name={name}
                    render={({ field: { value, onChange, onBlur } }) => (
                        <Dropzone onDrop={(onChange as any)} multiple={true}>
                            {({ getRootProps, getInputProps }) => (

                                <div>


                                    <section>

                                        <div {...getRootProps()} className={styles.dropZone__dropSection}>
                                            {fileIcon}
                                            <div>
                                                <input {...getInputProps()} />
                                                <p>File Up</p>
                                            </div>
                                        </div>
                                    </section>
                                    <div>{`${value[0]}`}</div>
                                </div>

                            )}
                        </Dropzone>
                    )
                    }

                />
                {/* <input disabled placeholder="тут будут ваши файлы" className={styles.dropZone__fileSection}></input> */}
                <div className={styles.dropZone__fileSection}></div>
            </div>
        </>
    )
}