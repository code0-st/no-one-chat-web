import React, {useContext} from "react";
import {ThemeContext} from "../../store/themeContext";
import clsx from "clsx";

const s = require('./style.module.scss')

export const BorderAmin = ({children}) => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className={clsx(s.border, darkMode ? s.border__dark : s.border__light)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>

            {children}
        </div>
    )
}
