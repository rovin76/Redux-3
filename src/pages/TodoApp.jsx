import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../store/actions";

function TodoApp() {
  const ref = useRef();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  const addNew = () => {
    let value = ref.current.value;
    dispatch(
      addTodo({
        value: value,
        isCompleted: false
      })
    );
    ref.current.value = null;
  };
  console.log(todos);
  return (
    <div>
      <div>
        <h1>TodoApp</h1>
        <input ref={ref} type="text" placeholder="Type here...." />
        <button onClick={addNew}>Add</button>
      </div>

      <br />
      <br />
      {todos.map((todo) => (
        <div key={todo.id}>{todo.value}</div>
      ))}
    </div>
  );
}
export default TodoApp;
