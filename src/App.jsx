import React, { useEffect } from 'react';
import Home from './components/pages/Home/Home'; 
import Login from './components/pages/Login/Login';
import Player from './components/pages/Player/Player';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, getAuth} from 'firebase/auth';
// import { auth } from 'firebase'; // Adjust the import path as necessary
import { ToastContainer, } from 'react-toastify' ;
import 'react-toastify/dist/ReactToastify.css'; 

const App = () => {

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(getAuth(), async (user) => {
      if (user) {
        // User is signed in, you can access user details here
        console.log('User is signed in:', user);
        navigate('/'); // Redirect to home if user is signed in
      } else {
        // User is signed out
        console.log('No user is signed in');
        navigate('/login'); // Redirect to login if no user is signed in
      }
    });
  }, []);
  return (
    <div>
       <ToastContainer theme='dark'/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </div>
  )
}

export default App;
