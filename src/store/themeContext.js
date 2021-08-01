import {createContext, useReducer} from "react";

export const LIGHT_MODE_ON = "LIGHT_MODE_ON";
export const DARK_MODE_ON = "DARK_MODE_ON";

const initialState = {
    darkMode: localStorage.getItem('darkMode') === 'true',
    palette: {
        dark: {
            primary: '#f0fcf8',
            secondary: '#7f808d',
            bg_primary: '#212a39',
            bg_secondary: '#32425a',
            message: '#f1633f'
        },
        light: {
            primary: '#2d3132',
            secondary: '#444849',
            bg_primary: '#ffffff',
            bg_secondary: '#ebeff7',
            message: '#4a3ec8',
        },
    }
};

const themeReducer = (state, action) => {
    switch (action.type) {
        case LIGHT_MODE_ON: {
            localStorage.setItem('darkMode', 'false')
            return {darkMode: false}
        }
        case DARK_MODE_ON: {
            localStorage.setItem('darkMode', 'true')
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

