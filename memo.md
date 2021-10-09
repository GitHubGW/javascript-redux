## Redux

#### Redux에서 Mutation(변형)을 하지 않는 이유

- React는 무언가 바뀐 부분이 있으면 UI를 리랜더링한다.
- 그런데 새로운 것을 만드는 대신에 무언가를 변형하게 되면 리액트는 그 바뀐 부분을 찾는 것이 어렵다.
- 그래서 무언가 바뀐 부분을 찾는 것을 필요없이 완전히 새로운 것을 전달해주면 리액트는 그 새로운 것을 다시 랜더하면 되는 것이다.
- 예를들어 배열 const x=[1,2,3]이라는 배열이 있을 때 x.push(4)를 통해 배열을 추가하게 되면 x는 여전히 동일한 메모리 주소를 가진 배열이다.
- 하지만 [1,2,3,4]라는 새로운 배열을 만들게 되면 그건 완전히 다른 메모리 주소를 가진 배열이기 때문에 리액트는 해당 배열을 쉽게 알 수 있다.

#### createStore

- redux에서 createStore 함수를 사용하기 위해 import해온다.
- createStore()를 통해 store객체를 생성할 수 있다.
- store객체에는 getState, dispatch, subscribe등 다양한 메서드들을 가지고 있다.
- 단, createStore()의 인자로는 reducer함수가 전달되어야 한다.
- reducer함수에서만이 유일하게 state를 수정하도록 한다.
- reducer함수는 state를 수정할 수도 있지만, reducer함수가 리턴하는 값이 현재 state의 최신 값이 된다.
- store.getState()를 통해 reducer함수가 리턴하는 값인 현재 state의 최신 값을 가져올 수 있다.

```javascript
import { createStore } from "redux";

const reducer = () => {
  return "hello";
};

const store = createStore(reducer);
const result = store.getState(); // result: hello
```

#### reducer

- reducer함수의 첫 번째 인자로는 state=0, 두 번째 인자로는 action을 지정해준다.
- 첫 번째 인자인 state=0은 초기 값은 0이지만, 현재 state값을 가지고 있다. (store.getState()를 한 값을 가지고 있다는 의미이다.)
- store.dispatch({ type: "ADD" }): dispatch()메서드를 통해 reducer함수의 두 번째 인자인 action에 객체를 전달해줄 수 있다.
- 객체를 전달해주게 되면 action에는 { type: "ADD" }값이 들어오게 된다.

```javascript
const reducer = (state = 0, action) => {
  console.log(state, action);

  if (action.type === "ADD") {
    return state+1;
  } else if (action.type === "MINUS") {
    return state-1;
  }else{
    return state;
  }
};

const store = createStore(reducer);
store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });
store.dispatch({ type: "MINUS" });
console.log("getState", store.getState());
```

#### subscribe

- subscribe()메서드 안에 함수를 넣어주면, 해당 함수는 store안에 있는 state값들이 변할 때마다 함수를 실행한다.

```javascript
const handleSubscribe = () => {
  console.log("handleSubscribe");
  number.innerHTML = store.getState();
};

store.subscribe(handleSubscribe);
```

#### Result

```javascript
// index.html
<body>
  <h2 id="number"></h2>
  <button id="addBtn">Add</button>
  <button id="minusBtn">Minus</button>
</body>

// index.js
import { createStore } from "redux";

const number = document.querySelector("#number");
const addBtn = document.querySelector("#addBtn");
const minusBtn = document.querySelector("#minusBtn");
const ADD = "ADD";
const MINUS = "MINUS";

const reducer = (state = 0, action) => {
  console.log(state, action);

  switch (action.type) {
    case ADD:
      return state + 1;
    case MINUS:
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(reducer);
number.innerHTML = store.getState();

const handleAddDispatch = () => {
  store.dispatch({ type: ADD });
};

const handleMinusDispatch = () => {
  store.dispatch({ type: MINUS });
};

const handleSubscribe = () => {
  console.log("handleSubscribe");
  number.innerHTML = store.getState();
};

store.subscribe(handleSubscribe);
addBtn.addEventListener("click", handleAddDispatch);
minusBtn.addEventListener("click", handleMinusDispatch);
```