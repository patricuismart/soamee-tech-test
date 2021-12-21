import React, { useState, useEffect } from 'react';

// services
import DataApi from '../services/DataApi';

// Components
import NewUser from './NewUser';
import UserList from './UserList';
import Filters from './Filters';

const MainPage = () => {
  // States
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [company, setCompany] = useState('');
  const [website, setWebSite] = useState('');

  const [searchName, setSearchName] = useState('');

  const [isNewUserFormVisible, setIsNewUserFormVisible] = useState(false);

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

  const handleWebSite = (ev) => {
    setWebSite(ev.currentTarget.value);
  };

  const handleToggleShow = (ev) => {
    ev.preventDefault();
    setIsNewUserFormVisible(!isNewUserFormVisible);
  };

  //Errase Card button "x"

  const handleErase = (ev) => {
    ev.preventDefault();
    const userIndex = data.findIndex(
      (item) => item.id === parseInt(ev.target.id)
    );
    data.splice(userIndex, 1);
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
      website: website,
    };
    //Clone content in data with the spread operator and then add a new card

    setData([...data, newCard]);
    setName('');
    setEmail('');
    setCity('');
    setCompany('');
    setWebSite('');
  };

  return (
    <section className="cards">
      {/*Add user*/}

      <div>
        <input
          className="new-card__btn "
          type="submit"
          value={
            isNewUserFormVisible ? 'Ocultar formulario' : 'Agregar usuario'
          }
          onClick={handleToggleShow}
        />
      </div>
      {isNewUserFormVisible && (
        <NewUser
          className="new-card"
          id="new_user"
          handleName={handleName}
          handleEmail={handleEmail}
          handleCity={handleCity}
          handleCompany={handleCompany}
          handleWebSite={handleWebSite}
          handleClick={handleClick}
          name={name}
          email={email}
          city={city}
          company={company}
          website={website}
        />
      )}

      <Filters
        searchName={searchName}
        handleChangeFilter={handleChangeFilter}
      />
      {/* results list */}
      <UserList data={filteredData} handleErase={handleErase} />
    </section>
  );
};

export default MainPage;
