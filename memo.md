## Redux

- redux에서 createStore 함수를 사용하기 위해 import해온다.
- createStore()를 통해 store객체를 생성할 수 있다.
- store객체에는 getState, dispatch등 다양한 메서드들을 가지고 있다.
- 단, createStore()의 인자로는 reducer함수가 전달되어야 한다.
- reducer함수에서만이 유일하게 state를 수정하도록 한다.
- reducer함수는 state를 수정할 수도 있지만, reducer함수가 리턴하는 값이 우리의 어플리케이션의 데이터가 된다.
- store.getState()를 통해 reducer함수가 리턴하는 값을 가져올 수 있다.

```javascript
import { createStore } from "redux";

const reducer = () => {
  return "hello";
};

const store = createStore(reducer);

const result = store.getState(); // result: hello
```

- reducer함수의 첫 번째 인자로는 state=0, 두 번째 인자로는 action을 지정해준다.
- 첫 번째 인자인 state=0은 초기 값은 0이지만, 현재 state값을 가지고 있다. (store.getState()를 한 값을 가지고 있다는 의미이다.)
- store.dispatch({ type: "ADD" }): dispatch()메서드를 통해 reducer함수의 두 번째 인자인 action에 객체를 전달해줄 수 있다.
- 객체를 전달해주게 되면 action에는 { type: "ADD" }값이 들어오게 된다.
- 
- 

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
const getState = store.getState();

store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });
store.dispatch({ type: "MINUS" });
store.dispatch({ type: "MINUS" });

console.log("getState", store.getState());
```

```javascript
import { createStore } from "redux";
```

```javascript
import { createStore } from "redux";
```

```javascript
import { createStore } from "redux";
```

```javascript
import { createStore } from "redux";
```

```javascript
import { createStore } from "redux";
```

```javascript
import { createStore } from "redux";
```

```javascript
import { createStore } from "redux";
```