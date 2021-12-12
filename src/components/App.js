// File src/components/App.js
import '../styles/main.scss';
import React, { useState, useEffect } from 'react';

// Layout
import Header from './Header';
import Footer from './Footer';

// services
import DataApi from '../services/DataApi';

function App() {
  // States variables
  const [data, setData] = useState([]);

  // Handle functions

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

  return (
    <div className="page">
      <Header />
      <main>
        {/* results list */}
        <ul className="list">{htmlUserList}</ul>
      </main>
      <Footer />
    </div>
  );
}

export default App;
