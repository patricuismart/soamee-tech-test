import { useHistory } from 'react-router-dom';

const UserItem = (props) => {
  const history = useHistory();

  // Handle function to User datail on clikc

  const handleClick = () => {
    history.push(`/user/${props.userData.id}`);
  };

  const handleOnErase = (ev) => {
    ev.stopPropagation();
    props.handleErase(ev);
  };
  return (
    <div className="card__link" title="Ver detalle" onClick={handleClick}>
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
          onClick={handleOnErase}
          title="Borrar"
        ></i>
      </div>
    </div>
  );
};
export default UserItem;
