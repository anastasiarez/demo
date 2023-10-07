import { useState } from "react";

const CounterTwo = () => {
  const [count, setCount] = useState(10);

  const clickHandler = () => {
    setCount(prev => prev + 1);
  };

  return <div>
    <h2>
      CounterTwo_avoidStale_Prev: {count}
    </h2>
    <button onClick={clickHandler}>Click</button>

  </div>;
};

export default CounterTwo;



// const clickHandler = () => {
//   setCount(count + 1);
// };

// stale state
// the way to go around the stale state is to do setCount((prev) => { return prev + 1;}) prev - for previous value. It can be called anything really

//spread operator: const arr = [1, 2, 3] const copyOfArr = [...arr]; / const obj = { id: 1, name: "Anastasia"} const copyOfObj = {...obj}; copy.name="Oleh" => {id: 1, name: "Anastasia"}, {id: 1, name: "Oleh"}


//update state using spread operator

//const [user, setUser] = useState({ name: "John", age: 30 });

//// To update a single property
// const updatedUser = { ...user, age: 31 };
// setUser(updatedUser);

// // To update multiple properties
// const updatedUser = { ...user, age: 31, city: "New York" };
// setUser(updatedUser);
