import { Tasks } from "./pages/Tasks";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    htmlFontSize: 10,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Tasks />
    </ThemeProvider>
  );
}

export default App;
