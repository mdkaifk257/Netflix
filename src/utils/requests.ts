const key = import.meta.env.VITE_TMDB_API_KEY;

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}&language=en-US`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestAction: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28`,
    requestComedy: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35`,
    requestRomance: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749`,
    requestDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99`,
    requestSearch: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&include_adult=false`,
    requestBollywood: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=hi-IN&region=IN&sort_by=popularity.desc&page=1&with_original_language=hi`,
    requestBollywoodAction: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=hi-IN&region=IN&sort_by=popularity.desc&page=1&with_original_language=hi&with_genres=28`,
    requestBollywoodComedy: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=hi-IN&region=IN&sort_by=popularity.desc&page=1&with_original_language=hi&with_genres=35`,
    requestBollywoodRomance: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=hi-IN&region=IN&sort_by=popularity.desc&page=1&with_original_language=hi&with_genres=10749`
};

export default requests;
