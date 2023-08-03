import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import { UserProvider } from '../context/user';

function App() {
  return (
    <div className="App">
     <UserProvider>
      <SignUpForm />
     </UserProvider>
    </div>
  );
}

export default App;
