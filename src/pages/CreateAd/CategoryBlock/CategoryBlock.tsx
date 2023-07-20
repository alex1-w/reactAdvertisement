//@ts-ignore
import styles from "../CategoryBlock/CategoryBlock.module.scss";
import {
  IInputBlock,
  InputBlock,
} from "../../../components/UI/InputBlock/InputBlock";
import { FC } from "react";

interface ICategoryBlock extends IInputBlock {
    heading: string;
}

export const CategoryBlock: FC<ICategoryBlock> = ({
  errors,
  name,
  register,
  rules,
  size,
  type,
  label,
  placeholder,
  heading,
  isMulti,
}) => {
  return (
    <div className={styles.main}>
      <h3>{heading}</h3>
      <InputBlock
        errors={errors}
        name={name}
        register={register}
        size={size}
        label={label}
        rules={rules}
        type={type}
        isMulti={isMulti}
      />
    </div>
  );
};
