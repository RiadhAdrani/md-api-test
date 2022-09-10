import { darkTheme, lightTheme } from "styles/theme";
import { DARK, LIGHT } from "styles/theme/themes";

export function resolveCurrentTheme(mode) {
    switch (mode) {
        case DARK:
            return DARK;
        case LIGHT:
            return LIGHT;
        case "browser":
            return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
                ? DARK
                : LIGHT;
        default:
            return DARK;
    }
}

export function handleCurrentTheme(mode) {
    return mode === DARK ? darkTheme : lightTheme;
}
