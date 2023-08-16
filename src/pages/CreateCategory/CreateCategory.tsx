//@ts-ignore
import styles from '../CreateCategory/CreateCategory.module.scss'
import { InputBlock } from '../../components/UI/InputBlock/InputBlock'
import { useForm, SubmitErrorHandler, SubmitHandler } from 'react-hook-form'
import { Button } from "@mui/material";
import { useMutation } from 'react-query';
import { categoryService } from '../../services/categoryService/categoryService';
import { enqueueSnackbar } from 'notistack';
import { ICreateCategory } from '../../services/categoryService/ICategory';

export const CreateCategory = () => {

    const { control, formState: { errors, isValid, submitCount }, handleSubmit, register, reset } = useForm<ICreateCategory>({
        mode: 'onSubmit',
        defaultValues: {
            name: '',
            description: '',
            image: ''
        },
    })

    const { mutateAsync, isLoading } = useMutation(
        ['create-category'],
        (body: ICreateCategory) => categoryService.createCategory(body),
        {
            onSuccess: () => { enqueueSnackbar("успешно", { variant: "success" }) },
            onError: () => { enqueueSnackbar("ошибка", { variant: "error" }) },
        }
    )

    const submit = (data: ICreateCategory) => {
        console.log(data);
        mutateAsync(data)
        reset()
    }

    const error = (errors: any) => {
        console.log(errors);
    }

    return (
        // <Container>
        <div className={styles.wrapper}>

            <form onSubmit={handleSubmit(submit, error)} className={styles.formBlock}>

                <h1>Cоздать категорию</h1>

                <div className={styles.formBlock__item}>
                    <h3>Название категории</h3>
                    <InputBlock
                        errors={errors.name?.message}
                        name='name'
                        register={register}
                        rules={{
                            required:
                                { value: true, message: 'поле обязательно' },
                            minLength:
                                { value: 2, message: 'минимальное значение - 2' }
                        }}
                        size='small'
                        type='text'
                        className={styles.inputBlock}
                    />
                </div>

                <div className={styles.formBlock__item}>
                    <h3>Описание категории</h3>
                    <InputBlock
                        errors={errors?.description?.message}
                        name='description'
                        register={register}
                        rules={{
                            required: { value: true, message: 'поле обязательно' },
                            minLength: { value: 10, message: 'минимальное значение - 10' }
                        }}
                        size='small'
                        type='text'
                        className={styles.inputBlock}
                        isMulti={4}
                    />
                </div>


                <div className={styles.formBlock__item}>
                    <h3>Ссылка на картинку категории</h3>
                    <InputBlock
                        errors={errors?.image?.message}
                        name='image'
                        register={register}
                        rules={{
                            required: { value: true, message: 'поле обязательно' }
                        }}
                        size='small'
                        className={styles.inputBlock}
                        type='text'
                    />
                </div>

                <Button
                    variant='contained'
                    type='submit'
                    color='success'
                    disabled={isLoading || (!isValid)}
                >
                    добавить
                </Button>

            </form>

        </div>

        // </Container >
    )
}