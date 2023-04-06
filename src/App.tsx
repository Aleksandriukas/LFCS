import React from 'react';

import './App.css';
import { PassportForm } from './components/PassportForm';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';

function App() {
    const theme = createTheme({
        palette: {
            primary: {
                main: '##71cff3',
            },
        },
    });

    return (
        <div className="container">
            <div className="background">
                <PassportForm />
            </div>
        </div>
    );
}

export default App;
