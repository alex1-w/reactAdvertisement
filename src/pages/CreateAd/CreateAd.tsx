//@ts-ignore
import styles from "./CreateAd.module.scss";
import {
  Button,
  Input,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { Container } from "../../components/Container/Container";
import { categories } from "../../data/categories.data";
import { CategoryInputBlock } from "../../components/CategoryInputBlock/CategoryInputBlock";
import { useState } from "react";
import { useMutation } from "react-query";
import { advertisementService } from "../../services/advertisementService/advertisementService";

const categoriesNames = categories.map((item) => item.name);

export interface ICreateAdForm {
  category: string;
  name: string;
  description: string;
  image: string;
}

export const CreateAd = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { isValid, errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      category: "",
      name: "",
      description: "",
      image: "",
    },
  });

  const { mutateAsync } = useMutation(
    ["createAdvertisement"],
    (createAdForm: ICreateAdForm) =>
      advertisementService.createAdvertisement(createAdForm),
    {
      onError: (error) => {
        console.log(error);
      },
      onSuccess: (data, body, context) => {
        console.log(data, body, context);
      },
    }
  );

  const onSubmit = async (createAdForm: ICreateAdForm) => {
    if (!createAdForm.category)
      setError("category", { message: "категория не выбрана" });
    return mutateAsync(createAdForm);
  };

  return (
    <Container>
      <section className={styles.main}>
        <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.categoryBlock}>
            {/* <InputLabel id="category"> Категория</InputLabel> */}

            <Select
              name="category"
              size="small"
              label="выбор категории"
              className={styles.categoryBlock__categorySelect}
              {...register(`category`)}
            >
              {categoriesNames.map((category, index) => (
                <MenuItem value={index}>{category}</MenuItem>
              ))}
            </Select>
            <p>{errors.category?.message}</p>
          </div>

          <div className={styles.inputsBlock}>
            <CategoryInputBlock
              register={register}
              label="name"
              name="Название"
              size="small"
              type="text"
              inputName="name"
              errors={errors}
              rules={{
                required: {
                  value: true,
                  message: "поле не заполнено",
                },
              }}
            />

            <CategoryInputBlock
              register={register}
              errors={errors}
              inputName="image"
              name="Фото"
              size="small"
              type="file"
              rules={{
                required: {
                  value: true,
                  message: "файл не выбран",
                },
              }}
            />

            <CategoryInputBlock
              register={register}
              errors={errors}
              label="description"
              multiline={true}
              fullWidth={true}
              rows={2}
              name="Описание"
              inputName="description"
              size="small"
              type="text"
              rules={{
                required: {
                  value: true,
                  message: "поле не заполнено",
                },
              }}
            />
          </div>

          <div className={styles.wrapper__borderBottom}></div>

          <div className={styles.btnBlock}>
            <Button type="submit" variant="contained" color="success">
              SUBMIT
            </Button>
          </div>
        </form>
      </section>
    </Container>
  );
};
