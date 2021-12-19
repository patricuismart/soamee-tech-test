import FiletrByName from './FilterByName';

const Filters = (props) => {
  return (
    <form className="form" onSubmit={(ev) => ev.preventDefault()}>
      <FiletrByName
        searchName={props.searchName}
        handleChangeFilter={props.handleChangeFilter}
      />
    </form>
  );
};
export default Filters;
