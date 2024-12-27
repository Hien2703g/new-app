import { useEffect, useState } from "react";

function Delete(props) {
  const { item } = props;
  const [todos, setTodos] = useState([]);

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
  const handleDelete = (id) => {
    fetch(`https://dummyjson.com/todos/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(console.log);
  };
  return (
    <>
      <button
        className="text-red-500 hover:text-red-600"
        onClick={() => handleDelete(item.id)}
      >
        Delete
      </button>
    </>
  );
}
export default Delete;
