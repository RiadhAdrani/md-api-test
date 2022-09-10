import { Container } from "@mui/system";
import ShowCard from "components/cards/ShowCard";
import TitleCard from "components/cards/TitleCard";
import ItemsGrid from "components/containers/ItemsGrid";
import AddButton from "components/shared/AddButton";
import useWatchList from "hooks/useWatchList";

const WatchList = () => {
    const { items, remove } = useWatchList();

    return (
        <Container maxWidth="xl">
            <TitleCard>Watch List</TitleCard>
            <ItemsGrid>
                {items.map((item) => {
                    const action = <AddButton itemIsAdded={true} onClick={() => remove(item.id)} />;

                    return <ShowCard item={item} key={item.id} action={action} />;
                })}
            </ItemsGrid>
        </Container>
    );
};

export default WatchList;
