import { CssBaseline, ThemeProvider } from "@mui/material";
import RouterConfig from "./routing/RouterConfig";
import "styles/globalStyles.css";
import { handleCurrentTheme } from "utils/theme.util";
import useTheme from "hooks/useTheme";

function App() {
    const { current } = useTheme();

    return (
        <ThemeProvider theme={handleCurrentTheme(current)}>
            <CssBaseline />
            <RouterConfig />
        </ThemeProvider>
    );
}

export default App;
