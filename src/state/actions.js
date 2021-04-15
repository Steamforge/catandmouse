import {
  SET_CARD_BUILD,
  SET_CARD_DRAW,
  SET_CARD_HAND,
  SET_CARD_HOLD,
  SET_CARD_STOCK,
  SET_DRAGGING,
} from './constants';

export const setCardBuild = cardBuild => ({
  type: SET_CARD_BUILD,
  payload: cardBuild,
});

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

export const setCardStock = cardStock => ({
  type: SET_CARD_STOCK,
  payload: cardStock,
});

export const setDragging = cardDragging => ({
  type: SET_DRAGGING,
  payload: cardDragging,
});
