import { createTheme, responsiveFontSizes } from "@mui/material";
import globalTheme from "./globalTheme";
import { LIGHT } from "./themes";

let lightTheme = createTheme({
    ...globalTheme(LIGHT),
    palette: {
        mode: LIGHT,
        ...globalTheme(LIGHT).palette,
        background: {
            default: "#f4f4f4",
        },
    },
});

lightTheme = responsiveFontSizes(lightTheme);

export default lightTheme;
