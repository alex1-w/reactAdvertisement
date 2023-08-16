// @ts-ignore
import styles from './EditAdvertisement.module.scss'
import { useMutation, useQuery } from "react-query"
import { useNavigate, useParams } from "react-router-dom"
import { advertisementService } from "../../services/advertisementService/advertisementService"
import { useForm } from 'react-hook-form'
import { IAdvertisement } from '../../services/advertisementService/advertisementservice.interface'
import { CategoryBlock } from '../CreateAd/CategoryBlock/CategoryBlock'
import { SelectBlock } from '../../components/UI/SelectBlock/SelectBlock'
import { InputBlock } from '../../components/UI/InputBlock/InputBlock'
import { Button } from "@mui/material";
import { categoryService } from '../../services/categoryService/categoryService'
import { enqueueSnackbar } from 'notistack'
import { AxiosError } from 'axios'

export const EditAdvertisement = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const { register, handleSubmit, control, formState: { isValid, errors }, setValue } = useForm<IAdvertisement>(
        {
            mode: "onBlur",
            reValidateMode: "onChange",
            defaultValues: {
                categoryId: "",
                name: "",
                description: "",
                image: "",
            },
        }
    );

    const { data: categoryOptions, isLoading: categoryOptionsLoading } = useQuery(
        ['categories-options'],
        () => categoryService.getCategories(),
    )

    const { isLoading } = useQuery(
        ['getAdvertisement'],
        () => advertisementService.getAdvertisement(String(id)),
        {
            onSuccess: (data) => {
                setValue('name', data.data.name)
                setValue('categoryId', data.data.categoryId)
                setValue('description', data.data.description)
                setValue('image', data.data.image)
            }
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
        console.log(editBody);
        
        mutateAsync(editBody)
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

                    {categoryOptionsLoading
                        ?
                        <p>loadiong</p>
                        :
                        <div className={styles.selectBlock}>{
                            categoryOptions?.data &&
                            <SelectBlock
                                control={control}
                                errors={errors}
                                name="categoryId"
                                options={categoryOptions!.data}
                                rules={{ required: { value: true, message: "поле обязательно" } }}
                                title="Категория"
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
                        // label="title"
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
                        label="http://"
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