const NewUser = ({ formData, handleClick, setFormData }) => (
  <div className="new-card" id="new_user">
    <h2 className="new-card__title"> Añadir elemento nuevo: </h2>
    <label className="new-card__option">Nombre: </label>
    <input
      className="new-card__input"
      type="text"
      name="name"
      id="name"
      placeholder="Escribe aquí el nombre..."
      onChange={(ev) => setFormData('name', ev.target.value)}
      value={formData.name}
    />

    <div>
      <label className="new-card__option">Email: </label>
      <input
        className="new-card__input"
        type="email"
        name="email"
        id="email"
        placeholder="ejemplo@ejemplo.com"
        onChange={(ev) => setFormData('email', ev.target.value)}
        value={formData.email}
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
        onChange={(ev) => setFormData('city', ev.target.value)}
        value={formData.city}
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
        onChange={(ev) => setFormData('company', ev.target.value)}
        value={formData.company}
      />
    </div>

    <div>
      <label className="new-card__option">Web: </label>
      <input
        className="new-card__input"
        type="text"
        name="website"
        id="website"
        placeholder="Website..."
        onChange={(ev) => setFormData('website', ev.target.value)}
        value={formData.website}
      />
    </div>

    <div>
      <input
        className="new-card__btn"
        type="submit"
        value="Añadir"
        onClick={handleClick}
      />
    </div>
  </div>
);

export default NewUser;
