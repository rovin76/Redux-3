import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  GET_TODO,
  UPDATE_TODO
} from "./action.type";

const todoReducer = (state = { todos: [] }, { type, payload }) => {
  switch (type) {
    case GET_TODO: {
      return { ...state, todos: payload };
    }
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, { ...payload, id: state.todos.length }]
      };
    }
    case DELETE_TODO: {
      return { ...state };
    }
    case COMPLETE_TODO: {
      return { ...state };
    }
    case UPDATE_TODO: {
      return { ...state };
    }
    default: {
      return state;
    }
  }
};
export default todoReducer;
