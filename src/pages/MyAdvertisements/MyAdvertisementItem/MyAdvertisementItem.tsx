// @ts-ignore
import styles from './MyAdvertisementItem.module.scss'
import { IAdvertisementResponse } from '../../../services/advertisementService/advertisementservice.interface'
import { editIcon, eyeIcon, trashIcon } from '../../../data/svgIcons'
import { FC, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useMutation } from 'react-query'
import { advertisementService } from '../../../services/advertisementService/advertisementService'
import { useOnClickOutside } from '../../../hooks/useClickOutside'

export const MyAdvertisementItem: FC<IAdvertisementResponse> = ({ categoryId, description, image, name, id }) => {
    const deleteBlockRef = useRef<HTMLButtonElement>(null)
    const deleteBtnRef = useRef<HTMLDivElement>(null)

    const hideDeleteBtn = () => deleteBlockRef?.current?.classList.remove(styles.active)
    const showDeleteBtn = () => deleteBlockRef?.current?.classList.toggle(styles.active)

    const { mutateAsync } = useMutation(
        ['deleteAdvertisement'],
        (id: string) => advertisementService.deleteAdvertisement(String(id))
    )

    const deleteAdvertisement = (id: string) => mutateAsync(id)

    useOnClickOutside(deleteBtnRef, hideDeleteBtn)

    return (
        <div className={styles.main}>

            <div className={styles.imgBlock}>
                <img src={image} alt={name} />
            </div>

            <div className={styles.mainContent}>

                <h3>{name}</h3>

                <div className={styles.mainContent__description}>
                    <p>{description}</p>
                </div>

            </div>

            <div className={styles.svgBlock}>

                <Link
                    to={`/edit-advertisement/${id}`}
                    className={styles.svgBlock__editIcon}
                >
                    {editIcon}
                </Link>

                <div ref={deleteBtnRef} className={styles.deleteBlock}>

                    <div className={styles.deleteBlock__trash} onClick={showDeleteBtn}>
                        {trashIcon}
                    </div>

                    <button
                        ref={deleteBlockRef}
                        onClick={() => deleteAdvertisement(String(id))}
                        className={styles.deleteBlock__btn}
                    >
                        <p>точно удалить?</p>
                    </button>

                </div>

                {eyeIcon}

            </div>

        </div>
    )
}