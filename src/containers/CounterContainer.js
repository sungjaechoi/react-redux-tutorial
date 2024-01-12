import {connect} from 'react-redux'
import Counter from '../components/Counter'; 
import { increase, decrease } from "../modules/counter";

const CounterContainer = ({number, increase, decrease}) => {
  return <Counter number={number} onIncrease={increase} onDecrease={decrease}/>
};

// connect 함수 사용시 mapDispatchToProps의 인자를 객체로 넣을 시 connect함수가 내부적으로 bindActionCreators함수의 작업을 대신 해줌

export default connect(
  state => ({
    number:state.counter.number,
  }),
  {
    increase,
    decrease,
  }
)(CounterContainer)