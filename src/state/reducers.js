import { SET_CARD_DRAW, SET_CARD_HAND, SET_CARD_HOLD } from './constants';

const initialState = {
  cardDraw: [],
  cardHand: [],
  cardHold: { 0: [], 1: [], 2: [], 3: [] },
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CARD_DRAW:
      return { ...state, cardDraw: payload };
    case SET_CARD_HAND:
      return { ...state, cardHand: payload };
    case SET_CARD_HOLD:
      return { ...state, cardHold: payload };
    default:
      return state;
  }
};
