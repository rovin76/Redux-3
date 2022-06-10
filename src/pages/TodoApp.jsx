import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, getTodo } from "../store/Todo/actions";
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
  useEffect(() => {
    getTodo(dispatch);
  }, []);

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
