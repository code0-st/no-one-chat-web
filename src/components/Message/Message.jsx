import React, {memo, useContext} from "react";
import clsx from "clsx";
import {ThemeContext} from "../../store/themeContext";
import {formatIsoToTime} from "../../helpers/dateHelpers";

const s = require('./style.module.scss')

export const Message = memo(({
                                 message,
                             }) => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const {id, date, isMy, text} = message

    const classNames = clsx(
        s.message,
        darkMode ? s.message__dark : s.message__light,
        isMy && s.message__my,
    )

    if (isMy) {
        return (
            <div className={classNames}>
                <div className={s.time}>{formatIsoToTime(date)}</div>
                <div className={s.text}>{text}</div>
            </div>
        )
    }
    return (
        <div className={classNames}>
            <div className={s.avatar}>?</div>
            <div className={s.text}>{text}</div>
            <div className={s.time}>{formatIsoToTime(date)}</div>
        </div>
    )
})
