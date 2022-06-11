import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, getTodo } from "../store/Todo/actions";
function TodoApp() {
  const ref = useRef();
  const dispatch = useDispatch();
  // button adding
  const { loading: loadingButton } = useSelector((state) => state.todo.addTodo);
  const { loading, error, data: todos } = useSelector(
    (state) => state.todo.getTodos
  );
  console.log(todos);
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
    dispatch(getTodo());
  }, []);

  if (loading) {
    return <p>loading</p>;
  } else if (error) {
    return <p>Something wrong</p>;
  } else {
    return (
      <div>
        <div>
          <h1>TodoApp</h1>
          <input ref={ref} type="text" placeholder="Type here...." />
          <button onClick={addNew} disabled={loadingButton}>
            Add
          </button>
        </div>

        <br />
        <br />
        {todos.map((todo) => (
          <div key={todo.id}>{todo.value}</div>
        ))}
      </div>
    );
  }
}
export default TodoApp;
