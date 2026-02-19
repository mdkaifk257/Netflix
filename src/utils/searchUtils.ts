import { realMovies } from '../data/realMovies';
import type { Movie } from '../types/movie';

export const searchMovies = (query: string): Movie[] => {
    if (!query) return [];

    // Flatten all categories
    const allMovies = [
        ...realMovies.originals,
        ...realMovies.trending,
        ...realMovies.topRated,
        ...realMovies.action,
        ...realMovies.comedy,
        ...realMovies.horror,
        ...realMovies.romance,
        ...realMovies.documentaries,
        ...realMovies.bollywoodMovies,
        ...realMovies.bollywoodSeries
    ];

    // Deduplicate by ID
    const uniqueMovies = Array.from(new Map(allMovies.map(item => [item.id, item])).values());

    const lowerQuery = query.toLowerCase();

    return uniqueMovies.filter(movie =>
        (movie.title && movie.title.toLowerCase().includes(lowerQuery)) ||
        (movie.name && movie.name.toLowerCase().includes(lowerQuery)) ||
        (movie.original_name && movie.original_name.toLowerCase().includes(lowerQuery))
    );
};
