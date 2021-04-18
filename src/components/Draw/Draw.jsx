import cx from 'classnames';
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { cloneDeep } from 'lodash';

import { SET_CARD_DRAW, SET_CARD_HAND } from '../../state/constants';
import { setAction } from '../../state/actions';

import Stack from '../Stack';

import * as styles from './Draw.module.scss';

const HAND_SIZE = 5;

const Draw = () => {
  const { cardDraw, cardHand } = useSelector(({ state }) => state);
  const dispatch = useDispatch();

  const drawCount = cardDraw.length;
  const handCount = cardHand.length;

  const playCard = () => {
    if (drawCount > 0 && handCount < HAND_SIZE) {
      const newDraw = cloneDeep(cardDraw);
      const newHand = cloneDeep(cardHand);

      for (let i = 0; i < HAND_SIZE - handCount; i++) {
        if (newDraw.length > 0) {
          newHand.push(newDraw.pop());
        }
      }

      dispatch(setAction(SET_CARD_HAND, newHand));
      dispatch(setAction(SET_CARD_DRAW, newDraw));
    }
  };

  return (
    <div className={cx(styles.root)}>
      <Stack count={drawCount} onClick={() => playCard()} />
    </div>
  );
};

export default Draw;
