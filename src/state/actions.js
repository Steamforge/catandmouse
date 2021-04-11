import { SET_CARD_DRAW, SET_CARD_HAND, SET_CARD_HOLD } from './constants';

export const setCardDraw = cardDraw => ({
  type: SET_CARD_DRAW,
  payload: cardDraw,
});

export const setCardHand = cardHand => ({
  type: SET_CARD_HAND,
  payload: cardHand,
});

export const setCardHold = cardHold => ({
  type: SET_CARD_HOLD,
  payload: cardHold,
});
