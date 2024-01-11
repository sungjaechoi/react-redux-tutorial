// 액션 타입 정의하기
const INCREASE = 'cunter/INCREASE';
const DECREASE = 'counter/DECREASE';

//액션 생성 함수(Action Creator) 만들기
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 초기 상태값 정의하기
const initialState = {
  number: 0,
};

// 리듀서 함수 정의하기
function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export default counter;
