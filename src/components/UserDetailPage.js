import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import '../styles/main.scss';
import DataApi from '../services/DataApi';
import { Link } from 'react-router-dom';

const UserDetailPage = () => {
  const { userId } = useParams();
  const history = useHistory();
  const [userData, setUserData] = useState({});

  //Call to api find user by id only get back one element with index 0

  useEffect(() => {
    DataApi(userId).then((data) => {
      if (data.length === 1) {
        setUserData(data[0]);

        // answer when id not found
      } else {
        history.push('/not-found');
      }
    });
  }, []);

  return (
    <>
      <div className="card__detail">
        <section className="detail__item">
          <p className="card__user--name">Nombre: {userData.name}</p>
          <p className="card__user--email">Email: {userData.email}</p>
          <p className="card__user--city">Ciudad: {userData.city}</p>
          <p className="card__user--company">Empresa: {userData.company}</p>
          <p className="">
            <a href={userData.website} className="card__user--website">
              Web:{userData.website}
            </a>
          </p>
          <Link className="card__link" to="/">
            <i
              className="fas fa-times-circle icon "
              alt="Atrás"
              title="Atrás"
            ></i>
          </Link>
        </section>
      </div>
    </>
  );
};

export default UserDetailPage;
