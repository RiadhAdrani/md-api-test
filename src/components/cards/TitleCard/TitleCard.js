import { Card, Typography } from "@mui/material";

const TitleCard = (props) => {
    return (
        <Card variant="outlined" style={{ textAlign: "center", margin: "25px 0" }}>
            <Typography variant="h4" align="center" padding="10px 0">
                {props.children}
            </Typography>
        </Card>
    );
};

export default TitleCard;
