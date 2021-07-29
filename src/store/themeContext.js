import {createContext, useReducer} from "react";

export const LIGHT_MODE_ON = "LIGHT_MODE_ON";
export const DARK_MODE_ON = "DARK_MODE_ON";

const initialState = {
    darkMode: false
};

const themeReducer = (state, action) => {
    switch (action.type) {
        case LIGHT_MODE_ON: {
            return {darkMode: false}
        }
        case DARK_MODE_ON: {
            return {darkMode: true}
        }
        default:
            return state
    }
}

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(themeReducer, initialState);

    return <ThemeContext.Provider value={{state, dispatch}}>
        {props.children}
    </ThemeContext.Provider>

}

