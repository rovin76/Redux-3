import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  GET_TODO,
  UPDATE_TODO
} from "./action.type";
import axios from "axios";
//todoapp
export const getTodo = (dispatch) => {
  return axios.get("http://localhost:8080/todos").then((res) => {
    dispatch({ type: GET_TODO, payload: res.data });
  });
};

export const addTodo = (payload) => ({ type: ADD_TODO, payload });
export const completeTodo = (id) => ({ type: COMPLETE_TODO, payload: id });
export const updateTodo = (payload) => ({ type: UPDATE_TODO, payload });
export const deleteTodo = (id) => ({ type: DELETE_TODO, payload: id });
