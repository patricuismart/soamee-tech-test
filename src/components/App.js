// File src/components/App.js
import '../styles/App.scss';
import React, { useState, useEffect } from 'react';

// services
import DataApi from '../services/DataApi';

function App() {
  //estados//
  const [data, setData] = useState([]);

  //useEffect//
  useEffect(() => {
    DataApi().then((data) => {
      setData(data);
      console.log('Useeffect data', data);
    });
  }, []);

  return (
    <div>
      <h1 className="uno">Hola mundo</h1>
    </div>
  );
}

export default App;
