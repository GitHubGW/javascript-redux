import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: action.id, text: action.text }];
    case DELETE_TODO:
      return state;
    default:
      return state;
  }
};

const handleSubscribe = () => {
  console.log(store.getState());
};

const handleSubmit = (event) => {
  event.preventDefault();
  const inputValue = input.value;
  input.value = "";
  store.dispatch({ type: ADD_TODO, id: Date.now(), text: inputValue });
};

const store = createStore(reducer);

store.subscribe(handleSubscribe);

form.addEventListener("submit", handleSubmit);
