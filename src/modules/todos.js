//액션 타입 정하기
const CHANGE_INPUT = 'todos/CHANGE_INPUT' //인풋 값을 변경
const INSERT = 'todos/INSERT' //새로운 todo를 등록함
const TOGGLE = 'todos/TOGGLE' //todo를 체크/체크 해제함
const REMOVE = 'todos/REMOVE' //todo를 제거함

//액션 생성 함수(Action Creator) 만들기
export const changeInput = input => ({
  type : CHANGE_INPUT,
  payload:input
})

let id = 3; // insert가 호출될 떄마다 1씩 더해집니다.
export const insert = text => ({
  type: INSERT,
  payload: {
    id:id++,
    text,
    done:false
  }
})

export const toggle = id => ({
  type: TOGGLE,
  payload: id,
})

export const remove = id =>({
  type: REMOVE,
  payload: id
})

// 초기 상태값 정의하기
const initialState = {
  input : '',
  todos: [
    {
      id: 1,
      text:'리덕스 기초 배우기',
      done:true
    },
    {
      id: 2,
      text:'리액트와 리덕스 사용하기',
      done: false
    }
  ]
}

function todos(state = initialState, action){
  switch(action.type){
    case CHANGE_INPUT:
      return{
        ...state,
        input: action.payload
      }
    case INSERT:
      return{
        ...state,
        todos: [
          ...state.todos,
          action.payload
        ]
      }
    case TOGGLE:
      return{
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ? {...todo, done: !todo.done} : todo
        )
      }
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
      default:
        return state;
  }
}

export default todos

