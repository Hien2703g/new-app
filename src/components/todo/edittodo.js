import { useEffect, useState } from "react";

function Edit(props) {
  const { item } = props;
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
  const handleEdit= (id) => {
    
    fetch(`https://dummyjson.com/todos/${id}`, {
      method: "PUT" /* or PATCH */,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        completed: false,
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
          placeholder="Edit todo"
          className="flex-grow p-2 border rounded-l-md focus:outline-none"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 rounded-r-md hover:bg-blue-600"
          onClick={()=>handleEdit(item.id)}
        >
          Edit
        </button>
      </div>
    </>
  );
}
export default Edit;
