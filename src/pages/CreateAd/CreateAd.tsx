//@ts-ignore
import styles from "./CreateAd.module.scss";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { Container } from "../../components/Container/Container";
import { useMutation, useQuery } from "react-query";
import { advertisementService } from "../../services/advertisementService/advertisementService";
import { CategoryBlock } from "./CategoryBlock/CategoryBlock";
import { InputBlock } from "../../components/UI/InputBlock/InputBlock";
import { enqueueSnackbar } from "notistack";
import { SelectBlock } from "../../components/UI/SelectBlock/SelectBlock";
import { categoryService } from "../../services/categoryService/categoryService";

export interface ICreateAdForm {
  category: string;
  name: string;
  description: string;
  image: string;
}

export const CreateAd = () => {
  const { register, handleSubmit, control, formState: { isValid, errors }, watch, reset } = useForm(
    {
      mode: "onBlur",
      reValidateMode: "onChange",
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
        enqueueSnackbar("ошибка", { variant: "error" });
      },
      onSuccess: (data, body, context) => {
        console.log(data, body, context);
        enqueueSnackbar("объявление добавлено", { variant: "success" });
      },
    }
  );

  const { data, isLoading } = useQuery(
    ['categories-options'],
    () => categoryService.getCategories(),
  )

  const onSubmit = async (createAdForm: ICreateAdForm) => {
    console.log(createAdForm);
    mutateAsync(createAdForm)
    reset()
  };

  return (

    <div className={styles.wrapper}>

      <Container>
        <form className={styles.main} onSubmit={handleSubmit(onSubmit)}>
          <h1>Создание объявления</h1>
          <div className={styles.mainBlock}>

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
                label="title"
                placeholder="title"
              />
            </div>

            {
              isLoading
                ?
                <p>loadiong</p>
                :
                <div className={styles.selectBlock}>{
                  data?.data &&
                  <SelectBlock
                    control={control}
                    errors={errors}
                    name="category"
                    options={data?.data}
                    rules={{}}
                  />
                }</div>
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
            {/* <DropzoneBlock control={control} errors={errors} name="image" /> */}

          </div>

          <div className={styles.main__borderBottom}></div>

          <Button type="submit" variant="contained" color="success">
            SUBMIT
          </Button>
        </form>
      </Container>


    </div>

  );
};
