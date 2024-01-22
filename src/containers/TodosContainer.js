// import { connect } from 'react-redux';
//connect 함수 대신 useSelector, useDispatch redux-Hook사용
import { useDispatch, useSelector } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../components/Todos';

const TodosContainer = () => {
  const {input, todos} = useSelector(({todos}) => ({
    input : todos.input,
    todos: todos.todos
  }))

  const dispatch = useDispatch()
  const onChangeInput = input => dispatch(changeInput(input));
  const onInsert = text => dispatch(insert(text));
  const onToggle = id => dispatch(toggle(id));
  const onRemove = id => dispatch(remove(id));
  
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

// export default connect(
//   //비구조화 할당을 통해 todos를 분리히여
//   //state.todos.input 대신 todos.input을 사용
//   ({todos})=>({
//     input:todos.input,
//     todos: todos.todos
//   }),
//   {
//     changeInput,
//     insert,
//     toggle,
//     remove,
//   }
// )(TodosContainer)

export default TodosContainer
