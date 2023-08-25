// @ts-ignore
import styles from './EditAdvertisement.module.scss'
import { useMutation, useQuery } from "react-query"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { advertisementService } from "../../services/advertisementService/advertisementService"
import { useForm } from 'react-hook-form'
import { IAdvertisement } from '../../services/advertisementService/advertisementservice.interface'
import { CategoryBlock } from '../CreateAd/CategoryBlock/CategoryBlock'
import { SelectBlock } from '../../components/UI/SelectBlock/SelectBlock'
import { InputBlock } from '../../components/UI/InputBlock/InputBlock'
import { Button } from "@mui/material";
import { enqueueSnackbar } from 'notistack'
import { AxiosError } from 'axios'
import { useCategories } from '../../hooks/useCategories'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

export const EditAdvertisement = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { id } = useParams()

    const { register, handleSubmit, control, formState: { isValid, errors }, setValue } = useForm<IAdvertisement>(
        {
            mode: "onBlur",
            reValidateMode: "onChange",
            defaultValues: {
                // categoryId: "",
                categoryId: 0,
                name: "",
                description: "",
                image: "",
            },
        }
    );

    const { data: categories, isLoading: isCategoryLoading } = useCategories()

    const { data, isLoading } = useQuery(
        ['getAdvertisement'],
        () => advertisementService.getAdvertisement(String(id), true),
        {
            onSuccess: (data) => {
                if (data.data === null) navigate('/not-found')
                setValue('name', data.data.name)
                setValue('categoryId', data.data.categoryId)
                setValue('description', data.data.description)
                setValue('image', data.data.image)
            },
            onError: () => {
                navigate('/not-found')
            },
            retry: false
        }
    )

    const { mutateAsync } = useMutation(
        ['editAdvertisement'],
        (editBody: IAdvertisement) => advertisementService.editAdvertisement(editBody, String(id)),
        {
            onSuccess: () => {
                // navigate('/my-advertisements')
                enqueueSnackbar('изменения сохранены', { variant: 'success' })
            },
            onError: (error: AxiosError<{ message: string }>) => {
                enqueueSnackbar(error?.response?.data?.message || 'произошла ошибка', { variant: 'error' })
            }
        }
    )



    const onSubmit = (editBody: IAdvertisement) => {
        mutateAsync(editBody)
        // console.log(editBody);

    }

    return (
        <div className={styles.main}>

            <form className={styles.formBlock} onSubmit={handleSubmit(onSubmit)}>
                <h1>Редактирование</h1>

                <div className={styles.adsBlock}>

                    <div className={styles.inputBlock}>
                        <h3>Название</h3>
                        <InputBlock
                            errors={errors?.name?.message}
                            name="name"
                            register={register}
                            rules={{
                                required: { value: true, message: "поле обязательно" },
                                minLength: { value: 2, message: "min - 2" }
                            }}
                            size="small"
                            type="text"
                            placeholder="title"
                        />
                    </div>

                    {isCategoryLoading
                        ?
                        <>loading</>
                        :
                        <div className={styles.selectBlock}>{
                            categories?.data &&
                            <SelectBlock
                                control={control}
                                errors={errors?.categoryId?.message}
                                name="categoryId"
                                options={categories!.data}
                                rules={{ required: { value: true, message: "поле обязательно" } }}
                                title="Категория"
                                register={register}
                            />}
                        </div>
                    }

                    <CategoryBlock
                        errors={errors?.description?.message}
                        name="description"
                        register={register}
                        rules={{
                            required: { value: true, message: "поле обязательно", },
                            minLength: { value: 20, message: "min - 200" },
                        }}
                        size="medium"
                        heading="Описание"
                        type="text"
                        placeholder="title"
                        isMulti={4}
                    />

                    <CategoryBlock
                        errors={errors?.image?.message}
                        heading="Ссылка на картинку"
                        name="image"
                        register={register}
                        rules={{ required: { message: 'поле обязательно', value: true } }}
                        size="small"
                        type="text"
                    />

                </div>

                <div className={styles.main__borderBottom}></div>

                <Button type="submit" variant="contained" color="success">
                    Сохранить изменения
                </Button>
            </form>

        </div>
    )
}