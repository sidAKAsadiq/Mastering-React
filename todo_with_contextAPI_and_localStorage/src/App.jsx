import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Todo_provider } from "./contexts/todo_context";
import "./App.css";
import Todo_form from "./components/Todo_form";
import Todo_item from "./components/Todo_item";

function App() {
  const [todos, set_todos] = useState([]);

  const add_todo = (content) => {
    console.log("in add todo");
    const id = Date.now();
    const is_completed = false;
    //prev as it is rehny do bs eik obj add kardo
    set_todos((prev) => [ { id, content, is_completed },...prev]);

    console.log(todos);

    //sirf add karty waqt nahi balky jab bhi todos may koi bhi change aye ga tou set karwan pary ga
    // localStorage.setItem("todos" , todos)
  };

  const update_todo = (id, content) => {
    set_todos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, content };
        } 
        else {
          return todo;
        }
      })
    );
  };

  const delete_todo = (id) => {
    set_todos((prev) => prev.filter((each_todo) => each_todo.id !== id));
  };

  const toggle_todo_completion = (id) => {
    // set_todos((prev) => prev.map((each_todo) => each_todo.id === id ? {...each_todo , is_completed : !each_todo.is_completed} : each_todo ))

    //better syntax
    set_todos((prev) =>
      prev.map((each_todo) => {
        if (each_todo.id === id) {
          return { ...each_todo, is_completed: !each_todo.is_completed };
        } 
        else {
          return each_todo;
        }
      })
    );
  };

  useEffect(() => {
    const todos_from_local_storage = JSON.parse(
      localStorage.getItem("todos")
    );

    console.log("from ls" ,todos_from_local_storage)

    if (todos_from_local_storage && todos_from_local_storage.length > 0) {
      set_todos(todos_from_local_storage);
    }
  }, []);

  useEffect(() => {
    console.log("setting")
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Todo_provider
        value={{
          todos,
          add_todo,
          delete_todo,
          update_todo,
          toggle_todo_completion,
        }}
      >
        <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">
              Manage Your Todos
            </h1>
            <div className="mb-4">
              <Todo_form />
              {/* Todo form goes here */}
            </div>
            <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}
              {todos.map((todo) => (
                <div key={todo.id} className="w-full">
                    <Todo_item todo = {todo}/>
                  <br />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Todo_provider>
    </>
  );
}

export default App;
