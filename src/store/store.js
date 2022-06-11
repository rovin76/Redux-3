import {
  legacy_createStore,
  applyMiddleware,
  compose,
  combineReducers
} from "redux";
import thunk from "redux-thunk";
import counterReducer from "./counter/counter.reducer";
import todoReducer from "./Todo/todo.reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootreducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer
});

export const store = legacy_createStore(
  rootreducer,
  composeEnhancers(applyMiddleware(thunk))
);
