//@ts-ignore
import styles from '../SelectBlockItem/SelectBlockItem.module.scss'
import { FC, useState } from 'react'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Control, Controller, RegisterOptions, UseFormRegister } from 'react-hook-form';
import { ICategory } from '../../../types/ICategoryOption';
import { IAdvertisement } from '../../../services/advertisementService/advertisementservice.interface';

interface IOption {
    label: string;
    value: string;
}

interface ISelectBlockProps {
    name: string
    errors: any;
    rules: RegisterOptions;
    register: UseFormRegister<any>;
    options: any
    control: Control<IAdvertisement>;
}
export const SelectBlockItem: FC<ISelectBlockProps> = ({ control, errors, name, options, register, rules }) => {
    const [selectValue, setSelectValue] = useState<any>()

    const getValue = (value: string) => {
        return value ? options.find((option: ICategory) => option.name === value) : "";
    }

    return (
        <div className={styles.categoryBlock}>
            <h3>{name}</h3>
            <Controller
                name='name'
                control={control}
                rules={rules}
                render={({ field: { name, onChange } }) => (

                    <Select
                        variant='filled'
                        value={getValue}
                        label="Age"
                    // onChange={newValue => onChange((newValue as IOption).value)}
                    >
                        {options?.map((option: ICategory) => (
                            <MenuItem value={option.name} >
                                {option.name}
                            </MenuItem>
                        ))}
                    </Select>
                )}
            />
        </div>
    )
}