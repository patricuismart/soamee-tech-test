import '../styles/main.scss';
import { Link } from 'react-router-dom';

const CardDetail = (props) => {
  return (
    <>
      <li className="list__user" key={props.id}>
        <Link className="detail__link" to="/">
          <i className="fas fa-times-circle icon"></i>
        </Link>
        <section className="detail__item">
          <p className="list__user--name">Nombre: {props.selectedUser.name}</p>
          <p className="list__user--email">Email: {props.selectedUser.email}</p>
          <p className="list__user--city">Ciudad: {props.selectedUser.city}</p>
          <p className="list__user--company">
            Empresa: {props.selectedUser.company}
          </p>
          <p className="">
            <a
              href="{props.selectedUser.website}"
              className="list__user--website"
            >
              Web:{props.selectedUser.website}
            </a>
          </p>
        </section>
      </li>
    </>
  );
};

export default CardDetail;
