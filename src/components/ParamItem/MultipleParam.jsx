import React from "react";
import clsx from "clsx";

const s = require('./style.module.scss')

export const MultipleParam = ({
                                  param,
                                  activeParamIds,
                                  onChange,
                                  disabled,
                                  ...props
                              }) => {
    const classNames = clsx(
        s.selection,
        props?.darkMode
            ? s.selection__dark
            : s.selection__light,
        !!activeParamIds.find(item => item === +param?.id) && (props?.darkMode
        ? s.selection_active__dark
        : s.selection_active__light),
        disabled && s.selection__disabled,
    )
    return (
        <div className={classNames} onClick={() => onChange(param.id)}>
            {param.name}
        </div>
    )
}
