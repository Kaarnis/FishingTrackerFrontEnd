import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Components/Register';
import MainPage from './Components/MainPage'

const App = () => {
  return (

    <Router>
      <div>
        <Routes>

          {/* Mainpage route */}
          <Route path="/" element={<MainPage />}
           />
           {/* UserRegistrationPage route */}
           <Route path="/register" element={<Register />}
           />

          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;