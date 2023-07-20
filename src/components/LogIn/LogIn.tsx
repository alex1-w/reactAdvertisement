//@ts-ignore
import styles from './LogIn.module.scss'
import { ChangeEvent, useState } from "react"
import { http } from "../../http/http"
import { useSnackbar } from 'notistack'
import { useForm, SubmitHandler } from 'react-hook-form'
import cn from 'classnames'
import { ILoginForm } from '../../types/ILoginForm'
import { Input } from '../UI/Input/Input'
import { Button } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import { InputBlock } from '../UI/InputBlock/InputBlock'
import { fieldNameCheck } from '../../helpers/validateHelpers'

export const LogIn = () => {

    const { register, handleSubmit, setError, formState: { errors, isDirty, dirtyFields, isValid, submitCount } } = useForm({
        mode: 'onBlur',
        reValidateMode: 'onChange',
        defaultValues: {
            login: '',
            password: '',
            repeatPassword: '',
        },

    })
    // console.log(errors);

    const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.inputsBlock}>

            <div className={styles.inputsWrapper}>

                <InputBlock
                    placeholder="login"
                    errors={errors}
                    name="login"
                    register={register}
                    rules={{
                        validate: fieldNameCheck,
                        minLength: {
                            value: 2, message:
                                'количество символов меньше 2х'
                        },
                        required: {
                            value: true,
                            message: 'поле не заполнено'
                        }
                    }}
                    size="medium"
                    type="text"
                />

                <InputBlock
                    placeholder="password"
                    errors={errors}
                    name="password"
                    register={register}
                    rules={{
                        validate: fieldNameCheck,
                        minLength: {
                            value: 2,
                            message: 'количество символов меньше 2х'
                        },
                        required: {
                            value: true,
                            message: 'поле не заполнено'
                        }
                    }}
                    size="medium"
                    type="password"
                />
                <Button
                    className={styles.btnAuth}
                    type='submit'
                    disabled={!isValid}
                    color='success'
                    size='large'
                    variant='contained'
                >
                    authentication
                </Button>
            </div>

        </form>
    )
}