import { useState } from 'react';
import Hero from '../components/Hero';
import Row from '../components/Row';
import Modal from '../components/Modal';
import type { Movie } from '../types/movie';
import requests from '../utils/requests';

const Home = () => {
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

    const handleMovieClick = (movie: Movie) => {
        setSelectedMovie(movie);
    };

    const handleCloseModal = () => {
        setSelectedMovie(null);
    };

    return (
        <>
            <Hero onMovieClick={handleMovieClick} />
            <Row title="Upcoming" fetchURL={requests.requestUpcoming} onMovieClick={handleMovieClick} />
            <Row title="Trending Now" fetchURL={requests.requestTrending} onMovieClick={handleMovieClick} />
            <Row title="Top Rated" fetchURL={requests.requestTopRated} onMovieClick={handleMovieClick} />
            <Row title="Action Movies" fetchURL={requests.requestAction} onMovieClick={handleMovieClick} />
            <Row title="Comedy Movies" fetchURL={requests.requestComedy} onMovieClick={handleMovieClick} />
            <Row title="Horror Movies" fetchURL={requests.requestHorror} onMovieClick={handleMovieClick} />
            <Row title="Romance Movies" fetchURL={requests.requestRomance} onMovieClick={handleMovieClick} />
            <Row title="Bollywood Hits" fetchURL={requests.requestBollywood} onMovieClick={handleMovieClick} />
            <Row title="Bollywood Action" fetchURL={requests.requestBollywoodAction} onMovieClick={handleMovieClick} />
            <Row title="Bollywood Comedy" fetchURL={requests.requestBollywoodComedy} onMovieClick={handleMovieClick} />
            <Row title="Bollywood Romance" fetchURL={requests.requestBollywoodRomance} onMovieClick={handleMovieClick} />
            <Row title="Documentaries" fetchURL={requests.requestDocumentaries} onMovieClick={handleMovieClick} />

            <Modal movie={selectedMovie} onClose={handleCloseModal} />
        </>
    );
};



export default Home;
