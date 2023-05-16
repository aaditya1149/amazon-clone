import './App.css';
import Checkout from './components/Checkout';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Login from './components/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './components/StateProvider';
import Payment from './components/Payment';

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log("The user is >>", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  },[]) // due to empty array it will run only once when the app component loads...




  return (
    // BEM
    <>
      <div className="app">
        <Router>
          <Routes>
            <Route path="/" element = {<> <Header /> <Home /> </> } />
            <Route path="/checkout" element = {<> <Header /> <Checkout /> </> } />
            <Route path="/payment" element = {<> <Header /> <Payment /> </> } />
            <Route path="/login" element = { <Login />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
       </Router>
      </div>
    </>  
  );
}

export default App;
