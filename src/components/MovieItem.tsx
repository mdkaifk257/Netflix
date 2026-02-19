import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import type { Movie } from '../types/movie';
import { TMDB_BASE_URL } from '../data/realMovies';

interface Props {
    movie: Movie;
    isLargeRow?: boolean;
    onMovieClick: (movie: Movie) => void;
}

const MovieItem = ({ movie, isLargeRow, onMovieClick }: Props) => {
    const [like, setLike] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { user } = UserAuth() as any;
    const isMock = user?.uid?.startsWith('mock-');

    const saveShow = async (e: React.MouseEvent) => {
        e.stopPropagation();
        if (user?.email) {
            setLike(!like);

            if (isMock) {
                const existingDb = JSON.parse(localStorage.getItem('netflix_db') || '{}');
                const userShows = existingDb[user.email] || [];
                // Avoid duplicates
                if (!userShows.find((show: any) => show.id === movie.id)) {
                    userShows.push({
                        id: movie.id,
                        title: movie.title || movie.name,
                        img: movie.backdrop_path
                    });
                    existingDb[user.email] = userShows;
                    localStorage.setItem('netflix_db', JSON.stringify(existingDb));
                }
            } else {
                await updateDoc(doc(db, 'users', user?.email), {
                    savedShows: arrayUnion({
                        id: movie.id,
                        title: movie.title || movie.name,
                        img: movie.backdrop_path
                    })
                });
            }
        } else {
            alert('Please log in to save a movie');
        }
    };

    return (
        <div
            className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'
            onClick={() => onMovieClick(movie)}
        >
            <img
                className='w-full h-auto block'
                src={`${TMDB_BASE_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                alt={movie?.title}
            />
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
                    {movie?.title || movie?.name}
                </p>
                <p onClick={saveShow}>
                    {like ? (
                        <FaHeart className='absolute top-4 left-4 text-gray-300' />
                    ) : (
                        <FaRegHeart className='absolute top-4 left-4 text-gray-300' />
                    )}
                </p>
            </div>
        </div>
    );
};

export default MovieItem;
