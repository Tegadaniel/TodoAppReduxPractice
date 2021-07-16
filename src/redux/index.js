import { createStore, combineReducers } from "redux";
import { addTodo, todos, ToDo, delTodo } from "./todos";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({
    todos,
})

export default createStore(reducers, composeWithDevTools())

export {addTodo, ToDo, todos, delTodo}