import styled from "@emotion/styled";
import { Chip, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { getShowPoster } from "api";
import AddButton from "components/shared/AddButton";
import useWatchList from "hooks/useWatchList";

const Wrapper = styled(Stack)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
    },
}));

const InfoWrapper = styled(Stack)(({ theme }) => ({
    [theme.breakpoints.down("md")]: { marginBottom: "10px", alignItems: "center" },
}));

const ShowHeader = ({ data }) => {
    const { add, itemInList, remove } = useWatchList();

    return (
        <Wrapper direction={"row"} alignItems="center" spacing={2}>
            <InfoWrapper direction={"column"} spacing={2}>
                <Typography variant="h3">{data.name}</Typography>
                <Stack direction={"row"} flexWrap="wrap">
                    {[
                        ...data.created_by.map((auth) => ({
                            content: auth.name,
                            key: auth.id,
                        })),
                        ...data.genres.map((genre) => ({
                            content: genre.name,
                            key: genre.id,
                        })),
                    ].map((_item) => {
                        return (
                            <Chip
                                key={_item.key}
                                label={_item.content}
                                style={{ margin: "2.5px" }}
                            />
                        );
                    })}
                </Stack>
                <Typography>{data.overview}</Typography>
                <AddButton
                    itemIsAdded={itemInList(data.id)}
                    onClick={() => {
                        if (itemInList(data.id)) remove(data.id);
                        else add(data);
                    }}
                />
            </InfoWrapper>
            <img
                src={getShowPoster(data.poster_path)}
                width={"auto"}
                height={300}
                alt="show poster"
            />
        </Wrapper>
    );
};

export default ShowHeader;
