//@ts-ignore
import styles from "./SignIn.module.scss";
import { useState } from "react";
import { http } from "../../http/http";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { userService } from "../../services/userService/userService";
import { IUserService } from "../../services/userService/IUserService";
import { enqueueSnackbar } from "notistack";
import { AxiosError } from "axios";
import { InputBlock } from "../UI/InputBlock/InputBlock";
import { fieldNameCheck } from "../../helpers/validateHelpers";
import { ISignForm } from "../../types/ISignForm";
import { useAuthenticationWrapperContext } from "../../providers/Authentication";

export const SignIn = () => {
  const { changeWrapper } = useAuthenticationWrapperContext()
  const { register, handleSubmit, setError, formState: { errors, isValid, submitCount } } = useForm(
    {
      mode: "onBlur",
      reValidateMode: "onChange",
      defaultValues: {
        login: "",
        password: "",
        repeatPassword: "",
      },
    });

  // const [loading, setLoading] = useState(true);
  // function handleClick() {
  //   setLoading(true);
  // }

  const { isLoading, mutateAsync, isSuccess } =
    useMutation(
      ["signIn"],
      (body: IUserService) => userService.registration(body),
      {
        onSuccess: (data) => {
          enqueueSnackbar("вы успешно запегистрированы", { variant: "success" });
          changeWrapper('login')
        },
        onError: (error: AxiosError<{ message: string }>) => {
          console.log(error);
          enqueueSnackbar(`${error.response?.data?.message}`, { variant: "error" });
        },
      }
    );
  console.log(errors);

  const onSubmit = async (formData: ISignForm) => {
    console.log(formData);

    if (submitCount === 0 && formData.password.length < 6)
      return setError("password", {
        message: "пароль должен быть больше 5 сивмолов",
      });
    if (formData.password !== formData.repeatPassword) {
      return setError("repeatPassword", { message: "пароли не совпадают" });
    }
    const body = { login: formData.login, password: formData.password };
    mutateAsync(body);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formBlock}>
      <div className={styles.inputsWrapper}>

        <InputBlock
          placeholder="login"
          errors={errors?.login?.message}
          name="login"
          register={register}
          rules={{
            validate: fieldNameCheck,
            minLength: { value: 2, message: 'количество символов меньше 2х' },
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
          errors={errors?.password?.message}
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

        <InputBlock
          placeholder="repeat password"
          errors={errors?.repeatPassword?.message}
          name="repeatPassword"
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

      </div>
      {/* {!isLoading ? ''
          :
          <LoadingButton
          size="large"
          onClick={handleClick}
          loading={loading}
          variant="outlined"
          disabled
        />} */}

      <Button
        type="submit"
        disabled={submitCount !== 0 && !isValid}
        color="success"
        size="large"
        variant="contained"
      >
        registration
      </Button>
    </form >
  );
};
