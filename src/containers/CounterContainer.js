import {connect} from 'react-redux'
import Counter from '../components/Counter'; 
import { increase, decrease } from "../modules/counter";

const CounterContainer = ({number, increase, decrease}) => {
  return <Counter number={number} onIncrease={increase} onDecrease={decrease}/>
};

// connect 함수 내부에서 익명함수로 선언
export default connect(
  state => ({
    number:state.counter.number,
  }),
  dispatch =>({
    increase: () => dispatch(increase()),
    decrease: () => dispatch(decrease())
  })
)(CounterContainer)