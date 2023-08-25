//@ts-ignore
import styles from "./InputBlock.module.scss";
import { TextField } from "@mui/material";
import { FC, HTMLAttributes } from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
// import { alpha, styled } from '@mui/material/styles';
import cn from 'classnames'

export interface IInputBlock {
  placeholder?: string;
  name: string;
  label?: string;
  size: "small" | "medium";
  type: "number" | "text" | "password";
  register: UseFormRegister<any>;
  errors: string | undefined;
  rules: RegisterOptions;
  isMulti?: number;
  className?: HTMLAttributes<HTMLDivElement>
}

export const InputBlock: FC<IInputBlock> = ({ errors, name, placeholder, register, rules, size, type, label, isMulti, className }) => {

  return (
    <div className={cn(styles.main)}>
      <TextField
        type={type}
        size={size}
        className={styles.inp}
        label={label}
        multiline={Boolean(isMulti)}
        rows={isMulti}
        style={{
          borderRadius: '7px',
          overflow: 'hidden'
        }}
        {...(register && register(name, { ...rules }))}
      />

      <AnimatePresence>
        {errors && (
          <motion.p
            initial={{ height: 0, y: "-100" }}
            animate={{ height: "auto", y: 0 }}
            exit={{ height: 0, y: "-100" }}
          >
            {errors}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};