//@ts-ignore
import styles from "./LogIn.module.scss";
import { enqueueSnackbar } from "notistack";
import { useForm, SubmitHandler } from "react-hook-form";
import { ILoginForm } from "../../types/ILoginForm";
import { Button } from "@mui/material";
import { InputBlock } from "../UI/InputBlock/InputBlock";
import { fieldNameCheck } from "../../helpers/validateHelpers";
import { useMutation } from "react-query";
import { userService } from "../../services/userService/userService";
import { IUserService } from "../../services/userService/IUserService";
import Cookies from "js-cookie";
import { useModalContext } from "../UI/ModalProvider/ModalProvider";
import { useUserContext } from "../../providers/UserProvider";

export const LogIn = () => {
  const { closeModal } = useModalContext()
  const { setIsAuth } = useUserContext()

  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      login: "",
      password: "",
      repeatPassword: "",
    },
  });


  const { mutateAsync } = useMutation(
    ["authenticate"],
    (body: IUserService) => userService.authenticate(body),
    {
      onSuccess: ({ data }) => {
        // тут получаем TOKEN с сервера и устанавливаем его в COOKIES
        Cookies.set("userToken", data.token, { expires: 1 });

        setIsAuth(true)
        enqueueSnackbar("успешно", { variant: "success" });
        closeModal()
      },
      onError: () => {
        enqueueSnackbar("ошибка", { variant: "error" });
      },
    }
  );

  const onSubmit: SubmitHandler<ILoginForm> = async (data) => mutateAsync(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.inputsBlock}>
      <div className={styles.inputsWrapper}>
        <InputBlock
          placeholder="login"
          errors={errors?.login?.message}
          name="login"
          register={register}
          rules={{
            validate: fieldNameCheck,
            minLength: {
              value: 2,
              message: "количество символов меньше 2х",
            },
            required: {
              value: true,
              message: "поле не заполнено",
            },
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
              message: "количество символов меньше 2х",
            },
            required: {
              value: true,
              message: "поле не заполнено",
            },
          }}
          size="medium"
          type="password"
        />
        <Button
          className={styles.btnAuth}
          type="submit"
          disabled={!isValid}
          color="success"
          size="large"
          variant="contained"
        >
          authentication
        </Button>
      </div>
    </form>
  );
};
