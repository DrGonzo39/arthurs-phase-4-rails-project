import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import { UserProvider } from './context/user';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import NavBar from './components/NavBar';
import AlbumPage from './components/AlbumPage';

function App() {
  return (
    <div className="App">
     <UserProvider>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/signup" element={<SignUpForm/>} />
        <Route exact path="/login" element={<LoginForm/>} />
        <Route exact path="/albums" element={<AlbumPage/>}/>
      </Routes>
     </UserProvider>
    </div>
  );
}

export default App;
