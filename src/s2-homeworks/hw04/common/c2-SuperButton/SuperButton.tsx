import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
   // color?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
      //  color,
        xType,
        className,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    // const finalClassName = `${s.button} ${color==='red' ? s.red : s.default} ${disabled ? s.disabled : ''}`
    const finalClassName = s.button + (disabled ? ' ' + s.disabled : xType === 'red' ? ' ' + s.red : ' ' + s.secondary) + (className ? ' ' + className : ' ' + s.defaults) // задачка на смешивание классов

    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
