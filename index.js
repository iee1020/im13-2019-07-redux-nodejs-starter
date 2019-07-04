const { createStore } = require("redux");

const initialState = 0;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(counterReducer);

// store가 reducer를 통해서 업데이트가 되면 console.log를 찍겠다. -> ui를 업데이트(render)할 때 용이
store.subscribe(() => console.log(store.getState()));

// console.log("initial state", store.getState()); //0
store.dispatch({ type: "INCREMENT" });
// console.log("After Increment 1", store.getState()); // 1
store.dispatch({ type: "INCREMENT" });
// console.log("After Increment 2", store.getState()); // 2
store.dispatch({ type: "DECREMENT" });
// console.log("After Decrement 1", store.getState()); // 1
store.dispatch({ type: "DECREMENT" });
// console.log("After Decrement 2", store.getState()); // 0
