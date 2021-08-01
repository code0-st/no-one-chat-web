import React, {useContext} from "react";
import {RouterIndex} from "./routers/RouterIndex";
import {DARK_MODE_ON, LIGHT_MODE_ON, ThemeContext} from "./store/themeContext";
import clsx from "clsx";
import {Switch} from "antd";
import {LightIcon, NightIcon} from "./static/icons/icons";
import {AnimatedItem} from "./components/AnimatedItem/AnimatedItem";
import {CollapseAnim} from "./components/AnimatedItem/CollapseAnim";

const s = require('./style.module.scss')

export const App = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className={s.root}>
            <nav className={clsx(s.top_bar, darkMode ? s.top_bar__dark : s.top_bar__light)}>
                <div>No one chat!</div>
                <div className={s.theme_switch}>
                    <Switch value={theme.state.darkMode}
                            checked={theme.state.darkMode}
                            onChange={() => {
                                theme.dispatch({
                                    type: darkMode
                                        ? LIGHT_MODE_ON
                                        : DARK_MODE_ON
                                })
                            }}/>
                    <CollapseAnim active={darkMode}>
                        <AnimatedItem>
                            <NightIcon/>
                        </AnimatedItem>
                    </CollapseAnim>
                    <CollapseAnim active={!darkMode}>
                        <AnimatedItem>
                            <LightIcon/>
                        </AnimatedItem>
                    </CollapseAnim>
                </div>
            </nav>
            <div className={clsx(s.content, darkMode && s.content_dark)}>
                <RouterIndex/>
            </div>
        </div>
    )
}


