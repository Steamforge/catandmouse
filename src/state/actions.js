import { SET_CARD_DRAW, SET_CARD_HAND } from './constants';

export const setCardDraw = cardDraw => ({
  type: SET_CARD_DRAW,
  payload: cardDraw,
});

export const setCardHand = cardHand => ({
  type: SET_CARD_HAND,
  payload: cardHand,
});
