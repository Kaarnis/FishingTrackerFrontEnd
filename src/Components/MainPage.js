import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../Images/haukietusivu.jpg';

const MainPage = () => {
  return (
    <div className="main-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="content">
        <h1 className="title">Kalastuspäiväkirja!!</h1>
        <p className="description">Paikka jossa voit seurata unelmiasi</p>
      </div>
      <div className="login-container">
        <div className="login-form">
          <input type="text" placeholder="Käyttäjätunnus" className="login-input" />
          <input type="password" placeholder="Salasana" className="login-input" />
          <button className="login-button">Kirjaudu</button>
          <p>Tai</p>
          <Link to="/register" className="register-button">
          Rekisteröidy
        </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;