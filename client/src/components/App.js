import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import { UserProvider } from '../context/user';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

function App() {
  return (
    <div className="App">
     <UserProvider>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/signup" element={<SignUpForm/>} />
        <Route exact path="/login" element={<LoginForm/>} />
      </Routes>
     </UserProvider>
    </div>
  );
}

export default App;
