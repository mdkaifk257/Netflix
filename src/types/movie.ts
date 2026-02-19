export interface Movie {
    id: number;
    title?: string;
    name?: string;
    original_name?: string;
    original_language?: string;
    release_date?: string;
    backdrop_path?: string;
    poster_path?: string;
    overview: string;
    img?: string; // For saved shows
}
