import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Book from './components/Book/Book';
import Header from './components/Header/Header';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
      <Header />
      <Routes>
        
        <Route path="/" element={<Navigate to="/home" />}>
        </Route>

        <Route path="/home" element={<Home />}>
        </Route>

        <Route path="/login" element={<Login />}>
        </Route>

        <Route path="/book/:bedType" element={<PrivateRoute><Book></Book></PrivateRoute>}>
        </Route> 

      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
