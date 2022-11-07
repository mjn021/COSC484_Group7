import logo from './logo.svg';
import './App.css';
import SignupForm from './components/signForm/SignupForm';
import SigninForm from './components/signForm/SigninForm';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import Header from './components/Header';
import About from './pages/about';
import Profile from './pages/profile'
import './components/signForm/signForm.css';
import FirstPage from './pages/firstPage';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const App = ()  => {
  return (
      <Profile />
      //<FirstPage />
  );
};

export default App;
