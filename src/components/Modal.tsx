import { useEffect, useState } from "react";
import type { Movie } from "../types/movie";
import { TMDB_BASE_URL } from "../data/realMovies";

interface Props {
    movie: Movie | null;
    onClose: () => void;
}

function Modal({ movie, onClose }: Props) {
    const [trailerUrl, setTrailerUrl] = useState<string | null>(null);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        if (movie) {
            setPlaying(false);
            const fetchTrailer = async () => {
                try {
                    const key = import.meta.env.VITE_TMDB_API_KEY;
                    const response = await fetch(
                        `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${key}&language=en-US`
                    );
                    const data = await response.json();
                    if (data.results) {
                        const trailer = data.results.find(
                            (vid: any) => vid.site === "YouTube" && (vid.type === "Trailer" || vid.type === "Teaser")
                        );
                        setTrailerUrl(trailer ? trailer.key : null);
                    }
                } catch (error) {
                    console.error("Error fetching trailer:", error);
                    setTrailerUrl(null);
                }
            };
            fetchTrailer();
        }
    }, [movie]);

    if (!movie) return null;

    const handlePlay = () => {
        if (trailerUrl) {
            setPlaying(true);
        } else {
            alert("No trailer available for this movie.");
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 transition-opacity duration-300">
            <div
                className="relative w-[90%] max-w-[850px] bg-[#181818] rounded-md overflow-hidden shadow-2xl scale-100 transition-transform duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#181818]/60 text-white flex items-center justify-center hover:bg-[#181818] border-2 border-white/20"
                >
                    ✕
                </button>

                <div className="relative h-[400px]">
                    {playing && trailerUrl ? (
                        <iframe
                            className="w-full h-full absolute inset-0 z-10"
                            src={`https://www.youtube.com/embed/${trailerUrl}?autoplay=1&controls=1&rel=0`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent z-[5]" />
                            <img
                                className="w-full h-full object-cover"
                                src={movie.backdrop_path ? `${TMDB_BASE_URL}${movie.backdrop_path}` : movie.poster_path}
                                alt={movie.title || movie.name}
                            />
                            <div className="absolute bottom-10 left-10 z-10">
                                <h1 className="text-4xl font-bold text-white mb-4">
                                    {movie.title || movie.name || movie.original_name}
                                </h1>
                                <div className="flex gap-4">
                                    <button
                                        onClick={handlePlay}
                                        className="bg-white text-black px-8 py-2 rounded font-bold hover:bg-[#e6e6e6] transition"
                                    >
                                        Play
                                    </button>
                                    <button className="bg-[gray]/50 text-white px-8 py-2 rounded font-bold hover:bg-[gray]/70 transition">
                                        + My List
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>

                <div className="p-10 flex gap-8">
                    <div className="w-[70%]">
                        <div className="flex items-center gap-4 mb-4 text-sm font-bold">
                            <span className="text-[#46d369]">98% Match</span>
                            <span className="text-[#bcbcbc]">{movie.release_date?.split('-')[0] || '2023'}</span>
                            <span className="border border-[#bcbcbc] px-1 text-xs">HD</span>
                        </div>
                        <p className="text-white text-sm leading-6">
                            {movie.overview}
                        </p>
                    </div>
                    <div className="w-[30%] text-sm text-[#777]">
                        <div><span className="text-[#777]">Genres:</span> <span className="text-white hover:underline cursor-pointer">Action</span>, <span className="text-white hover:underline cursor-pointer">Thriller</span></div>
                        <div className="mt-2"><span className="text-[#777]">Original language:</span> <span className="text-white">{movie.original_language?.toUpperCase() || 'EN'}</span></div>
                    </div>
                </div>
            </div>
            {/* Backdrop click to close */}
            <div className="absolute inset-0 -z-10" onClick={onClose} />
        </div>
    );
}

export default Modal;
