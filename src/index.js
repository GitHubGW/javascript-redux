import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodoObject = { id: action.id, text: action.text };
      const addTodoResult = [newTodoObject, ...state];
      return addTodoResult;
    case DELETE_TODO:
      const deleteTodoResult = state.filter((state) => state.id !== action.id);
      return deleteTodoResult;
    default:
      return state;
  }
};

const handleAddTodo = (inputValue) => {
  store.dispatch({ type: ADD_TODO, id: Date.now(), text: inputValue });
};

const handleDeleteTodo = (event) => {
  const parentNodeId = event.target.parentNode.id;
  store.dispatch({ type: DELETE_TODO, id: +parentNodeId });
};

const handleSubscribe = () => {
  const allTodos = store.getState();
  ul.innerHTML = "";

  allTodos.forEach((todo) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    li.id = todo.id;
    li.innerText = todo.text;
    button.innerText = "Delete";
    button.addEventListener("click", handleDeleteTodo);
    li.appendChild(button);
    ul.appendChild(li);
  });
};

const handleSubmit = (event) => {
  event.preventDefault();
  const inputValue = input.value;
  input.value = "";
  handleAddTodo(inputValue);
};

const store = createStore(reducer);
store.subscribe(handleSubscribe);

form.addEventListener("submit", handleSubmit);
