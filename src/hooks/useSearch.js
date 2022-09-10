import { searchShows } from "api";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery, setResult } from "redux/search.slice";

const useSearch = () => {
    const dispatch = useDispatch();
    const search = useSelector((state) => state.search);
    const setSearchQuery = (query) => dispatch(setQuery(query));
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        if (!search.query.trim()) {
            dispatch(setResult([]));
            return;
        }

        const timer = setTimeout(() => {
            searchShows(search.query)
                .then((res) => {
                    dispatch(setResult(res.data.results));
                })
                .catch(() => {
                    setShowError(true);
                });
        }, 500);

        return () => clearTimeout(timer);
    }, [search.query, dispatch]);

    return { search, setSearchQuery, showError, setShowError };
};

export default useSearch;
