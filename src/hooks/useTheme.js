const { useSelector, useDispatch } = require("react-redux");
const { setThemeMode } = require("redux/theme.slice");
const { DARK, LIGHT } = require("styles/theme/themes");
const { resolveCurrentTheme } = require("utils/theme.util");

const useTheme = () => {
    const dispatch = useDispatch();
    const { mode } = useSelector((state) => state.theme);

    const current = resolveCurrentTheme(mode);

    const getCurrent = () => current;

    const toggle = () => {
        dispatch(setThemeMode({ mode: current === DARK ? LIGHT : DARK }));
    };

    return { getCurrent, toggle, current };
};

export default useTheme;
