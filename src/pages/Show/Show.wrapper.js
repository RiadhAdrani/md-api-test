import styled from "@emotion/styled";
import { Stack } from "@mui/system";
import useTheme from "hooks/useTheme";
import { DARK } from "styles/theme/themes";

const Wrapper = styled(Stack)(({ theme }) => {
    const { current } = useTheme();
    return {
        flexGrow: 1,
        backgroundColor: current === DARK ? "#1e1e1eee" : "#f1f1f1dd",
        backdropFilter: "blur(5px)",
        padding: "20px",
        [theme.breakpoints.down("sm")]: {
            padding: "20px 5px",
        },
    };
});

export default Wrapper;
