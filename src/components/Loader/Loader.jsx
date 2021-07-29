import React from "react";

const s = require('./style.module.scss')


export const Loader = ({
                           label,
                           fullScreen = false,
                       }) => {
    return (
        <div className={s.loader + ' ' + fullScreen && s.loader_full_screen}>
            <div className={s.loader_lines}>
                <div className={s.loader_item}/>
                <div className={s.loader_item}/>
                <div className={s.loader_item}/>
            </div>
            {label && <div className={s.loader_label}>{label}</div>}
        </div>
    )
}

