
import './App.css';
import Demo from './components/Demo';

import Login from './components/Login'
import SignUp from './components/SignUp'
import HomePage from './components/HomePage';
import Trending from './components/Trending';
import Artists from './components/Artists';
import Genre from './components/Genre';
import Favorite from './components/Favorite';
import MyPlaylist from './components/MyPlaylist'

import{
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import SideBar from './components/SideBar';
function App() {
  return (
    <Router>
      <SideBar/>
    <Routes>
        <Route  path='/' exact element={<Demo />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/homepage' element={<HomePage/>} />
        <Route path='/trending' element={<Trending/>} />
        <Route path='/artists' element={<Artists/>} />
        <Route path='/genre' element={<Genre/>} />
        <Route path='/myplaylist' element={<MyPlaylist/>} />
        <Route path='/favorite' element={<Favorite/>} />
       

    </Routes>
    </Router>
  );
}

export default App;
