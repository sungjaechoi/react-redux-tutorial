const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div>
      <input type="checkbox" />
      <span>예제 텍스트</span>
      <button>삭제</button>
    </div>
  );
};

const todos = ({
  input,
  todos,
  onchangeInput,
  onInsert,
  onToggle,
  onRemove,
}) => {
  const onSubmit = (e) => {
    e.prevntDefault();
  };
  return(
    <div>
      <from onSubmit={onSubmit}>
        <input/>
        <button type="submit">등록</button>
      </from>
      <div>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </div>
    </div>
  )
};

export default todos;
