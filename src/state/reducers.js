import {
  SET_CARD_BUILD,
  SET_CARD_DRAW,
  SET_CARD_HAND,
  SET_CARD_HOLD,
  SET_CARD_STOCK,
  SET_DRAGGING,
} from './constants';

const initialState = {
  cardBuild: { 0: [], 1: [], 2: [], 3: [] },
  cardDragging: {},
  cardDraw: [],
  cardHand: [],
  cardHold: { 0: [], 1: [], 2: [], 3: [] },
  cardStock: [],
};

const reducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CARD_BUILD:
      return { ...state, cardBuild: payload };
    case SET_CARD_DRAW:
      return { ...state, cardDraw: payload };
    case SET_CARD_HAND:
      return { ...state, cardHand: payload };
    case SET_CARD_HOLD:
      return { ...state, cardHold: payload };
    case SET_CARD_STOCK:
      return { ...state, cardStock: payload };
    case SET_DRAGGING:
      return { ...state, cardDragging: payload };
    default:
      return state;
  }
};

export default reducers;
