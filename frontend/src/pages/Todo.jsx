import { useEffect, useState } from "react";
import PageHeader from "../components/template/PageHeader";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import axios from "axios";

const URL = "http://localhost:3003/api/todos";

export default function Todo() {
  const [descriptions, setDescriptions] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  //GET TODOS
  async function getTodos(descriptions) {
    const search = descriptions ? `&description__regex=${descriptions}` : "";
    await axios
      .get(`${URL}?sort=-createdAt${search}`)
      .then((r) => setTodos(r.data));
  }

  //POST TODOS
  async function handleAdd() {
    const description = descriptions;
    await axios.post(URL, { description }).then((r) => getTodos());

    setDescriptions("");
  }

  //DELETE TODOS
  async function handleRemove(todo) {
    await axios
      .delete(`${URL}/${todo._id}`)
      .then((r) => getTodos(descriptions));
  }

  //MARK TODOS AS DONE
  async function handleMarkAsDone(todo) {
    await axios
      .put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then((r) => getTodos(descriptions));
  }

  //MARK TODOS AS PENDING
  async function handleMarkAsPending(todo) {
    await axios
      .put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then((r) => getTodos(descriptions));
  }

  //INPUT
  function handleChange(e) {
    setDescriptions(e.target.value);
  }

  //SEARCH FUNCTION
  function handleSearch() {
    getTodos(descriptions);
  }

  //CLEAR INPUT
  function handleClear() {
    setDescriptions("");
  }

  return (
    <div>
      <PageHeader name="Tarefas" small="Cadastro" />

      <TodoForm
        handleAdd={handleAdd}
        description={descriptions}
        handleChange={handleChange}
        handleSearch={handleSearch}
        handleClear={handleClear}
      />
      <TodoList
        list={todos}
        handleRemove={handleRemove}
        handleMarkAsDone={handleMarkAsDone}
        handleMarkAsPending={handleMarkAsPending}
      />
    </div>
  );
}
