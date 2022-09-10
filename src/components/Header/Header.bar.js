import styled from "@emotion/styled";
import { Toolbar } from "@mui/material";

const HeaderBar = styled(Toolbar)(({ theme }) => ({
    position: "relative",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        " > *": {
            margin: "10px 0",
        },
    },
}));

export default HeaderBar;
