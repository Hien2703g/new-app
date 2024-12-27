import { useEffect, useState } from "react";
import Delete from "./deletetodo";
import Edit from "./edittodo";

function Add() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      fetch("https://dummyjson.com/todos")
        .then((res) => res.json())
        .then((data) => {
          setTodos(data.todos);
        });
    };
    fetchApi();
  }, []);
  //   console.log(todos);
  const handleAdd = () => {
    fetch("https://dummyjson.com/todos/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        todo: "Use DummyJSON in the project",
        completed: false,
        userId: 5,
      }),
    })
      .then((res) => res.json())
      .then(console.log);
  };

  return (
    <>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Add new todo..."
          className="flex-grow p-2 border rounded-l-md focus:outline-none"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 rounded-r-md hover:bg-blue-600"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center bg-gray-100 p-3 rounded shadow"
          >
            <span className="text-gray-700">{item.todo}</span>
            <Delete item={item}/>
            <Edit item={item}/>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Add;
