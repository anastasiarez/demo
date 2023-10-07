import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';
import CounterTwo from './components/Counter_two';
import ReducerCounter from './components/ReducerCounter';


const App = () => {

  const name = 'Anastasia';
  const user = () => {
    return 'Anastasia';
  };

  return (
    <div className="App">

      {/* three ways of calling the component and passing props */}

      {Header({ heading: "Wellcome!" })}
      <Header heading="About us" />
      <Header heading="Cart" anotherArg=" & more stuff">
        <div>
          <h3>
            Children
          </h3>
        </div>
      </Header>


      <header className="App-header">
        <Counter />
        <CounterTwo />
        <ReducerCounter />
        <p>
          const name: {name}
          <br>
          </br>
          function user: {user()}
        </p>
      </header>
    </div>
  );
};

export default App;

//heading="about us" are props
