import Grid from "./template/Grid";
import IconButton from "./template/IconButton";

export default function TodoForm({
  handleAdd,
  description,
  handleChange,
  handleSearch,
  handleClear,
}) {
  //Key shortcuts
  function keyHandler(e) {
    if (e.key === "Enter") {
      e.shiftKey ? handleSearch() : handleAdd();
    } else if (e.key === "Escape") {
      handleClear();
    }
  }

  return (
    <div role="form" className="todoForm row">
      <Grid cols="12 9 10">
        <input
          type="text"
          id="description"
          className="form-control"
          placeholder="Adicione uma tarefa"
          value={description}
          onChange={handleChange}
          onKeyUp={keyHandler}
        />
      </Grid>

      <Grid cols="12 3 2">
        <IconButton btnStyle="primary" icon="plus" onClick={handleAdd} />
        <IconButton btnStyle="info" icon="search" onClick={handleSearch} />
        <IconButton btnStyle="danger" icon="close" onClick={handleClear} />
      </Grid>
    </div>
  );
}
