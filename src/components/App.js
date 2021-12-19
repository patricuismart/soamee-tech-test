// File src/components/App.js
import '../styles/main.scss';
import React, { useState, useEffect } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

// Layout
import Header from './Header';
import Footer from './Footer';
import NewUser from './NewUser';
import CardDetail from './CardDetail';
import Filters from './Filters';

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

  const [searchName, setSearchName] = useState('');

  var new_user = document.getElementById('new_user');

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
    new_user.style.visibility = 'visible';
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

  //Funciones para filtrar

  const filteredData = data.filter((user) =>
    user.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase())
  );

  // For each of the data objects it will generate that html and accumulate it in an array, saved in a variable htmlUserList
  // Then add the array with map

  const htmlUserList = filteredData.map((user, id) => (
    <>
      <li key={id} className="list__user">
        <p className="list__user--name">Nombre: {user.name}</p>
        <p className="">
          <a href="{user.website}" className="list__user--website">
            Web:{user.website}
          </a>
        </p>
        <div className="card__errase--container">
          <i
            className="fas fa-times-circle card__errase--btn"
            id={user.id}
            onClick={handleErrase}
          ></i>
        </div>
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

  //  UseRouteMatch
  const routeData = useRouteMatch('/user/:id');

  // Security if the route is not ok we get back a null

  const userId = routeData !== null ? routeData.params.id : '';
  console.log('useRouteMatch', routeData);

  // Search by id//
  const selectedUser = data.find((user) => user.id === parseInt(userId));

  return (
    <div className="page">
      <Header />
      <main>
        <Switch>
          {/*Paint Detail Card*/}
          <Route exact path="/user/:id">
            <section>
              <CardDetail selectedUser={selectedUser} />
            </section>
          </Route>

          <Route exact path="/">
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
            <h1 className="list__title">Resultados</h1>
            <ul className="list">{htmlUserList}</ul>
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
