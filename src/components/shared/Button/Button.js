import { Button as MuiButton } from "@mui/material";

const Button = (props) => {
    return (
        <MuiButton
            {...props}
            color="inherit"
            style={{ fontWeight: "bold", textTransform: "initial" }}
        >
            {props.children}
        </MuiButton>
    );
};

export default Button;
