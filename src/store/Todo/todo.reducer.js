import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  GET_TODO_ERROR,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
  UPDATE_TODO
} from "./action.type";

let initialState = {
  loading: false,
  error: false,
  todos: []
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TODO_LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    case GET_TODO_SUCCESS: {
      return { ...state, todos: payload, loading: false };
    }
    case GET_TODO_ERROR: {
      return { ...state, error: true, loading: false };
    }
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, { ...payload }]
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
