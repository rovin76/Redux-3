import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  GET_TODO_ERROR,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
  UPDATE_TODO
} from "./action.type";
import axios from "axios";
//todoapp
export const getTodo = (dispatch) => {
  // Loading time
  dispatch({ type: GET_TODO_LOADING });
  return axios
    .get("http://localhost:8080/todos")
    .then((res) => {
      //success
      dispatch({ type: GET_TODO_SUCCESS, payload: res.data });
    })
    .catch(() => {
      //error
      dispatch({ type: GET_TODO_ERROR });
    });
};

export const addTodo = (dispatch, payload) => {
  axios.post("http://localhost:8080/todos", payload).then((res) => {
    dispatch({ type: ADD_TODO, payload });
  });
};
export const completeTodo = (id) => ({ type: COMPLETE_TODO, payload: id });
export const updateTodo = (payload) => ({ type: UPDATE_TODO, payload });
export const deleteTodo = (id) => ({ type: DELETE_TODO, payload: id });
