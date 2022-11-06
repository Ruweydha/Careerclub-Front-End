
//Css
import './App.css';

//Components Imports
import Register from './components/authentication/register/register';
import Login from './components/authentication/login/login';
import Code from './components/authentication/code/code';
import Landing from './components/landing/landing'
import FourOwFour from './components/four_ow_four/four_ow_four'
import Profile from './components/profile/profile';

//All imports
import { Routes, Route } from 'react-router-dom';

//Alert
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function App() {



  return (
    <>
    <ToastContainer />
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/code' element={<Code />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='*' element={<FourOwFour />} />
    </Routes>
    </>
  );
}

export default App;
