
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import MainPage from './pages/MainPage';
import FriendsListPage from './pages/FriendsListPage';
import ProfilePage from './pages/ProfilePage';
import Header from './components/Header';
import SettingsPage from './pages/SettingsPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SidebarPage from './pages/SidebarPage';

function App() {
  return (
    <div>
    <Router>
    <Header />
      <div>
      <Routes>
        <Route exact path = '/' element = {<MainPage />} />
        <Route path ='/signup' element = {<SignUpPage />} />
        <Route path = '/profile' element = {<ProfilePage />} />
        <Route path = '/friendslist' element = {<FriendsListPage />} />
        <Route path = '/Login' element = {<LogInPage />} />
        <Route path = '/settings' element = {<SettingsPage/>}/>
        <Route path = '/sidebar' element = {<SidebarPage/>}/>
      </Routes>
      </div>
    </Router> 
    </div> 
  )
}

export default App;
