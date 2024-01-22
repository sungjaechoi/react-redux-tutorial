// import {connect} from 'react-redux'
//connect 함수 대신 useSelector, useDispatch redux-Hook사용
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter'; 
import { increase, decrease } from "../modules/counter";

const CounterContainer = () => {
  const number = useSelector(state => state.counter.number)
  //여기서 state는 Redux 스토어의 전체 상태를 의미
  const dispatch = useDispatch();
  const onIncrease = () =>dispatch(increase())
  const onDecrease = () =>dispatch(decrease())
  return <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease}/>
};

export default CounterContainer

// const mapStateToProps = state =>({
//   number:state.counter.number
// })

// const mapDispatchToProps = dispatch =>({
//   increase: () => {
//     dispatch(increase())
//   },
//   decrease: () => {
//     dispatch(decrease())
//   }
// })

// export default connect(mapStateToProps,mapDispatchToProps)(CounterContainer)