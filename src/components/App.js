// File src/components/App.js
import '../styles/App.scss';
import React, { useState, useEffect } from 'react';

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

  // For each of the data objects it will generate that html and accumulate it in an array, saved in a variable htmlItemList
  // Then add the array with map

  const htmlItemList = data.map((item, index) => (
    <li key={index} className="list__item">
      <p className="list__item--name">Id: {item.id}</p>
      <p className="list__item--title">Título: {item.title}</p>
      <p className="list__item--url">Url: {item.url}</p>
      <div className="list__errase--container"></div>
    </li>
  ));

  return (
    <div className="page">
      <header className="header">
        <h1 className="header__title">Resultados</h1>
      </header>
      <main>
        {/* results list */}
        <ul className="club__list">{htmlItemList}</ul>
      </main>
    </div>
  );
}

export default App;
