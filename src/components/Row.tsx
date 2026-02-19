import { useRef, useEffect, useState } from 'react';
import type { Movie } from '../types/movie';
import MovieItem from './MovieItem';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

interface Props {
    title: string;
    movies?: Movie[];
    fetchURL?: string;
    isLargeRow?: boolean;
    onMovieClick: (movie: Movie) => void;
}

function Row({ title, movies: initialMovies = [], fetchURL, isLargeRow = false, onMovieClick }: Props) {
    const [movies, setMovies] = useState<Movie[]>(initialMovies);
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (fetchURL) {
            const fetchData = async () => {
                try {
                    const response = await fetch(fetchURL);
                    const data = await response.json();
                    if (data.results) {
                        setMovies(data.results);
                    }
                } catch (error) {
                    console.error("Error fetching row data:", error);
                }
            };
            fetchData();
        }
    }, [fetchURL]);

    const slideLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft = sliderRef.current.scrollLeft - 500;
        }
    };

    const slideRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft = sliderRef.current.scrollLeft + 500;
        }
    };

    return (
        <>
            <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
            <div className='relative flex items-center group'>
                <MdChevronLeft
                    onClick={slideLeft}
                    className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                    size={40}
                />
                <div
                    ref={sliderRef}
                    className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'
                >
                    {movies.map((item, id) => (
                        <MovieItem key={id} movie={item} isLargeRow={isLargeRow} onMovieClick={onMovieClick} />
                    ))}
                </div>
                <MdChevronRight
                    onClick={slideRight}
                    className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                    size={40}
                />
            </div>
        </>
    );
}

export default Row;
