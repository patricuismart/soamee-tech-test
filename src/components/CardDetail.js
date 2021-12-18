import '../styles/main.scss';

const CardDetail = (props) => {
  return (
    <>
      <li className="list__user">
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
      </li>
    </>
  );
};

export default CardDetail;
