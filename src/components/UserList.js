import UserItem from './UserItem';

const UserList = (props) => {
  const html = props.data.map((userData, index) => (
    <>
      <li key={index} className="card__user">
        <UserItem userData={userData} />
      </li>
    </>
  ));

  return (
    <>
      <h1 className="card__title">Resultados</h1>
      <ul className="card__list">{html}</ul>
    </>
  );
};
export default UserList;
