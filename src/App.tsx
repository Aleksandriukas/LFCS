import { PassportForm } from './components/PassportForm';
import { createTheme, styled, StyledEngineProvider, Theme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { LFCSContext } from './components/LFCSContext';
import { useState } from 'react';
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
}));

function App() {
    const [admin, setAdmin] = useState(false);

    return (
        <ThemeProvider theme={theme}>
            <StyledEngineProvider injectFirst>
                <CssBaseline>
                    <RootContainer>
                        <LFCSContext.Provider value={{ admin, setAdmin }}>
                            <PassportForm />
                        </LFCSContext.Provider>
                    </RootContainer>
                </CssBaseline>
            </StyledEngineProvider>
        </ThemeProvider>
    );
}

export default App;
