import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import requests from '../utils/requests';
import type { Movie } from '../types/movie';
import MovieItem from '../components/MovieItem';
import Modal from '../components/Modal';

const Search = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');
    const [movies, setMovies] = useState<Movie[]>([]);
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

    useEffect(() => {
        if (query) {
            const fetchSearch = async () => {
                try {
                    const response = await fetch(`${requests.requestSearch}&query=${query}`);
                    const data = await response.json();
                    if (data.results) {
                        setMovies(data.results);
                    }
                } catch (error) {
                    console.error("Error searching movies:", error);
                    setMovies([]);
                }
            };
            fetchSearch();
        } else {
            setMovies([]);
        }
    }, [query]);

    const handleMovieClick = (movie: Movie) => {
        setSelectedMovie(movie);
    };

    const handleCloseModal = () => {
        setSelectedMovie(null);
    };

    return (
        <div className='w-full text-white pt-[100px] px-4'>
            <h1 className='text-3xl font-bold mb-4'>Search Results for "{query}"</h1>
            {movies.length === 0 ? (
                <p className='text-gray-400'>No movies found.</p>
            ) : (
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                    {movies.map((item) => (
                        <div key={item.id} className='relative'>
                            <MovieItem movie={item} onMovieClick={handleMovieClick} />
                        </div>
                    ))}
                </div>
            )}
            <Modal movie={selectedMovie} onClose={handleCloseModal} />
        </div>
    );
};

export default Search;
