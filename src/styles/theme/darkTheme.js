import { createTheme, responsiveFontSizes } from "@mui/material";
import globalTheme from "./globalTheme";
import { DARK } from "./themes";

let darkTheme = createTheme({
    ...globalTheme(DARK),
    palette: {
        mode: DARK,
        ...globalTheme(DARK).palette,
        background: {
            default: "#141414",
        },
    },
});

darkTheme = responsiveFontSizes(darkTheme);

export default darkTheme;
