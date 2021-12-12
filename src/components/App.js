// File src/components/App.js
import '../styles/main.scss';
import React, { useState, useEffect } from 'react';

// Layout
import Header from './Header';
import NewCard from './NewCard';
import Footer from './Footer';

// services
import DataApi from '../services/DataApi';

function App() {
  // States variables
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [company, setCompany] = useState('');
  const [web, setWeb] = useState('');

  // Handle functions new card

  const handleName = (ev) => {
    setName(ev.currentTarget.value);
  };

  const handleEmail = (ev) => {
    setEmail(ev.currentTarget.value);
  };

  const handleCity = (ev) => {
    setCity(ev.currentTarget.value);
  };
  const handleCompany = (ev) => {
    setCompany(ev.currentTarget.value);
  };
  const handleWeb = (ev) => {
    setWeb(ev.currentTarget.value);
  };

  // useEffect//
  useEffect(() => {
    DataApi().then((data) => {
      setData(data);
      console.log('Useeffect data', data);
    });
  }, []);

  // For each of the data objects it will generate that html and accumulate it in an array, saved in a variable htmlUserList
  // Then add the array with map

  const htmlUserList = data.map((user, index) => (
    <>
      <li key={index} className="list__user">
        <p className="list__user--name">Nombre: {user.name}</p>
        <p className="list__user--email">Email: {user.email}</p>
        <p className="list__user--city">Ciudad: {user.city}</p>
        <p className="list__user--company">Empresa: {user.company}</p>
        <p className="">
          <a href="{user.website}" className="list__user--website">
            {user.website}
          </a>
        </p>
        <div className="list__errase--container"></div>
      </li>
    </>
  ));

  // Create new Card

  const handleClick = (ev) => {
    ev.preventDefault();
    const newCard = {
      name: name,
      email: email,
      city: city,
      company: company,
      web: web,
    };
    //Clone content in data with the spread operator and then add a new card

    setData([...data, newCard]);
    setName('');
    setEmail('');
    setCity('');
    setCompany('');
    setWeb('');
  };

  return (
    <div className="page">
      <Header />
      <main>
        <div>
          <h2> Añadir elemento nuevo: </h2>
        </div>
        <div>
          <label className="new-card__option">Nombre: </label>
          <input
            className="new-card__input"
            type="text"
            name="name"
            id="name"
            placeholder="Escribe aquí el nombre..."
            onChange={handleName}
            value={name}
          />
        </div>
        <div>
          <label className="new-card__option">Email: </label>
          <input
            className="new-card__input"
            type="email"
            name="email"
            id="email"
            placeholder="ejemplo@ejemplo.com"
            onChange={handleEmail}
            value={email}
          />
        </div>

        <div>
          <label className="new-card__option">Ciudad: </label>
          <input
            className="new-card__input"
            type="text"
            name="city"
            id="city"
            placeholder="Valladolid..."
            onChange={handleCity}
            value={city}
          />
        </div>
        <div>
          <label className="new-card__option">Empresa: </label>
          <input
            className="new-card__input"
            type="text"
            name="company"
            id="company"
            placeholder="Empresa..."
            onChange={handleCompany}
            value={company}
          />
        </div>
        <div>
          <label className="new-card__option">Web: </label>
          <input
            className="new-card__input"
            type="text"
            name="web"
            id="web"
            placeholder="Empresa..."
            onChange={handleWeb}
            value={web}
          />
        </div>

        <div>
          <input
            className="new-card__btn"
            type="submit"
            value="Añadir"
            onClick={handleClick}
          />
        </div>
        {/* results list */}
        <ul className="list">{htmlUserList}</ul>
      </main>
      <Footer />
    </div>
  );
}

export default App;
