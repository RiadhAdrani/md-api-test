import axios from "axios";

export const axiosTMDB = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        // TODO : add your api key.
        api_key: "my-api-key",
    },
});
