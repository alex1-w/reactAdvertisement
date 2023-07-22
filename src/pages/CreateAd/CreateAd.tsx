//@ts-ignore
import styles from "./CreateAd.module.scss";
import { Button } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { Container } from "../../components/Container/Container";
import { categories } from "../../data/categories.data";
import { useMutation } from "react-query";
import { advertisementService } from "../../services/advertisementService/advertisementService";
import { CategoryBlock } from "./CategoryBlock/CategoryBlock";
import { AnimatePresence, motion } from "framer-motion";
import ReactSelect from "react-select";
import { InputBlock } from "../../components/UI/InputBlock/InputBlock";
import { DropzoneBlock } from "../../components/UI/DropzoneBlock/DropzoneBlock";

const getValue = (value: string) => {
  return value ? categories.find((option) => option.value === value) : "";
};

export interface ICreateAdForm {
  category: string;
  title: string;
  description: string;
  image: string;
}

export const CreateAd = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { isValid, errors },
    watch,
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      category: "",
      title: "",
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

  const img = watch("image");
  const onSubmit = async (createAdForm: ICreateAdForm) => {
    console.log(img[0]);
    // if (!createAdForm.category)
    //   setError("category", { message: "категория не выбрана" });
    // return mutateAsync(createAdForm);
    // console.log(createAdForm);
    // console.log(createAdForm);
  };

  return (
    <Container>
      <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.mainBlock}>
          <div className={styles.inputBlock}>
            <h3>Название</h3>
            <InputBlock
              errors={errors}
              name="title"
              register={register}
              rules={{
                required: { value: true, message: "поле обязательно" },
                minLength: { value: 2, message: "min - 2" },
              }}
              size="small"
              type="text"
              label="title"
              placeholder="title"
            />
          </div>

          <div className={styles.categoryBlock}>
            <h3>Категория</h3>
            <Controller
              rules={{ required: { value: true, message: "обязательно" } }}
              control={control}
              name="category"
              render={({ field: { name, value, onChange } }) => (
                <div className={styles.main}>
                  <ReactSelect
                    value={getValue(value)}
                    options={categories}
                    onChange={(newValue) => onChange((newValue as any).value)}
                  />

                  <AnimatePresence>
                    {errors[name] && (
                      <motion.p
                        className={styles.categoryBlock__errorText}
                        initial={{ opacity: 0, y: "-100", height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto" }}
                        exit={{ height: 0, y: "-100", opacity: 0 }}
                      >
                        {errors[name]?.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              )}
            />
          </div>

          <CategoryBlock
            errors={errors}
            name="description"
            register={register}
            rules={{
              required: {
                value: true,
                message: "поле обязательно",
              },
              minLength: { value: 2, message: "min - 2" },
            }}
            size="medium"
            heading="Описание"
            type="text"
            label="title"
            placeholder="title"
            isMulti={4}
          />

          <DropzoneBlock control={control} errors={errors} name="image" />
        </div>

        <div className={styles.wrapper__borderBottom}></div>

        <Button type="submit" variant="contained" color="success">
          SUBMIT
        </Button>
      </form>
    </Container>
  );
};
