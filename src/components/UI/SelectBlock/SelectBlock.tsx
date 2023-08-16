//@ts-ignore
import styles from "./SelectBlock.module.scss";
import { Control, Controller, RegisterOptions } from "react-hook-form"
import { FC } from "react";
import ReactSelect from "react-select";
import { AnimatePresence, motion } from "framer-motion";
import { ICategory } from "../../../types/ICategoryOption";

interface ISelect {
    name: string
    errors: any;
    rules: RegisterOptions;
    // control: Control<ICreateAdForm>;
    control: Control<any>;
    options: ICategory[]
    title: string;
}

export const SelectBlock: FC<ISelect> = ({ control, errors, name, rules, options, title }) => {

    const getValue = (value: string) => {
        return value ? options.find((option: ICategory) => option.name === value) : "";
    }
    
    return (
        <div className={styles.categoryBlock}>
            <h3>{title}</h3>

            <Controller
                name={name}
                rules={rules}
                control={control}
                render={({ field: { name, value, onChange } }) => (
                    <div className={styles.categoryBlock__selectBlock}>
                        <ReactSelect
                            // placeholder='категория'
                            options={options.map((item: ICategory) => {
                                return ({
                                    value: String(item.id),
                                    // value: item.id,
                                    label: item.name
                                } as any)
                            })}
                            value={getValue(value)}
                            onChange={(newValue) => onChange((newValue as any).value)}
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
                )}
            />
        </div>
    )
}