import IconButton from "./template/IconButton";

export default function TodoList({
  list,
  handleRemove,
  handleMarkAsDone,
  handleMarkAsPending,
}) {
  function renderRows() {
    const todoList = list || [];
    return todoList.map((todo) => (
      <tr key={todo._id}>
        <td className={todo.done ? "markedAsDone" : ""}>{todo.description}</td>
        <td>
          <IconButton
            btnStyle="success"
            icon="check"
            onClick={() => handleMarkAsDone(todo)}
            hide={todo.done}
          />
          <IconButton
            btnStyle="warning"
            icon="undo"
            onClick={() => handleMarkAsPending(todo)}
            hide={!todo.done}
          />
          <IconButton
            btnStyle="danger"
            icon="trash-o"
            onClick={() => handleRemove(todo)}
            hide={!todo.done}
          />
        </td>
      </tr>
    ));
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Descrição</th>
            <th className="tableActions">Ações</th>
          </tr>
        </thead>

        <tbody>{renderRows()}</tbody>
      </table>
    </div>
  );
}
