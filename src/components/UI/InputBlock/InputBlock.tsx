//@ts-ignore
import styles from "./InputBlock.module.scss";
import { TextField } from "@mui/material";
import { FC } from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
// import { alpha, styled } from '@mui/material/styles';

export interface IInputBlock {
  placeholder?: string;
  name: string;
  label?: string;
  size: "small" | "medium";
  type: "number" | "text" | "password";
  register: UseFormRegister<any>;
  errors: any;
  rules: RegisterOptions;
  //   isMulti?: { multiline: boolean; rows: number };
  isMulti?: number;
}

export const InputBlock: FC<IInputBlock> = ({errors, name, placeholder,  register,  rules, size, type, label, isMulti, }) => {
  return (
    <div className={styles.main}>
      <TextField
        // color="info"
        // variant="outlined"
        
        placeholder={placeholder}
        type={type}
        size={size}
        className={styles.inp}
        label={label}
        multiline={Boolean(isMulti)}
        rows={isMulti}
        style={{
          // borderRadius:'10px',
          // overflow: 'hidden'
          
        }}

        {...(register && register(name, { ...rules }))}
      />

      <AnimatePresence>
        {errors[name] && (
          <motion.p
            initial={{ height: 0, y: "-100" }}
            animate={{ height: "auto", y: 0 }}
            exit={{ height: 0, y: "-100" }}
          >
            {errors[name].message}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};
