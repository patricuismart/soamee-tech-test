import '../styles/main.scss';
import { Link } from 'react-router-dom';

const UserDetail = (props) => {
  return (
    <>
      <li className="card__detail" key={props.id}>
        <Link className="card__link" to="/">
          <i
            className="fas fa-times-circle icon "
            alt="Atrás"
            title="Atrás"
          ></i>
        </Link>
        <section className="detail__item">
          <p className="card__user--name">Nombre: {props.selectedUser.name}</p>
          <p className="card__user--email">Email: {props.selectedUser.email}</p>
          <p className="card__user--city">Ciudad: {props.selectedUser.city}</p>
          <p className="card__user--company">
            Empresa: {props.selectedUser.company}
          </p>
          <p className="">
            <a
              href="{props.selectedUser.website}"
              className="card__user--website"
            >
              Web:{props.selectedUser.website}
            </a>
          </p>
        </section>
      </li>
    </>
  );
};

export default UserDetail;
