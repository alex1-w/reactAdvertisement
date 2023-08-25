// @ts-ignore
import styles from './ChangePasswordComponent.module.scss';
import { InputBlock } from '../../../../components/UI/InputBlock/InputBlock';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from "@mui/material";
import { useMutation, useQuery } from 'react-query';
import { userService } from '../../../../services/userService/userService';
import { enqueueSnackbar } from 'notistack';
import { AxiosError } from 'axios';

const skeletons = new Array(5).fill('')

export const ChangePasswordComponent = () => {

    const { register, formState: { errors, isValid }, handleSubmit, setValue } = useForm({
        mode: 'onBlur',
        reValidateMode: 'onChange',
        defaultValues:
        {
            password: '',
            newPassword: '',
            repeatNewPassword: ''
        }
    })

    const { data: userData, mutateAsync } = useMutation(
        ['changePassword'],
        (password: string) => userService.changePassword(password),
        {
            onSuccess: () => {
                enqueueSnackbar('пароль успешно изменен', { variant: 'success' })
            },
            onError: (error: AxiosError<{ message: string }>) => {
                enqueueSnackbar(`${error?.response?.data.message}`, { variant: 'error' })
            }
        }
    )

    const submit: SubmitHandler<any> = async (data) => {
        if (data.newPassword !== data.repeatNewPassword) return enqueueSnackbar('пароли не совпадают', { variant: 'error' })

        mutateAsync(data)
    }
    console.log(userData?.data);

    return (

        <div className={styles.main}>

            {/* <h1></h1> */}

            <form onSubmit={handleSubmit(submit)}>

                <div className={styles.main__inputBlock}>
                    <p>Введите старый пароль</p>
                    <InputBlock
                        errors={errors.password?.message}
                        name='password'
                        register={register}
                        rules={{
                            required: {
                                value: true,
                                message: 'поле обязателно'
                            }
                        }}
                        size='medium'
                        type='password'
                        placeholder='Введите старый пароль'
                    />
                </div>

                <div className={styles.main__inputBlock}>
                    <p>Введите новый пароль</p>
                    <InputBlock
                        errors={errors?.newPassword?.message}
                        name='newPassword'
                        register={register}
                        rules={{
                            required: {
                                value: true,
                                message: 'поле обязателно'
                            },
                            minLength: { value: 6, message: 'минимальная длина пароля - 6' }
                        }}
                        size='medium'
                        type='text'
                    />
                </div>

                <div className={styles.main__inputBlock}>
                    <p>Введите новый пароль</p>
                    <InputBlock
                        errors={errors?.repeatNewPassword?.message}
                        name='repeatNewPassword'
                        register={register}
                        rules={{
                            required: {
                                value: true,
                                message: 'поле обязателно'
                            },
                            minLength: { value: 6, message: 'минимальная длина пароля - 6' }
                        }}
                        size='medium'
                        type='text'
                    />
                </div>

                <Button
                    type='submit'
                    variant='contained'
                    size='large'
                    disabled={!isValid}
                >
                    Сохранить
                </Button>
            </form>
        </div>
    )
}