import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { getEpisodeThumbnail } from "api";

const Wrapper = styled(Stack)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        " >:not(style)+:not(style)": {
            marginLeft: "0px",
            marginTop: "10px",
        },
        " > div > span": {
            WebkitLineClamp: "unset",
        },
    },
}));

const ShowEpisode = ({ episode }) => {
    return (
        <Wrapper direction={"row"} key={episode.id} spacing={3} alignItems={"flex-start"}>
            <img src={getEpisodeThumbnail(episode.still_path)} alt={episode.name} width="200" />
            <Stack direction="column" spacing={1}>
                <Typography variant="p" fontWeight={"bold"}>
                    {episode.name}
                </Typography>
                <Typography
                    variant="p"
                    fontSize="0.85rem"
                    sx={{
                        opacity: "0.75",
                        display: "-webkit-box",
                        overflow: "hidden",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 5,
                    }}
                >
                    {episode.overview}
                </Typography>
            </Stack>
        </Wrapper>
    );
};

export default ShowEpisode;
