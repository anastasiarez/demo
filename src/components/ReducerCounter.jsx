import { useReducer } from "react"; // 1. Import the Hook

const reducer = (state, action) => {

  // 2. Define a Reducer Function: takes two arguments: the current state and an action object. The reducer function's role is to specify how the state should change in response to the action. The action typically has a type property that describes what kind of state change is requested and may include additional data as needed.

  if (action.type === "increment") {
    return {
      ...state,
      count: state.count + 1
    };
  }
  if (action.type === "decrement") {
    return {
      ...state,
      count: state.count - 1
    };
  }
  if (action.type === "add-anythingYouWant") {
    const amountToAdd = action.payload;
    return {
      ...state,
      count: state.count + amountToAdd
    };
  }
  if (action.type === "reset") {
    return {
      ...state,
      count: 0
    };
  }

  throw new Error('reducer called with invalid action type');
};



const initialState = { count: 0 };

// 3. Create your initial state. This can be an object, an array, or any valid JavaScript data type.



const ReducerCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // 4. Use useReducer Hook. In your functional component, call useReducer and pass in the reducer function and the initialState. This hook returns an array with two elements: the current state and a dispatch function.
  //dispatch is used to send actions to the reducer. When you call dispatch, it triggers the reducer to update the state based on the action.

  const increment = () => {
    dispatch({ type: "increment" });
  };

  const decrement = () => {
    dispatch({ type: "decrement" });
  };

  const addAnythingYouWant = (amountToAdd) => {
    dispatch({ type: "add-anythingYouWant", payload: amountToAdd });
  };

  const reset = () => {
    dispatch({ type: "reset" });
  };

  // 5. Dispatch Actions: To update the state, you dispatch actions by calling the dispatch function with an action object. The action object must have a type property that matches one of the cases in your reducer.

  //When an action is dispatched, React will execute the reducer function with the current state and the action object as arguments.

  //Reducer Updates State: The reducer function processes the action and returns the updated state. React will then update the state variable with this new state.

  return (
    <div>
      <h2>Counter_useReducer:</h2>
      <h2>Count: {state.count}</h2>
      <button onClick={increment}>Click here to add</button>
      <button onClick={decrement}>Click here to substract</button>
      <button onClick={() => addAnythingYouWant(5)}>Add anything you want - 5</button>
      <button onClick={reset}>Reset</button>

      {/* // 6. Access State: You can access the current state, which is stored in the state variable, and use it to render your component. */}

    </div>
  );
};

export default ReducerCounter;