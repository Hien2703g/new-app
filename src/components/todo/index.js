
import Add from "./addtodo";

function Todo(){
    return (
      <>
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
          <div className="w-full max-w-md bg-white p-5 shadow-md rounded">
            <h1 className="text-xl font-bold text-gray-700 mb-4">Todo List</h1>
            <Add />
          </div>
        </div>
      </>
    );
}
export default Todo;