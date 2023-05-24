import React, {
    SelectHTMLAttributes,
    DetailedHTMLProps,
    ChangeEvent,
} from 'react'
import s from './SuperSelect.module.css'
import {idID} from "@mui/material/locale";
import {ThemesElemType} from "../../../hw12/HW12";

type DefaultSelectPropsType = DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options: Array<ThemesElemType>
    value: number
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = ({
                                                         options,
                                                         className,
                                                         onChange,
                                                         value,
                                                         onChangeOption,
                                                         ...restProps
                                                     }) => {

    const currentValue = options.filter(o => o.id === value)
    /*console.log(currentValue[0].id)*/

    const mappedOptions: any = options
        ? options.map((o) => (
            <option
                id={'hw7-option-' + o.id}
                className={s.option}
                key={o.id}
                value={o.id}
            >
                {o.value}
            </option>
        ))
        : [] // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e)
        if (onChangeOption) {
            onChangeOption(+e.currentTarget.value)

        }

    }


    const finalSelectClassName = s.select + (className ? ' ' + className : '')

    return (
        <select
            className={finalSelectClassName}
            onChange={onChangeCallback}
            value={currentValue[0].id}
            {...restProps}
        >
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
