import { ILoginForm } from "./ILoginForm"

export interface ISignForm extends ILoginForm {
    repeatPassword: string
}