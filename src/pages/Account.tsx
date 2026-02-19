import { onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { AiOutlineClose } from 'react-icons/ai';
import type { Movie } from '../types/movie';
import { TMDB_BASE_URL } from '../data/realMovies';

const Account = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { user } = UserAuth() as any;
    const isMock = user?.uid?.startsWith('mock-');

    useEffect(() => {
        if (user?.email) {
            if (isMock) {
                const existingDb = JSON.parse(localStorage.getItem('netflix_db') || '{}');
                setMovies(existingDb[user.email] || []);
            } else {
                onSnapshot(doc(db, 'users', user?.email), (doc) => {
                    setMovies(doc.data()?.savedShows);
                });
            }
        }
    }, [user?.email, isMock]);

    const movieRef = doc(db, 'users', `${user?.email}`);
    const deleteShow = async (passedID: number) => {
        try {
            const result = movies.filter((item) => item.id !== passedID);
            if (isMock) {
                const existingDb = JSON.parse(localStorage.getItem('netflix_db') || '{}');
                existingDb[user.email] = result;
                localStorage.setItem('netflix_db', JSON.stringify(existingDb));
                setMovies(result);
            } else {
                await updateDoc(movieRef, {
                    savedShows: result
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className='w-full text-white'>
                <img
                    className='w-full h-[400px] object-cover'
                    src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
                    alt='/'
                />
                <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
                <div className='absolute top-[20%] p-4 md:p-8'>
                    <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
                </div>
            </div>
            <div className='relative flex items-center group'>
                <div className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {movies && movies.map((item) => (
                        <div key={item.id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                            <img
                                className='w-full h-auto block'
                                src={`${TMDB_BASE_URL}${item.backdrop_path || item.img}`} // Handle both path structures
                                alt={item?.title}
                            />
                            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                                <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
                                    {item?.title}
                                </p>
                                <p onClick={() => deleteShow(item.id)} className='absolute text-gray-300 top-4 right-4'><AiOutlineClose /></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Account;
