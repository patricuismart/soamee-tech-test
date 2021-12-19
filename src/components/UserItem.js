import { Link } from 'react-router-dom';

const UserItem = (props) => {
  return (
    <Link
      className="card__link"
      to={`./user/${props.userData.id}`}
      title="Ver detalle"
    >
      <>
        <p className="card__user--name">Nombre: {props.userData.name}</p>
        <p className="">
          <a href="{props.userData.website}" className="card__user--website">
            Web:{props.userData.website}
          </a>
        </p>
        <div className="card__errase--container">
          <i
            className="fas fa-times-circle card__errase--btn"
            id={props.userData.id}
            onClick={props.handleErrase}
            title="Borrar"
          ></i>
        </div>
      </>
    </Link>
  );
};
export default UserItem;
