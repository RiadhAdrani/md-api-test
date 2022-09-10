import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const LinkButton = (props) => {
    return (
        <Link {...props} to={props.to}>
            <Button
                style={{
                    color: "inherit",
                    fontWeight: "bold",
                    display: "inline-flex",
                    flexDirection: "row",
                    alignItems: "center",
                }}
                variant="filled"
            >
                {props.children}
            </Button>
        </Link>
    );
};

export default LinkButton;
