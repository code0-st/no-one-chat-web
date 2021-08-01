import React from "react";
import clsx from "clsx";

const s = require('./style.module.scss')

export const CollapseAnim = ({
                                 active,
                                 children
                             }) => {
    const classNames = clsx(
        s.collapse,
        active ? s.collapse__in : s.collapse__out
    )
    return (
        <div className={classNames}>
            {children}
        </div>
    )
}
