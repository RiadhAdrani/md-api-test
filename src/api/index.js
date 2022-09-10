const { axiosTMDB } = require("utils/axios");

export const searchShows = (query, page = 1) => {
    return axiosTMDB.get("search/tv", {
        params: { query, page },
    });
};

export const getShowPoster = (ref) => {
    return ref
        ? `http://image.tmdb.org/t/p/w500/${ref}`
        : "http://lexingtonvenue.com/media/poster-placeholder.jpg";
};

export const getBackdropImage = (ref) => {
    return `http://image.tmdb.org/t/p/w500/${ref}`;
};

export const getShowData = (id) => {
    return axiosTMDB.get(`tv/${id}`);
};

export const getSeasonData = (id, number) => {
    return axiosTMDB.get(`tv/${id}/season/${number}`);
};

export const getShowEpisodes = (id) => {
    return axiosTMDB.get(`tv/${id}/episode_groups`);
};

export const getEpisodeThumbnail = (ref) => {
    return ref
        ? `http://image.tmdb.org/t/p/w500${ref}`
        : "https://res.cloudinary.com/hkf2ycaep/image/fetch/d_project-placeholder.png,f_auto,fl_lossy/https:/assets/project-placeholder-c2559bea6038f770e3aa3c57b731e43dfb0d70ab958b22a0bfa287b11ed51634.png";
};
