import styles from './Input.module.scss'
import { UseFormRegister } from 'react-hook-form'
import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react"
import { ISignForm } from '../../../types/ISignForm'
// const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>

interface IRegisterType {
    // login: string
    // password: string
    // repeatPassword?: string | null
}

interface IInputProps {
    inputType: 'login' | 'password' | 'repeatpassword'
    register: UseFormRegister<ISignForm>
    placeholder: string
    // name: string
    name: 'login' | 'password' | 'repeatPassword'
    type: string
    minLength: number
}

export const Input: FC<IInputProps & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>>
    = ({ inputType, name, placeholder, register, type, minLength, ...rest }) => {

        const validatePattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

        return (
            <input
                type={type}
                placeholder={placeholder}

                {...register(name, {
                    required: { value: true, message: `не заполнено` },
                    minLength: minLength,
                    // pattern: {
                    //     // value: inputType === 'login' ? validatePattern : '',
                    //     value: validatePattern,
                    //     message: `введите корректный ${name}`
                    // }

                })}
            >
            </input>
        )
    }