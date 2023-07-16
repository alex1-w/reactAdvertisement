//@ts-ignore
import styles from "../CategoryInputBlock/CategoryInputBlock.module.scss";
import { TextField } from "@mui/material";
import { FC } from "react";
import { ICreateAdForm } from "../../pages/CreateAd/CreateAd";
import { RegisterOptions, UseFormRegister } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";

interface ICategoryInputBlockProps {
  type: "number" | "text" | "file";
  size: "small" | "medium";
  label?: string;
  name: string;
  multiline?: boolean;
  rows?: number;
  fullWidth?: boolean;
  register?: UseFormRegister<any>;
  inputName: string;
  rules: RegisterOptions;
  errors: any;
}

export const CategoryInputBlock: FC<ICategoryInputBlockProps> = ({
  label,
  name,
  size,
  type,
  multiline,
  rows,
  fullWidth,
  register,
  inputName,
  rules,
  errors,
}) => {
  console.log(errors);

  return (
    <div className={styles.inputBlock}>
      <p>{name}</p>
      <div className={styles.inputBlock__inpField}>
        <TextField
          {...(register && register(inputName, { ...rules }))}
          multiline={multiline}
          rows={rows}
          fullWidth={fullWidth}
          type={type}
          size={size}
          label={label}
          className={styles.inputBlock__item}
        />
        <AnimatePresence>
          {errors[inputName] && (
            <motion.p
              initial={{ height: 0, x: "-100%", opacity: 0 }}
              animate={{ height: "auto", x: 0, opacity: 1 }}
              exit={{ height: 0, x: "-100", opacity: 0 }}
            >
              {errors[inputName].message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
