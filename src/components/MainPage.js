import React, { useState, useEffect } from 'react';

import DataApi from '../services/DataApi';
import NewUser from './NewUser';
import UserList from './UserList';
import Filters from './Filters';

const MainPage = () => {
  const [data, setData] = useState([]);

  const [newUserData, setNewUserData] = useState({
    name: '',
    email: '',
    city: '',
    company: '',
    website: '',
  });

  const [isNewUserFormVisible, setIsNewUserFormVisible] = useState(false);

  const [searchName, setSearchName] = useState('');

  // useEffect//
  useEffect(() => {
    DataApi().then((data) => {
      setData(data);
    });
  }, []);

  // Handle functions new card
  const handleSetNewUserData = (field, value) => {
    setNewUserData({ ...newUserData, [field]: value });
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

  const handleClick = (ev) => {
    ev.preventDefault();
    const newCard = {
      name: newUserData.name,
      email: newUserData.email,
      city: newUserData.city,
      company: newUserData.company,
      website: newUserData.website,
    };
    //Clone content in data with the spread operator and then add a new card

    setData([...data, newCard]);
    setNewUserData({ name: '', email: '', city: '', company: '', website: '' });
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
          formData={newUserData}
          setFormData={handleSetNewUserData}
          handleClick={handleClick}
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
