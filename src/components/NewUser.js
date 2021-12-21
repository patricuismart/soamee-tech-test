const NewUser = (props) => {
  return (
    <div className="new-card">
      <h2 className="new-card__title"> Añadir nuevo usuario </h2>
      <label className="new-card__option">Nombre: </label>
      <input
        className="new-card__input"
        type="text"
        name="name"
        id="name"
        placeholder="Escribe aquí el nombre..."
        onChange={props.handleName}
        value={props.name}
      />

      <div>
        <label className="new-card__option">Email: </label>
        <input
          className="new-card__input"
          type="email"
          name="email"
          id="email"
          placeholder="ejemplo@ejemplo.com"
          onChange={props.handleEmail}
          value={props.email}
        />
      </div>

      <div>
        <label className="new-card__option">Ciudad: </label>
        <input
          className="new-card__input"
          type="text"
          name="city"
          id="city"
          placeholder="Valladolid..."
          onChange={props.handleCity}
          value={props.city}
        />
      </div>
      <div>
        <label className="new-card__option">Empresa: </label>
        <input
          className="new-card__input"
          type="text"
          name="company"
          id="company"
          placeholder="Empresa..."
          onChange={props.handleCompany}
          value={props.company}
        />
      </div>

      <div>
        <label className="new-card__option">Web: </label>
        <input
          className="new-card__input"
          type="text"
          name="web"
          id="web"
          placeholder="Empresa..."
          onChange={props.handleWeb}
          value={props.web}
        />
      </div>

      <div>
        <input
          className="new-card__btn"
          type="submit"
          value="Añadir"
          onClick={props.handleClick}
        />
      </div>
    </div>
  );
};
export default NewUser;
