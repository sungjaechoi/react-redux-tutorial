// import Counter from "./components/Counter";
import CounterContainer from "./containers/CounterContainer";
import Todos from "./components/Todos";

const App = () => {
  return (
    <div>
      {/* <Counter number={0}/> */}
      <CounterContainer/>
      <hr/>
      <Todos/>
    </div>
  );
};

export default App;