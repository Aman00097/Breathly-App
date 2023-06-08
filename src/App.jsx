import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './component/Home'
import Sleep from './component/Sleep'
import Navbar from './component/Navbar'
import BottomNav from './component/BottomNav'
import MusicComp from './component/MusicComp'
import Meditation from './component/Meditation'
import Relax from './component/Relax'
import Melodies from './component/Melodies'
import Logout from './component/Logout'
import LogSign from './component/LogSign'
import Setting from './component/Setting'
import Account from './component/Account'
import Subscription from './component/Subscription'

function App() {
  const location = useLocation();
  const showNavAppBar = location.pathname === "/logout" || location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!showNavAppBar && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sleep' element={<Sleep />} />
        <Route path='/meditation' element={<Meditation />} />
        <Route path='/relax' element={<Relax />} />
        <Route path='/setting' element={<Setting />} />
        <Route path='/melodies' element={<Melodies />} />
        <Route path='/song/:songId' element={<MusicComp />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/login' element={<LogSign />} />
        <Route path='/signup' element={<LogSign />} />
        <Route path='/account' element={<Account />} />
        <Route path='/subscription' element={<Subscription />} />
      </Routes>
      {!showNavAppBar && <BottomNav />}
    </>
  )
}

export default App
