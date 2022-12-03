import {useCallback, useContext, useState} from 'react'
import UserContext, {UserProvider} from './context/UserContext'
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
  const [token, setToken] = useState(false)
  const [user, setUser] = useState('')
  const login = useCallback((username, token) => {
    console.log("login started")
      setUser(username)
      setToken(token)
  }
  )
  const logout = useCallback(() => {
    setToken(null)
    setUser(null)
  })
  var routes;
  
  if(!token){
    routes = (<>
    <Route path ='/signup' element = {<SignUpPage />} />
    <Route path = '/*' element = {<LogInPage />} /> 
    <Route path = '/main' element = {<MainPage />} />
    <Route path = '/profile' element = {<ProfilePage />} />
    <Route path = '/friendslist' element = {<FriendsListPage />} />
    <Route path = '/settings' element = {<SettingsPage/>}/>
    <Route path = '/sidebar' element = {<SidebarPage/>}/>
    <Route path = '/fa' element = {<FuckingAroundPage/>}/> </>
    )
  }
  
  if(token){
    routes = (<>
      
    </>)
  }
  
  return (
    <UserProvider value = {{token: token, login: login, logout: logout}}>
    <div>
    <Router>
    <Header />
      <div>
      <Routes>
        {routes}
      </Routes>
      </div>
    </Router> 
    </div> 
    </UserProvider>
  )
}

export default App;
//<Route path = '/friend' element = {<FriendPage /> }/>
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