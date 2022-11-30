import {useState, useCallback} from 'react'
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import MainPage from './pages/MainPage';
import FriendsListPage from './pages/FriendsListPage';
import ProfilePage from './pages/ProfilePage';
import Header from './components/Header';
import SettingsPage from './pages/SettingsPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SidebarPage from './pages/SidebarPage';
import {UserProvider} from './UserContext'
import FuckingAroundPage from './pages/FuckingAroundPage';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const login = () => {
    setIsLoggedIn(true)
  }

  const logout = () => {
    setIsLoggedIn(false)
  }

  var routes 
  if(!isLoggedIn){
    routes = (
    <>
      <Route path ='/signup' element = {<SignUpPage />} />
      <Route path = '/' element = {<LogInPage />} />
    </>)
  }
  if(isLoggedIn){
    routes = (
      <>
        <Route exact path = '/' element = {<MainPage />} />
        <Route path = '/profile' element = {<ProfilePage />} />
        <Route path = '/friendslist' element = {<FriendsListPage />} />
        <Route path = '/settings' element = {<SettingsPage/>}/>
        <Route path = '/sidebar' element = {<SidebarPage/>}/>
        <Route path = '/fa' element = {<FuckingAroundPage/>}/>
      </>
    )
  }

  return (
    <UserProvider value = {{isLoggedIn: isLoggedIn, login: login, logout: logout}}>

    <div>
    <Router>
    
    <Header />
    <button onClick = {login}>click</button>
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