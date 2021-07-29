import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'normalize.css';
import {App} from './App';
import {ThemeProvider} from "./store/themeContext";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
