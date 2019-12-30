import { createStore } from "redux";

import * as actionTypes from "./actions/actionTypes";

const initialState = {
  todos: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODOS:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case actionTypes.DELETE_TODO:
      let newTodos = state.todos.filter((e, index) => index !== action.payload); //hapus elemen array dg filter

      //   let newTodos = [...state.todos]; //copy state todos
      //   newTodos.splice(action.payload.index, 1); //hapus elemen array dg splice

      return {
        ...state,
        todos: newTodos
      }; //return state baru
    case actionTypes.EDIT_TODO: //edit state
      let todos = [...state.todos]; //copy state todos
      //ganti data todo
      let index = action.payload.index;
      let todo = action.payload.todo;
      todos[index] = todo;

      //return state baru
      return {
        ...state,
        todos
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
