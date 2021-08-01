import React from "react";
import clsx from "clsx";

const s = require('./style.module.scss')

export const FadeItems = ({
                             active,
                             children
                         }) => {
    return (
        <div className={clsx(s.fade, active && s.fade_active)}>
            {children}
        </div>
    )
}
