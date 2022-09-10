import { Accordion, AccordionDetails, AccordionSummary, Divider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShowEpisode from "./Show.episode";

const ShowSeason = ({ season }) => {
    return (
        <Accordion key={season._id}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h5">{season.name} </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={{ opacity: 0.8, fontSize: "0.95rem" }}>
                    {season.overview}
                </Typography>
                <Stack direction={"column"} marginTop="20px" spacing={2}>
                    {season.episodes.map((episode) => {
                        return (
                            <Stack direction={"column"} key={episode.id}>
                                <Divider sx={{ marginBottom: "15px" }} />
                                <ShowEpisode episode={episode} />
                            </Stack>
                        );
                    })}
                </Stack>
            </AccordionDetails>
        </Accordion>
    );
};

export default ShowSeason;
