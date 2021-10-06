import { createStore } from "redux";

// const number = document.querySelector("#number");
// const addBtn = document.querySelector("#addBtn");
// const minusBtn = document.querySelector("#minusBtn");

const reducer = (state = 0, action) => {
  console.log(state, action);

  if (action.type === "ADD") {
    return state + 1;
  } else if (action.type === "MINUS") {
    return state - 1;
  } else {
    return state;
  }
};

const store = createStore(reducer);
// console.log("store", store);

store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });
store.dispatch({ type: "MINUS" });
store.dispatch({ type: "MINUS" });

console.log("getState", store.getState());

store.dispatch({ type: "MULTI" });
console.log("getState", store.getState());
