import React, { useState, useEffect } from 'react';

// services
import DataApi from '../services/DataApi';

// Components
import NewUser from './NewUser';
import UserList from './UserList';
import Filters from './Filters';

const MainPage = () => {
  // States variables
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [company, setCompany] = useState('');
  const [web, setWeb] = useState('');

  const [searchName, setSearchName] = useState('');

  // useEffect//
  useEffect(() => {
    DataApi().then((data) => {
      setData(data);
      console.log('Useeffect data', data);
    });
  }, []);

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

  const handleShow = (ev) => {
    ev.preventDefault();
  };

  //Errase Card button "x"

  const handleErrase = (ev) => {
    ev.preventDefault();
    data.splice(ev.target.id, 1);
    console.log(ev.target.id);
    setData([...data]);
  };

  const handleChangeFilter = (data) => {
    setSearchName(data.value);
  };

  //Filter functions

  const filteredData = data.filter((user) =>
    user.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase())
  );

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
    <section className="cards">
      {/*Add user*/}

      <div>
        <input
          className="new-card__btn "
          type="submit"
          value="Añadir Usuario"
          onClick={handleShow}
        />
      </div>
      <NewUser
        className="new-card"
        id="new_user"
        handleName={handleName}
        handleEmail={handleEmail}
        handleCity={handleCity}
        handleCompany={handleCompany}
        handleWeb={handleWeb}
        handleClick={handleClick}
        name={name}
        email={email}
        city={city}
        company={company}
        web={web}
      />

      <Filters
        searchName={searchName}
        handleChangeFilter={handleChangeFilter}
      />
      {/* results list */}
      <UserList data={filteredData} handleErrase={handleErrase} />
    </section>
  );
};

export default MainPage;
