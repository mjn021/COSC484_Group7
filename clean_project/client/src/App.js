import {useContext} from 'react'
import UserContext, {UserProvider} from './UserContext'
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import MainPage from './pages/MainPage';
import FriendsListPage from './pages/FriendsListPage';
import ProfilePage from './pages/ProfilePage';
import Header from './components/Header';
import SettingsPage from './pages/SettingsPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SidebarPage from './pages/SidebarPage';
import FriendPage from './pages/FriendPage';

import FuckingAroundPage from './pages/FuckingAroundPage';


function App() {

  return (
    <UserProvider >
    <div>
    <Router>
    <Header />
      <div>
      <Routes>
      <Route path ='/signup' element = {<SignUpPage />} />
      <Route path = '/' element = {<LogInPage />} />
        <Route path = '/main' element = {<MainPage />} />
        <Route path = '/profile' element = {<ProfilePage />} />
        <Route path = '/friendslist' element = {<FriendsListPage />} />
        <Route path = '/settings' element = {<SettingsPage/>}/>
        <Route path = '/sidebar' element = {<SidebarPage/>}/>
        <Route path = '/fa' element = {<FuckingAroundPage/>}/>
        <Route path = '/friend' element = {<FriendPage /> }/>
      </Routes>
      </div>
    </Router> 
    </div> 
    </UserProvider>
  )
}

export default App;
/*
<Route exact path = '/' element = {<MainPage />} />
<Route path ='/signup' element = {<SignUpPage />} />
<Route path = '/profile' element = {<ProfilePage />} />
<Route path = '/friendslist' element = {<FriendsListPage />} />
<Route path = '/Login' element = {<LogInPage />} />
<Route path = '/settings' element = {<SettingsPage/>}/>
<Route path = '/sidebar' element = {<SidebarPage/>}/>
<Route path = '/fa' element = {<FuckingAroundPage/>}/>
*/