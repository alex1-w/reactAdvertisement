//@ts-ignore
import styles from "./SelectBlock.module.scss";
import { Control, Controller, RegisterOptions } from "react-hook-form"
import { FC } from "react";
import ReactSelect from "react-select";
import { AnimatePresence, motion } from "framer-motion";
import { ICategory } from "../../../types/ICategoryOption";

interface ISelect {
    name: string
    errors: string | undefined;
    rules: RegisterOptions;
    control: Control<any>;
    options: ICategory[]
    title: string;
    register?: any
}

export const SelectBlock: FC<ISelect> = ({ control, errors, name, rules, options, title, register }) => {

    const getValue = (value: any) => {
        // console.log(value);
        return value ? options.find((option: ICategory) => option.name === value) : 1;
    }

    return (
        <div className={styles.categoryBlock}>
            <h3>{title}</h3>

            <Controller
                {...register && register(name)}
                name={name}
                rules={rules}
                control={control}
                render={({ field: { name, value, onChange } }) => (
                    <div className={styles.categoryBlock__selectBlock}>
                        <ReactSelect
                            options={options.map((item: ICategory) => {
                                return ({
                                    value: item.id,
                                    label: item.name
                                } as any)
                            })}
                            value={getValue(value)}
                            onChange={(newValue) => onChange((newValue as any).value)}
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
                )}
            />
        </div>
    )
}