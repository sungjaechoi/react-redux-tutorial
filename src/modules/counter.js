import { createAction, handleActions } from 'redux-actions';

// 액션 타입 정의하기
const INCREASE = 'cunter/INCREASE';
const DECREASE = 'counter/DECREASE';

//액션 생성 함수(Action Creator) 만들기
//redux-action 라이브러 사용 전
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });

//redux-action 라이브러리 사용
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 초기 상태값 정의하기
const initialState = {
  number: 0,
};

// 리듀서 함수 정의하기

// redux-action 라이브러리 사용 전
// function counter(state = initialState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// }

// redux-action 라이브러리 사용
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState,
);

export default counter;
