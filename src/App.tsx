import { PassportForm } from './components/PassportForm';
import { createTheme, styled, StyledEngineProvider, Theme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LFCSContext } from './components/LFCSContext';
import { useState } from 'react';
import { TouchIdForm } from './components/TouchIdForm';
import { PhotoForm } from './components/PhotoForm';
import { TicketForm } from './components/TicketForm';
const theme = createTheme({
    palette: {
        primary: {
            main: '#71cff3',
        },
    },
});

const RootContainer = styled('div', {
    label: 'RootContainer',
})(({ theme }) => ({
    width: '100vw',
    height: '100vh',
    overflowX: 'hidden',
    overflowY: 'auto',
    background: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
}));

function App() {
    const [admin, setAdmin] = useState(false);

    return (
        <ThemeProvider theme={theme}>
            <StyledEngineProvider injectFirst>
                <CssBaseline>
                    <RootContainer>
                        <LFCSContext.Provider value={{ admin, setAdmin }}>
                            <BrowserRouter>
                                <Routes>
                                    <Route path="/" element={<PassportForm />} />
                                    <Route path="/PassportForm" element={<PassportForm />} />
                                    <Route path="/PhotoForm" element={<PhotoForm />} />
                                    <Route path="/TouchIdForm" element={<TouchIdForm />} />
                                    <Route path="/TicketForm" element={<TicketForm />}></Route>
                                    <Route />
                                </Routes>
                            </BrowserRouter>
                        </LFCSContext.Provider>
                    </RootContainer>
                </CssBaseline>
            </StyledEngineProvider>
        </ThemeProvider>
    );
}

export default App;
