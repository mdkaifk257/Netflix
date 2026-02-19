import { AuthContextProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Account from './pages/Account';
import Search from './pages/Search';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app bg-[#141414] min-h-screen text-white">
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/account' element={<Account />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
