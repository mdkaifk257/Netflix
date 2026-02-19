import { useEffect, useState } from 'react';
import type { Movie } from '../types/movie';
import requests from '../utils/requests';
import { TMDB_BASE_URL } from '../data/realMovies';

interface Props {
    onMovieClick: (movie: Movie) => void;
}

function Hero({ onMovieClick }: Props) {
    const [movie, setMovie] = useState<Movie | null>(null);

    useEffect(() => {
        const fetchHeroMovie = async () => {
            try {
                const response = await fetch(requests.requestPopular);
                const data = await response.json();
                if (data.results) {
                    const randomMovie = data.results[Math.floor(Math.random() * data.results.length)];
                    setMovie(randomMovie);
                }
            } catch (error) {
                console.error("Error fetching hero movie:", error);
            }
        };
        fetchHeroMovie();
    }, []);

    const truncate = (str: string, n: number) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    };

    if (!movie) return null;

    return (
        <header
            className="relative h-[448px] text-white object-contain flex"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("${TMDB_BASE_URL}${movie?.backdrop_path}")`,
                backgroundPosition: "center center",
            }}
        >
            <div className="ml-8 pt-36 h-[190px]">
                <h1 className="text-5xl font-bold pb-2">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="pt-5">
                    <button className="cursor-pointer text-black outline-none border-none font-bold rounded px-8 py-2 mr-4 bg-white hover:bg-[#e6e6e6] transition-all duration-200"
                        onClick={() => onMovieClick(movie)}
                    >
                        Play
                    </button>
                    <button className="cursor-pointer text-white outline-none border-none font-bold rounded px-8 py-2 bg-[rgba(109,109,110,0.7)] hover:bg-[#6d6d6e] transition-all duration-200"
                        onClick={() => onMovieClick(movie)}
                    >
                        More Info
                    </button>
                </div>
                <h1 className="w-[45rem] leading-[1.3] pt-4 text-sm max-w-[360px] h-[80px]">
                    {truncate(movie?.overview || "", 150)}
                </h1>
            </div>

            <div className="absolute bottom-0 w-full h-28 bg-gradient-to-t from-[#141414] to-transparent" />
        </header>
    );
}

export default Hero;
