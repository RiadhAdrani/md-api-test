import { Backdrop, CircularProgress, Container, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { getBackdropImage, getSeasonData, getShowData } from "api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShowHeader from "./Show.header";
import ShowSeason from "./Show.season";
import ShowWrapper from "./Show.wrapper";

const Show = () => {
    const id = useParams().id;

    const [data, setData] = useState({});
    const [seasons, setSeasons] = useState([]);

    useEffect(() => {
        async function fetch() {
            try {
                const _data = (await getShowData(id)).data;

                const _seasons = [];

                for (let i = 0; i < _data.number_of_seasons; i++) {
                    _seasons.push((await getSeasonData(id, i + 1)).data);
                }

                setSeasons(_seasons);
                setData(_data);
            } catch (error) {
                setData(false);
            }
        }

        fetch();
    }, [id]);

    // In case an error happens during data fetching
    if (data === false) {
        return <Typography> Unable to retrieve show </Typography>;
    }

    // circular progress
    if (Object.keys(data).length === 0) {
        return (
            <Backdrop open={true}>
                <CircularProgress color="inherit" />
            </Backdrop>
        );
    }

    return (
        <Stack
            sx={{
                backgroundImage: `url("${getBackdropImage(data.backdrop_path)}")`,
                flexGrow: 1,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
            }}
        >
            <ShowWrapper>
                <Container maxWidth="lg">
                    <ShowHeader data={data} />
                    <Stack direction={"column"} marginTop="20px">
                        {seasons.map((season) => {
                            return <ShowSeason key={season._id} season={season} />;
                        })}
                    </Stack>
                </Container>
            </ShowWrapper>
        </Stack>
    );
};

export default Show;
