import React, {useContext} from "react";
import clsx from "clsx";
import {ThemeContext} from "../../store/themeContext";

const s = require('./style.module.scss')

export const Button = ({
                           label,
                           icon,
                           onClick,
                           size = "xs",
                           ...props
                       }) => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const classNames = clsx(
        s.button,
        darkMode ? s.button__dark : s.button__light,
        size === "xs" && s.button__xs,
        size === "md" && s.button__md,
        size === "lg" && s.button__lg,
        props?.className,
    )

    return <div className={classNames} onClick={onClick} {...props}>
        <div className={s.label}>{label}</div>
        {icon && <div className={s.icon}>{icon}</div>}
    </div>
}
