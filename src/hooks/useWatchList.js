const { useState } = require("react");
const { useDispatch, useSelector } = require("react-redux");
const { addItem, removeItem } = require("redux/watchlist.slice");

const useWatchList = () => {
    const { items } = useSelector((state) => state.watchList);

    const dispatch = useDispatch();

    const [message, setMessage] = useState("");

    const add = (item) => {
        dispatch(addItem(item));
        setMessage("Item added");
    };

    const remove = (id) => {
        dispatch(removeItem(id));
        setMessage("Item Removed");
    };

    const itemInList = (id) => items.find((item) => item.id === id) !== undefined;

    return { items, message, setMessage, add, remove, itemInList };
};

export default useWatchList;
