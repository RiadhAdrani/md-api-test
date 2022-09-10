import { Container } from "@mui/system";
import ShowCard from "components/cards/ShowCard";
import TitleCard from "components/cards/TitleCard";
import ItemsGrid from "components/containers/ItemsGrid";
import AddButton from "components/shared/AddButton";
import useSearch from "hooks/useSearch";
import useWatchList from "hooks/useWatchList";
import React from "react";

const Home = () => {
    const { search } = useSearch();
    const { itemInList, add, remove } = useWatchList();

    return (
        <Container maxWidth="xl">
            <TitleCard>
                {!search.query.trim()
                    ? "Start Searching"
                    : search.result.length > 0
                    ? `You are searching for "${search.query}"`
                    : `No result for your query "${search.query}"`}
            </TitleCard>
            <ItemsGrid>
                {search.result.map((item) => {
                    const faved = itemInList(item.id);

                    const action = (
                        <AddButton
                            itemIsAdded={faved}
                            onClick={() => {
                                if (faved) remove(item.id);
                                else add(item);
                            }}
                        />
                    );

                    return <ShowCard item={item} key={item.id} action={action} />;
                })}
            </ItemsGrid>
        </Container>
    );
};

export default Home;
