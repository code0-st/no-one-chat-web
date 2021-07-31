import React, {useContext} from "react";
import {RouterIndex} from "./routers/RouterIndex";
import {DARK_MODE_ON, LIGHT_MODE_ON, ThemeContext} from "./store/themeContext";
import clsx from "clsx";
import {Switch} from "antd";

const s = require('./style.module.scss')

export const App = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className={s.root}>
            <nav className={clsx(s.top_bar, darkMode ? s.top_bar__dark : s.top_bar__light)}>
                <div></div>
                <div>
                    <Switch value={theme.state.darkMode}
                            checked={theme.state.darkMode}
                            onChange={() => {
                                theme.dispatch({
                                    type: darkMode
                                        ? LIGHT_MODE_ON
                                        : DARK_MODE_ON
                                })
                            }}/>
                </div>
            </nav>
            <div className={clsx(s.content, darkMode && s.content_dark)}>
                <RouterIndex/>
            </div>
        </div>
    )
}


