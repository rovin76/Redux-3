import {
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  COMPLETE_TODO,
  DELETE_TODO,
  GET_TODO_ERROR,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
  UPDATE_TODO
} from "./action.type";

let initialState = {
  addTodo: {
    loading: false,
    error: false,
    data: {}
  },
  getTodos: {
    loading: false,
    error: false,
    data: []
  }
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TODO_LOADING: {
      return {
        ...state,
        getTodos: {
          ...state.getTodos,
          loading: true
        }
      };
    }
    case GET_TODO_SUCCESS: {
      return {
        ...state,
        getTodos: {
          ...state.getTodos,
          loading: false,
          data: payload,
          error: false
        }
      };
    }
    case GET_TODO_ERROR: {
      return {
        ...state,
        getTodos: {
          ...state.getTodos,
          loading: false,
          error: true
        }
      };
    }
    case ADD_TODO_LOADING: {
      return {
        ...state,
        addTodo: {
          ...state.addTodo,
          loading: true,
          error: false
        }
      };
    }
    case ADD_TODO_SUCCESS: {
      return {
        ...state,
        getTodos: {
          data: [...state.getTodos.data, payload]
        },
        addTodo: {
          ...state.addTodo,
          loading: false,
          error: false,
          data: payload
        }
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
