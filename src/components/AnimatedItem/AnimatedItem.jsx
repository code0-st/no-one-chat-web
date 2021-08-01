import React from "react";

const s = require('./style.module.scss')

export const AnimatedItem = ({
                                 children
                             }) => {
    return (
        <div className={s.anim}>
            {children}
        </div>
    )
}
