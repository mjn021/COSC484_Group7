import LoginField from './components/LoginField';
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import MainPage from './pages/MainPage';
import FriendsListPage from './pages/FriendsListPage';
import ProfilePage from './pages/ProfilePage';
import Header from './components/Header';
import {BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom'


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
      </Routes>
      </div>
    </Router> 
    </div> 
  )
}

export default App;
/*

    */