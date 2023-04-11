import { PassportForm } from "./components/PassportForm";
import {
  createTheme,
  styled,
  StyledEngineProvider,
  Theme,
  ThemeProvider,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#71cff3",
    },
  },
});

const RootContainer = styled("div", {
  label: "RootContainer",
})(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  overflowX: "hidden",
  overflowY: "auto",
  background: theme.palette.primary.main,
}));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <CssBaseline>
          <RootContainer>
            <PassportForm />
          </RootContainer>
        </CssBaseline>
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default App;
