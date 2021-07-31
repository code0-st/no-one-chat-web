import React, {useContext} from "react";
import {ThemeContext} from "../../store/themeContext";
import clsx from "clsx";

const s = require('./style.module.scss')

export const ParamItem = ({
                              label,
                              children,
                              ...props
                          }) => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className={s.param}>
            <label className={clsx(
                s.param_label, darkMode
                    ? s.param_label__dark
                    : s.param_label__light)}>
                {label}
            </label>
            <div className={s.param_field + ' ' + props?.className} >{children}</div>
        </div>
    )

}
