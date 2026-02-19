import { useEffect, useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { FaSearch } from 'react-icons/fa';

function Navbar() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { user, logOut } = UserAuth() as any;
    const [show, setShow] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logOut();
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    const handleSearch = (e: FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${searchQuery}`);
            setSearchOpen(false);
            setSearchQuery('');
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if ((window as any).scrollY > 100) {
                setShow(true);
            } else {
                setShow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`fixed top-0 w-full h-[64px] p-4 z-[100] transition-all duration-300 ease-in ${show ? 'bg-black' : 'bg-transparent'}`}>
            <div className='flex items-center justify-between'>
                <div className="flex items-center gap-8">
                    <Link to='/'>
                        <img
                            className='text-red-600 text-4xl font-bold cursor-pointer h-8'
                            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                            alt="Netflix Logo"
                        />
                    </Link>
                    {user?.email && (
                        <div className="hidden md:flex gap-4 text-gray-300 text-sm">
                            <Link to='/' className="hover:text-white transition">Home</Link>
                            <Link to='/account' className="hover:text-white transition">My List</Link>
                        </div>
                    )}
                </div>

                <div className='flex items-center gap-4'>
                    {searchOpen ? (
                        <form onSubmit={handleSearch} className="flex items-center border border-white bg-black/50 px-2 py-1 rounded">
                            <FaSearch className="text-white mr-2" />
                            <input
                                type="text"
                                placeholder="Titles, people, genres"
                                className="bg-transparent text-white outline-none placeholder-gray-400 text-sm w-[200px]"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                autoFocus
                                onBlur={() => !searchQuery && setSearchOpen(false)}
                            />
                        </form>
                    ) : (
                        <FaSearch className="text-white cursor-pointer" onClick={() => setSearchOpen(true)} />
                    )}

                    {user?.email ? (
                        <div className='flex items-center gap-4'>
                            <Link to='/account'>
                                <img
                                    className="h-8 object-contain cursor-pointer rounded"
                                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                                    alt="User Avatar"
                                />
                            </Link>
                            <button
                                onClick={handleLogout}
                                className='bg-red-600 px-4 py-1 rounded cursor-pointer text-white text-sm'
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className='flex items-center'>
                            <Link to='/login'>
                                <button className='text-white pr-4'>Sign In</button>
                            </Link>
                            <Link to='/signup'>
                                <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>
                                    Sign Up
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
