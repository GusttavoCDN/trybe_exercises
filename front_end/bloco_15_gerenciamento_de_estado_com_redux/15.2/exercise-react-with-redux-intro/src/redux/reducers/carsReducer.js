import {MOVE_CAR} from '../actions';

const INITIAL_STATE = {
  cars: {
    red: false,
    blue: false,
    yellow: false,
  },
};

export const carsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MOVE_CAR:
      return {
        ...state,
        cars: {
          ...state.cars,
          [action.car]: action.side,
        },
      };
    default:
      return state;
  }
};