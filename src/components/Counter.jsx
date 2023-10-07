import React from "react";

const Counter = () => {
  const arr = React.useState(0); //let React know that i need it to use state, assign to 0 for now.
  // const count = arr[0]; // get the value, index 0 in the useState array
  // const setCount = arr[1]; //set the value, index 1 in the useState array

  //the code above is destractured and writtend in one line. Its the same thing:
  const [count, setCount] = React.useState(0);

  // function to start the counter
  const increment = () => {
    setCount(count + 1); //always use setter to update the state
  };

  return (
    <div>
      <h2>Counter_useState: {count} </h2>
      <button onClick={increment}>Click me!</button>
      {/* add onClick to a button and call the fn */}

    </div>
  );
};

export default Counter;