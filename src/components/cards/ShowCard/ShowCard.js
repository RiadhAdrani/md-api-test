import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { getShowPoster } from "api";
import { useNavigate } from "react-router-dom";

const ShowCard = ({ item, action }) => {
    const poster = getShowPoster(item.poster_path);
    const navigate = useNavigate();

    return (
        <Box key={item.id}>
            <Card
                style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >
                <CardActionArea
                    onClick={() => {
                        navigate(`/show/${item.id}`);
                    }}
                >
                    <CardMedia component={"img"} height={300} image={poster} />
                    <CardContent>
                        <Typography variant="h6">{item.original_name}</Typography>
                        <Typography variant="body2" sx={{ opacity: "0.8" }}>
                            Average score : {item.vote_average} ({item.vote_count})
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions style={{ marginTop: "auto", padding: "15px 10px" }}>
                    {action}
                </CardActions>
            </Card>
        </Box>
    );
};

export default ShowCard;
