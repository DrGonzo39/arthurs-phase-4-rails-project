import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import { UserProvider } from '../context/user';

function App() {
  return (
    <div className="App">
     <UserProvider>
      <Routes>
        <Route exact path="/" element={<Home/>} />
      </Routes>
     </UserProvider>
    </div>
  );
}

export default App;
