import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './static/fonts/fonts.css'
import 'antd/dist/antd.css';
import './index.css'

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
