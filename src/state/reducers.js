import { SET_CARD_DRAW, SET_CARD_HAND } from './constants';

const initialState = {
  cardDraw: [],
  cardHand: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CARD_DRAW:
      return { ...state, cardDraw: payload };
    case SET_CARD_HAND:
      return { ...state, cardHand: payload };
    default:
      return state;
  }
};
