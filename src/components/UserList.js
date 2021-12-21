import UserItem from './UserItem';

const UserList = (props) => (
  <>
    <h1 className="card__title">Resultados</h1>
    <ul className="card__list">
      {props.data.map((userData, index) => (
        <li key={index} className="card__user">
          <UserItem userData={userData} handleErase={props.handleErase} />
        </li>
      ))}
    </ul>
  </>
);

export default UserList;
